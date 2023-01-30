// import React from "react "

// function Dayof() {
//     return (
//         <>
//             <div className="day">
//                 <h2>Inspiration for your first order</h2>










//             </div>



//         </>
//     )
// }

// export default Dayof


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Autoplay } from "swiper";
import Day from "../Day";

function Dayof() {
    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'blue', fontWeight: '800' }}>Inspiration for your first order</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}

                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[
                    Autoplay
                ]} className="mySwiper mt-5"
            >
                <div className="day">

                    {
                        Day.map((value) => {
                            return (
                                <>
                                    <div className="Day" style={{ height: "40vh", marginTop: '10px' }}>
                                        <SwiperSlide><img src={value.imgData} alt="..." style={{ height: 'auto', width: '150px' }} />
                                            <p>{value.name}</p>
                                        </SwiperSlide>
                                    </div>


                                </>
                            )
                        })
                    }


                </div>
            </Swiper>
        </>
    );
}


export default Dayof


