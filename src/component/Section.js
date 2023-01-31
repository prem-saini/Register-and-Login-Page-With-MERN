import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Data from "../Data"
import "./Section.css"
import { ADD } from "../actions/action"
import Silder from "./Silder"
import Footer from "./Footer"
import Dayof from "./Dayof"
import Watchformen from "./Watchformen"
import Shoesformen from "./Shoesformen"
import Clothsformen from "./Clothsformen"
import { toast, ToastContainer } from "react-toastify"

function Section() {
    const [card, setCard] = useState(Data)
    // console.log(card)
    // setCard(card)

    const dispatch = useDispatch();

    const send = (e) => {

        toast.success("Your Item Add Successfully done 😃!", {
            position: "top-center"
        });

        dispatch(ADD(e));

    }


    return (
        <>

            <Silder />
            <div className="mt-3">
                <Dayof /></div>

            <div className="mt-4">
                <Watchformen />
            </div>
            <div className="mt-4">
                <Shoesformen />
            </div>
            <div className="mt-4">
                <Clothsformen />
            </div>

            <div className="section mt-4">
                <h2 style={{ fontWeight: '800', textAlign: 'center', color: 'blue' }}>Add to Cart Projects</h2>
            </div>
            <div className="container ">
                {
                    card.map((element) => {
                        return (
                            <>

                                <div class="card mx-2 mt-5" style={{ width: "22rem" }}>
                                    <img src={element.imgdata} class="card-img-top" alt="..." style={{ height: '40vh' }} />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textAlign: 'center', color: 'black', fontWeight: "700" }}>{element.rname}</h5>
                                        <p class="card-text" style={{ textAlign: 'center', color: 'teal', fontWeight: "700" }}>Price- ₹{element.price}</p>
                                        <button className="col-lg-12  btn btn-primary" onClick={() => send(element)}>ADD To Cart</button>
                                        <ToastContainer />
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>
            <div className="mt-3">
                <Footer />
            </div>

        </>
    )
}

export default Section 