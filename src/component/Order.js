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

    const navigate = useNavigate()
    const [val, setVal] = useState({
        fname: "",
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


    const addinpdata = async (e) => {
        e.preventDefault();

        const { fname, email, lastname, address, phone } = val;

        const res = await fetch("/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, lastname, address, phone
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 201 || !data) {
            navigate("/Thankyou")
            // setUdata(data)
            toast.success("Your order successfully done")
            console.log("data added");

        } else {

            console.log("error ");
            alert("error");
        }
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
                                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name="fname" onChange={setVale} value={val.fname} />
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
                            <button className='btn_confirm_order' onClick={addinpdata}>Order Confirm</button>
                            <ToastContainer />

                        </MDBCardBody>
                    </MDBCard>

                </MDBRow>
            </MDBContainer>
            <Footer />
        </>
    );
}

export default Order;