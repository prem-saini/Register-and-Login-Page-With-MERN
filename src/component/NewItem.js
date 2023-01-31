import React, { useState, useEffect } from "react"
import "./Section.css"

import { useDispatch, useSelector } from "react-redux";
// import Data from "../Data"
import Delete from "../Image/delete.png"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { DLT, ADD, REMOVE } from "../actions/action";
// import Footer from "./Footer";


function NewItem() {


    const location = useLocation()
    // console.log(location, "kkkkkk");
    const [card, setCard] = useState([location?.state])
    // console.log(card, "prem")
    const { id } = useParams();
    // console.log(id, "opopop");
    const dispatch = useDispatch()
    // console.log(id)
    const history = useNavigate()

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata, "weewewew");

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id === id
        })
        setCard(comparedata)
    }



    const dlt = (id) => {
        dispatch(DLT(id))
        history("/Section")
    }


    const send = (e) => {

        dispatch(ADD(e));

    }

    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    useEffect(() => {
        compare();
    }, [id])

    const onOreder = () => {
        history("/Order")
    }
    return (
        <>
            <div className="NewItem mt-5">
                <h1 style={{ fontWeight: '800', textAlign: 'center', color: "blue" }}>Items Deatils Page</h1>
                <div className="Newitem d-flex justify-content-center mt-5">

                    <div class="card " style={{ width: "740px", height: 'auto' }}>

                        {getdata?.map((ele) => {
                            return (
                                <div class="row g-0">
                                    <div class="col-md-4 forimg">
                                        < img src={ele?.imgdata
                                        } class="img-fluid rounded-start mt-3 mx-2" alt="..." style={{ height: '85%' }} />
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card-body mx-2 mt-3">
                                            <p class="card-title " style={{ fontSize: '18px', fontWeight: "700", color: 'teal', }}><b>Restaurant</b> : {ele?.rname}</p>
                                            <p class="card-text" style={{ fontSize: '18px', fontWeight: "700", color: 'teal', }}><b>Dishes</b> : {ele?.address}</p>
                                            <p class="card-text" style={{ fontSize: '18px', fontWeight: "700", color: 'green', }}><b>Price</b> : ₹{ele?.price * ele.qnty}</p>

                                            <div className="mt-2 mx-1 d-flex justify-content-between align-items-center" style={{ width: "100px", cursor: 'pointer', backgroundColor: '#e3e3e3', borderRadius: '5px' }}>
                                                <span style={{ fontSize: '28px', padding: '5px' }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                                                <span style={{ fontSize: '20px' }}>{ele.qnty}</span>
                                                <span style={{ fontSize: '28px', padding: '5px' }} onClick={() => send(ele)}>+</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4  mt-4">
                                        <p className="card-title" style={{ fontSize: '18px', fontWeight: "700", color: 'green', }}><b>Rating</b> : {ele.rating}</p>
                                        <p class="card-text"><b style={{ fontSize: '18px', fontWeight: "700", color: 'teal', }}>Order-Review</b> : {ele.somedata}</p>
                                        <p class="card-text"><b style={{ fontSize: '18px', fontWeight: "700", color: 'green', }}>Remove</b> :<img src={Delete} alt="..." onClick={() => dlt(ele.id)} /></p>
                                    </div>


                                    {/* <p style={{ fontSize: '18px', fontWeight: "700", color: 'teal' }}>Price : ₹{ele?.price}</p> */}

                                </div>


                            )

                        })}


                    </div>

                </div>


                <button className="btn_order" onClick={() => onOreder()}>Buy Now</button>

            </div >



            {/* <div style={{ marginTop: '165px' }}>
                <Footer />
            </div> */}


        </>
    )
}

export default NewItem