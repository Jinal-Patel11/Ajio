import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        slidesToShow: 4,
    };
    return (
        <div className="slider-container" >
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-header.jpg" alt="" width={"100%"} style={{ marginTop: "50px" }} />
            </div>
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-beauty-under3999.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-handbags-min40.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-fashionjewellery-min75.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-sunglasses-min60.jpg" alt="" width={"100%"} />
                </div>

            </Slider>
            <Slider  {...settings} >
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-watches-4070.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-caps-under599.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-walletsbelts-min85.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-LASTATIC-innerwear.jpg" alt="" width={"100%"} />
                </div>

            </Slider>
        </div>
    );
}

export default Responsive;
