import React from "react";

const Banner = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "640px",
                overflow: "hidden",
                zIndex: "-1",
            }}
        >
            <img
                src="https://htmldemo.net/mirora/p2/img/mirora/hero-bg.jpg"
                alt="Banner"
                style={{
                    width: "100%",
                    right: "0",
                    objectFit: "cover",
                    position: "fixed",
                    zIndex: "-1!important",
                }}
            />

            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.65)",
                    pointerEvents: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "20px"
                }}
            >
                <h2 style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}>Mirora</h2>
                <p style={{ color: "white", fontSize: "36px", fontWeight: "500", marginTop: "10px" }}>
                    Watch & Luxury Store Bootstrap 5 Template
                </p>
                <p style={{ color: "white", fontSize: "16px", maxWidth: "600px", marginTop: "10px" }}>
                    Mirora is a grand looking fully responsive Bootstrap 5 Template perfect for fashion, jewelry, watches & luxury store.
                </p>
                
                {/* View Button */}
                <button
                    style={{
                        marginTop: "20px",
                        padding: "12px 24px",
                        fontSize: "18px",
                        color: "white",
                        backgroundColor: "#ff6600",
                        border: "none",
                        borderRadius: "25px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                       
                    }}
                    
                >
                    View 
                </button>
            </div>
        </div>
    );
};

export default Banner;
