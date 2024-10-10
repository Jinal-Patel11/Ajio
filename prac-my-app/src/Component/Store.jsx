import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        slidesToShow: 4,
    };
    return (
        <div className="slider-container" >
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-heade.jpg" alt="" width={"100%"} style={{ marginTop: "30px" }} />

                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-ajiogold.jpg" alt="" width={"100%"} />
            </div>
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-trends.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-indiepicks.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-home.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-snh.jpg" alt="" width={"100%"} />
                </div>

            </Slider>
            <Slider  {...settings} >
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-wedding.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-saree.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-watches.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-westernwear.jpg" alt="" width={"100%"} />
                </div>

            </Slider>
            <Slider {...settings}>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-accessories.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-beauty.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-intbrands.jpg" alt="" width={"100%"} />
                </div>
                <div>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-discoveronlinestores-homegrwonbrands.jpg" alt="" width={"100%"} />
                </div>

            </Slider>

            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/25062024-D-DiscoverOnlineStores.jpg" alt="" width={"100%"} />

                <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip11.jpg" alt="" width={"100%"} />
            </div>


        </div>
    );
}

export default Responsive;
