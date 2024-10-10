import React from 'react'

export default function Head() {
    return (
        <div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-FORHIM-header1.jpg" alt="" width={"100%"} />
            </div>

            <div id="carouselExampleInterval" className="carousel  carouselExampleDarks carousel-dark slide" data-bs-ride="carousel" >
                <div className="carousel-indicators" style={{ marginBottom: "-29px" }}>
                    <button type="button" data-bs-target=".carouselExampleDarks" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target=".carouselExampleDarks" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target=".carouselExampleDarks" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target=".carouselExampleDarks" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target=".carouselExampleDarks" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="500">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02072024-uhphim-z10-p1-Fila-Performax-Min60.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active" data-bs-interval="500">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-02072024-uhphim-z10-p2-mokobara-itlugguage-upto70.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02072024-uhphim-z10-p3-Nike-adidas-min35.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02072024-uhphim-z10-p4-gas-gant-UPTO50.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02072024-uhphim-z10-p5-REEBOK-Adidas-MIN35.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
