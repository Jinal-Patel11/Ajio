import React from 'react'

export default function Icons() {
    return (
        <div >
            <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", listStyle: "none", marginTop: "35px", background: "#F9F9F9" }}>
                <li ><i class="fas fa-shopping-bag fa-4x" ></i><h6 style={{ marginTop: "15px" }}>EASY EXCHANGE</h6></li>
                <li><i class="fas fa-hand-holding-heart fa-4x"></i><h6 style={{ marginTop: "15px" }}>100% HANDPICKED</h6></li>
                <li><i class="fas fa-certificate fa-4x"></i><h6 style={{ marginTop: "15px" }}>ASSURED QUALITY</h6></li>
            </ul>
        </div>
    )
}
