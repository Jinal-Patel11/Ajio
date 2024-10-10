import React from "react";
import Slider from "react-slick";

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04062024-AJIOEXCLUSIVES-z8-dnmx-min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04062024-AJIOEXCLUSIVES-z8-gap-min40.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04062024-AJIOEXCLUSIVES-z8-Superdry-min40.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-AJIOEXCLUSIVES-z8-Sam-3050.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-AJIOEXCLUSIVES-z8-Netplay-3060.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04062024-AJIOEXCLUSIVES-z8-Avaasa-min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07062024-AJIOEXCLUSIVES-z8-Stevemadden-min50.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04062024-AJIOEXCLUSIVES-z8-TS-min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-AJIOEXCLUSIVES-z8-Outryt-Min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-AJIOEXCLUSIVES-z8-fig-min60.jpg" alt="" width={"100%"} />
                </div>
            </Slider>

        </div>
    );
}

export default MultipleItems;

