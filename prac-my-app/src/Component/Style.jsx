import React from 'react'

export default function Press() {
    return (
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-JIT-header1.jpg" alt="" width={"100%"} style={{ marginTop: "50px" }} />
            <div id="carouselslider" className="carousel carousel-dark slide">
                <div className="carousel-indicators" style={{ marginBottom: "-30px" }}>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P1-Hubberholme-birtishClub-FLAT55.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P2-ORCHIDBLUES-SELVIA-MIN50.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P3-BATA-METRO-MIN40.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P4-Gulmoharjaipur-Janasya-Min60.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P5-MADAME-KRAUS-MIN50.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P6-AllenCooper-Liberty-under999.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-010724-EMB-Z11-P7-max-under799.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

            </div>

        </div>
    )
}
