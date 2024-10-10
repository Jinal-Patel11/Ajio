import React from 'react'

export default function Card() {
  return (
    <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-E-GIFTCARD-header.gif" alt="" style={{ width: "100%" }} />

      <div id="carouselExampleDarks" className="carousel carousel-dark slide" >
                <div className="carousel-indicators " style={{ marginBottom: "-40px" }}>
                    <button type="button" data-bs-target="#carouselExampleDarks" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDarks" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDarks" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20(1)111.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

            </div>
    </div>
  )
}
