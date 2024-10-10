import React from 'react'

export default function Fashion() {
    return (
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-FORHER-header1.jpg" alt="" width={"100%"} style={{marginTop:"25px"}}/>
            <div id="carousels" className="carousel carousel-dark slide">
                <div className="carousel-indicators" style={{ marginBottom: "-40px" }}>
                    <button type="button" data-bs-target="#carousels" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousels" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousels" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carousels" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-020724-UHPHER-Z11-P1-DanielKlein-TommyHilfiger-UPTO50.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-020724-UHPHER-Z11-P3-RituKumar-SatyaPaul-UPTO50.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-020724-UHPHER-Z11-P4-Sam-Encrustd-MIN70.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-020724-UHPHER-Z11-P5-Veromoda-AND-MIN40.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

            </div>
        </div>
    )
}
