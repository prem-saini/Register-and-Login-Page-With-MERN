




const express = require("express");
const router = new express.Router();
const userdb = require("../model/userSchema");
var bcrypt = require("bcryptjs")
// const authenticate = require("../middleware/authenticate");


// for user registration

router.post("/register", async (req, res) => {

    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                fname, email, password, cpassword
            });

            // here password hasing

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});


router.post("/login", async (req, res) => {
    // console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
        const userValid = await userdb.findOne({ email: email });

        if (userValid) {

            const isMatch = await bcrypt.compare(password, userValid.password);

            if (!isMatch) {
                res.status(422).json({ error: "invalid details" })
            } else {

                // token generate
                const token = await userValid.generateAuthtoken();

                // console.log(token)


                // cookiegenerate
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({ status: 201, result })
                console.log(res)
            }
        }

    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});


// router.post("/order", async (req, res) => {

//     const { fastname, lastname, email, phone, address } = req.body;

//     if (!fastname || !email || !phone || !address || !lastname) {
//         res.status(422).json({ error: "fill all the details" })
//     }

//     try {

//         const preuser = await userdb.findOne({ email: email });

//         if (preuser) {
//             res.status(422).json({ error: "This Email is Already Exist" })
//         } else {
//             const finalUser = new userdb({
//                 fastname, lastname, email, phone, address
//             });

//             // here password hasing

//             const storeData = await finalUser.save();

//             // console.log(storeData);
//             res.status(201).json({ status: 201, storeData })

//         }
//         console.log(res)

//     } catch (error) {
//         res.status(422).json(error);
//         console.log("catch block error");
//     }

// });


module.exports = router;