import React from 'react'

export default function Press() {
    return (
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/nc.png" alt="" width={"100%"} style={{marginTop:"50px"}}/>
            <div id="carouselsli" className="carousel carousel-dark slide">
                <div className="carousel-indicators" style={{ marginBottom: "-40px" }}>
                    <button type="button" data-bs-target="#carouselsli" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselsli" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselsli" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselsli" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselsli" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01072024-LA-Z20-P4-fossil-rayban-upto80.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01072024-LA-fgear-furjaden-upto60.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01072024-LA-Z20-tommyhilfiger-puma-4080.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01072024-LA-Z20-titan-fossil-upto40.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01072024-LA-Z20-P5-bevogue-trink-under799.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

            </div>

        </div>
    )
}
