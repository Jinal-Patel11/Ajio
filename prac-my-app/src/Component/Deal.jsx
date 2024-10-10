import React from "react";
import Slider from "react-slick";

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container w-100 mt-5">
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-avaasa-netplay-min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-fig-dnmx-starting299.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-Z14-azorte-altheory-outryt-flat50.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-avaasa-fusion-avaasa-min50.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-leecooper-rio-upto70.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-johnplayer-netplay-starting249.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-TRENDS-kgfrendz-under399.jpg" alt="" width={"100%"} />
                </div>
            </Slider>


        </div>
    );
}

export default MultipleItems;
