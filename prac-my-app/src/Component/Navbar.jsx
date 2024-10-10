import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/">
                        <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="Bootstrap" width="50%" height="75vh" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
                            <li className="nav-item p-2">
                                <a className="nav-link" aria-current="page" href="/">MEN</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">WOMEN</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">KIDS</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">BEAUTY</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">HOME AND KITCHEN</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                     <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <i class="fab fa-gratipay" style={{ margin: "10px", fontSize: "30px" }}></i>
                        <i class="fas fa-shopping-bag" style={{ margin: "10px", fontSize: "30px" }}></i>
                    </div>
                </div>
            </nav>

        </div>
    )
}
