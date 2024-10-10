import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <div className="slider-container" style={{ marginTop: "30px" }}>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-header.jpg" alt="" width={"100%"} />
            </div>
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-CELEB-puma-min65.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-CELEBRITYSECTION-Z22-addias-min60.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-tigc-min60.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-superdry-min40.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-levis-flat50.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-jp-min50.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-01062024-CELEBRITYSECTION-Z22-arrow-MIN50.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-01062024-CELEBRITYSECTION-Z22-uspa-MIN65.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-janasya-min60.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-lavie-5070.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-sukkhi-min70.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-nadshermiles-5070.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-CELEB-klrahul-cariall-5070.jpg" alt="" />
                </div>
                
            </Slider>
        </div>
    );
}

export default Responsive;
