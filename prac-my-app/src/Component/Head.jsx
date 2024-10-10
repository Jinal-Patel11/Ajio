import React from 'react'

export default function Head() {
    return (
        <div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-DAILYBANNERBU-header1.jpg" alt="" width={"100%"} style={{marginTop:"20px"}}/>
            </div>

            <div id="carouselExampleInterval" className="carousel  carouselExampleDark carousel-dark slide" data-bs-ride="carousel" >
                <div className="carousel-indicators" style={{ marginBottom: "-29px" }}>
                    <button type="button" data-bs-target=".carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target=".carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target=".carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target=".carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target=".carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="500">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-290624-DailyBanners-Z6-P1-Jack&Jones-BeingHuman-Min60%20(1).jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active" data-bs-interval="500">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280624-DailyBanners-Z6-P1-Kibo-Kotty-min60.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280624-DailyBanners-Z6-P2-uspa-pepejeans-min40.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280624-DailyBanners-Z6-P3-dnmx-netplay-min60.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280624-DailyBanners-Z6-P5-puma-performax-min40.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
