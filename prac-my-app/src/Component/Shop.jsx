import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
        <div className="slider-container" style={{ marginTop: "5px" }}>

            <img src="https://assets.ajio.com/cms/AJIO/WEB/NC%20Static.jpg" alt="" width={"100%"} />
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-miraggio-baggit-min30.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-casio-titan-min30.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-idee-carltonlondon-min40.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-hidesign-tommyhilfiger-min40.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-priyaasi-pari-min85.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-aristocrat-delseyparis-starting999.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-baot-mivi-starting249.jpg" alt="" width={"95%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-NCSTATIC-zavya-vanabelle-min60.jpg" alt="" width={"95%"} />
                </div>

            </Slider>
        </div>
    );
}

export default Responsive;
