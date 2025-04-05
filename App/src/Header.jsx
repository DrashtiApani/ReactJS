import React from 'react'
import { FcCloseUpMode } from "react-icons/fc";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-white" style={{ position: "sticky", top: "0" , backgroundColor:"rgba(0, 0, 0, 0.65)"}}>
                <div className="container-fluid">
                    <img src="https://htmldemo.net/mirora/p2/img/mirora/logo.png" style={{padding : "10px"}} alt="" />
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                                <a className="nav-link disabled text-white" style={{ cursor: "pointer" , fontSize:"20px",paddingLeft:"50px",fontWeight:"500"}} aria-disabled="true">Home</a>
                            </li>
                            
                          
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{ cursor: "pointer" , fontSize:"20px",  padding: "10px 0px 0px 20px"}}>
                                  About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">< FcCloseUpMode style={{ fontSize: "30px" }} /></a>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </nav>

        </>

        
    )
}



export default Header;