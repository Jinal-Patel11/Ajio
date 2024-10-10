import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container" style={{ marginTop: "15px" }}>

            <img src="https://assets.ajio.com/cms/AJIO/WEB/Footwear.jpg" alt="" width={"100%"} />
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-nike-asics-3050.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-uspa-puma-min40.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-skechers-addias-min30.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-leecooper-woodland-min40.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-catwalk-stevemadden-min50.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-crocs-addias-min30.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-SPORTSWEAR-lp-clarks-min40.jpg" alt="" width={"100%"} />
                </div>

            </Slider>
        </div>
    );
}

export default Responsive;
