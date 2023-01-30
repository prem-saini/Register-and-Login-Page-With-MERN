


import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Image/img1.jpg"
import img2 from "../Image/img2.jpg"
import img3 from "../Image/img3.jpg"
import img4 from "../Image/img4.jpg"
import img5 from "../Image/img5.jpg"

function Silder() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide" style={{ height: '80vh' }}
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide" style={{ height: '80vh' }}
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide" style={{ height: '80vh' }}
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide" style={{ height: '80vh' }}
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide" style={{ height: '80vh' }}
                />


            </Carousel.Item>
        </Carousel>
    );
}

export default Silder;
