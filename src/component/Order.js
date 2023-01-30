import React, { useState } from 'react';
import {

    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,

    MDBTextArea
}
    from 'mdb-react-ui-kit';
import NewItem from './NewItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Order() {

    // const navigate = useNavigate()
    const [val, setVal] = useState({
        fastname: "",
        lastname: "",
        email: "",
        phone: "",
        address: ""
    });

    const setVale = (e) => {

        const { name, value } = e.target;

        setVal(() => {
            return {
                ...val,
                [name]: value
            }
        })
        console.log(val)

    }

    // const adddata = async (e) => {
    //     e.preventDefault();
    //     // alert("prem sain")

    //     const { fastname, lastname, email, phone, address } = val;

    //     console.log(val)

    //     if (fastname === "") {
    //         toast.warning("fname is required!", {
    //             position: "top-center"
    //         });
    //     } else if (email === "") {
    //         toast.error("email is required!", {
    //             position: "top-center"
    //         });
    //     } else if (!email.includes("@")) {
    //         toast.warning("includes @ in your email!", {
    //             position: "top-center"
    //         });
    //     } else if (phone === "") {
    //         toast.error("phone is required!", {
    //             position: "top-center"
    //         });
    //     } else if (phone.length <= 10) {
    //         toast.error("phone number must be 10 char!", {
    //             position: "top-center"
    //         });
    //     } else if (address === "") {
    //         toast.error("address is required!", {
    //             position: "top-center"
    //         });
    //     }
    //     else if (lastname === "") {
    //         toast.error("lastname is required!", {
    //             position: "top-center"
    //         });
    //     } else {
    //         // console.log("user registration succesfully done");

    //         // console.log(data)
    //         const data = await fetch("/order", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 val
    //             })
    //         });

    //         const res = await data.json();
    //         console.log(res.status);

    //         if (res.status === 201) {
    //             toast.success("Registration Successfully done 😃!", {
    //                 position: "top-center"
    //             });

    //             navigate("/Thankyou")

    //             setVal({ ...val, fastname: "", lastname: "", email: "", phone: "", address: "" });
    //         }
    //         else {
    //             alert("prem")
    //         }
    //     }
    // }
    const adddata = () => {

    }

    return (

        <>
            <NewItem />
            <MDBContainer fluid >

                <MDBRow className='justify-content-center align-items-center m-5 mt-5'>

                    <MDBCard>
                        <MDBCardBody className='px-4' style={{ backgroundColor: '#e3e3e3' }}>

                            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center" style={{ color: "blue" }}>Order Book Item</h3>

                            <MDBRow>

                                <MDBCol md='6' style={{ color: 'blue' }}>
                                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name="fastname" onChange={setVale} value={val.fastname} />
                                </MDBCol>

                                <MDBCol md='6' style={{ color: 'blue' }}>
                                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' name="lastname" onChange={setVale} value={val.lastname} />
                                </MDBCol>

                            </MDBRow>



                            <MDBRow>

                                <MDBCol md='6' style={{ color: 'blue' }}>
                                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' name="email" onChange={setVale} value={val.email} />
                                </MDBCol>

                                <MDBCol md='6' style={{ color: 'blue' }}>
                                    <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' name="phone" onChange={setVale} value={val.phone} />
                                </MDBCol>

                            </MDBRow>
                            <MDBRow>
                                <MDBCol style={{ color: 'blue' }}>
                                    <MDBTextArea wrapperClass='mb-6' label='Address' size='md' id='form5' type='rel' name="address" onChange={setVale} value={val.address} />
                                </MDBCol>
                            </MDBRow>


                            {/* <MDBBtn className='mb-4' size='lg'>Confirm Order</MDBBtn> */}
                            <button className='btn_confirm_order' onClick={adddata}>Confirm Order</button>

                        </MDBCardBody>
                    </MDBCard>

                </MDBRow>
            </MDBContainer>
            <Footer />
        </>
    );
}

export default Order;