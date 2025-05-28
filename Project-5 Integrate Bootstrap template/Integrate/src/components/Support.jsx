import { RiRedPacketLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const Support = () => {
  const supportItems = [
    {
      icon: <RiRedPacketLine />,
      title: "Product Packing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "24X7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: <CiDeliveryTruck />,
      title: "Delivery in 5 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: <RiMoneyDollarCircleFill />,
      title: "Payment Secure",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {supportItems.map((item, index) => (
          <div className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center" key={index}>
            <div className="card text-center" style={{ width: "100%", backgroundColor: "#f7f7f8", border: "none" }}>
              <div className="card-body">
                <div style={{ fontSize: "42px", color: "#64B496", marginBottom: "16px" }}>
                  {item.icon}
                </div>
                <h5 style={{ fontSize: "18px", fontWeight: "600", color: "#2B2B2D", marginBottom: "10px" }}>
                  {item.title}
                </h5>
                <p className="card-text text-muted" style={{ fontSize: "14px", marginBottom: "0" }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
