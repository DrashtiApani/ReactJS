import React from 'react'

const Banner = ({ bannerData }) => {
    // console.log(bannerData)
    return (
        <div className="conatiner">
        <div style={{ backgroundColor: "#FF5200", alignItems: "center", padding: "64px,0px,32px" }}>
           
                <div className="row">

                    <div>
                        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "48px", padding: "0px,0px,0px,12px" }}>Order food & groceries. Discover <br /> best restaurants. Swiggy it!</h1>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <form action="">
                                <input type="text" style={{ padding: "10px", borderRadius: "15px", border: "none", marginRight: "10px", width: "190px", marginBottom: "10px", height: "35px" }} placeholder="Enter your delivery location" />
                                <input type="text" style={{ padding: "10px", borderRadius: "15px", border: "none", marginRight: "10px", width: "290px", marginBottom: "10px", height: "35px" }} placeholder="Search for restaurant, item or more" />
                            </form>
                        </div>
                    </div>

                    <div>
                        {
                            bannerData.map((banner) => {
                                const { img1, img2, img3, img4 } = banner
                                return (
                                    <div   style={{  display: "flex", justifyContent: "center", alignItems: "center",cursor:"pointer" }}>
                                        <div className="col-3"  > <img style={{width:"300px"}} src={img1} alt="" /> </div>
                                        <div className="col-3" > <img style={{width:"300px"}} src={img2} alt="" /> </div>
                                        <div className="col-3" > <img style={{width:"300px"}} src={img3} alt="" /> </div>
                                        <div className="col-3" > <img style={{width:"300px"}} src={img4} alt="" /> </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Banner