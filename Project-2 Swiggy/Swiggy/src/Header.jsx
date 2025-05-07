import React from 'react'

const Header = () => {
    return (
        <div style={{ backgroundColor: "#FF5200" }}>
            <div className="container" style={{ backgroundColor: "#FF5200" }}>
                <div className="row">

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="col-6" >

                            <img style={{ width: "160px", height: "50px", borderRadius: "5px", padding: "10px", padding: "10px", margin: "10px" }} src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />

                        </div>

                        <div className="col-6 " style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "10px" }}>

                            <a href="" style={{ color: "white", fontSize: "20px", marginLeft: "20px", textDecoration: "none" }}>Swiggy Corporate</a>
                            <a href="" style={{ color: "white", fontSize: "20px", marginLeft: "20px", textDecoration: "none" }}>Partner with us</a>
                            <button style={{ marginLeft: "20px", border: "white 1px solid", borderRadius: "5px", padding: "10px", color: "white", backgroundColor: "#FF5200" }}>Get the App </button>
                            <button style={{ marginLeft: "20px", backgroundColor: "white", border: "none", borderRadius: "5px", padding: "15px", backgroundColor: "black", color: "white", margin: "30px" }}>Sign in</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header