import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Data from "../Data"
import "./Section.css"
import { ADD } from "../actions/action"
import Silder from "./Silder"
import Footer from "./Footer"
import Dayof from "./Dayof"

function Section() {
    const [card, setCard] = useState(Data)
    // console.log(card)
    // setCard(card)

    const dispatch = useDispatch();

    const send = (e) => {

        dispatch(ADD(e));

    }


    return (
        <>
            <Silder />
            <div className="mt-3">
                <Dayof /></div>

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
                                        <h5 class="card-title">{element.rname}</h5>
                                        <p class="card-text">price- ₹{element.price}</p>
                                        <button className="col-lg-12  btn btn-primary" onClick={() => send(element)}>ADD To Cart</button>
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