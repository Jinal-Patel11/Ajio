import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        slidesToShow: 4,
    };
    return (
        <div className="slider-container" >
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-header.jpg" alt="" width={"100%"} style={{ marginTop: "50px" }} />
            </div>
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-jj-min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-dennislingo-min70.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-brithsclub-flat50.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-Z17-Asics-Min50.jpg" alt="" width={"100%"} />
                </div>

            </Slider>
            <Slider  {...settings} >
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-fashor-min50.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-EXPLOREMOREBRANDS-lp-min40extra29.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-Z17-indiepicks-5070.jpeg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-stevemadden-min40.jpg" alt="" width={"100%"} />
                </div>
            </Slider>

            <Slider  {...settings} >
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-lee-min40.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01062024-EXPLOREMOREBRANDS-vanheusen-3050k.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-pointcover-min60.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-EXPLOREMOREBRANDS-spykar-min40.jpg" alt="" width={"100%"} />
                </div>
            </Slider>
        </div>
    );
}

export default Responsive;
