
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { Autoplay } from "swiper";


import Cloths from "../Cloths";

function Clothsformen() {
    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'blue', fontWeight: '800' }}>Top Brand Cloths For Men</h2>
            <Swiper
                slidesPerView={5}
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
                        Cloths.map((value) => {
                            return (
                                <>
                                    <div className="Day " style={{ height: "40vh", marginTop: '10px' }}>
                                        <SwiperSlide ><div className="Day">
                                            <img src={value.imgdata} alt="..." style={{ height: 'auto', width: '150px' }} />
                                            <p style={{ fontSize: "18px", fontWeight: "800" }}>{value.name}</p>
                                            <p style={{ fontSize: "18px", fontWeight: "800" }}>{value.price}</p>
                                        </div>
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


export default Clothsformen


