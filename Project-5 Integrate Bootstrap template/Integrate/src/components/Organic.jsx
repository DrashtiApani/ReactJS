
import img1 from './img/12.jpg';
import img2 from './img/14.jpg';
import img3 from './img/13.jpg';
import img4 from './img/32.jpg';

const Organic = () => {
  const offers = [
    {
      id: 1,
      title: 'Snacks & Sweets',
      subtitle: 'Fresh',
      discount: '20%',
      image: img1,
    },
    {
      id: 2,
      title: 'Organic Fruits',
      subtitle: 'Fresh & Healthy',
      discount: '35%',
      image: img2,
    },
    {
      id: 3,
      title: 'Bakery Products',
      subtitle: 'Healthy',
      discount: '30%',
      image: img3,
    },
  ];

  return (
    <section className="organic-section py-5">
      <div className="container">
        <div className="row g-4">
          {offers.map((offer) => (
            <div className="col-md-4" key={offer.id}>
              <div
                className="organic-card position-relative rounded overflow-hidden text-white"
                style={{
                  backgroundImage: `url(${offer.image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  height: '220px',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '15px',
                }}
              >
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="card-content position-absolute start-0 text-start p-4">
                  <h6 className="fw-semibold mb-1"  style={{color:"black"}}>{offer.subtitle}</h6>
                  <h5 className="fw-bold mb-2" style={{color:"black"}}>{offer.title}</h5>
                  <p className="mb-3">
                    <span className="fw-bold text-success" >{offer.discount}</span>{' '}
                    <span  style={{color:"#777777"}}>Off on first order</span>
                  </p>
                  <button className="btn btn-sm rounded-0 px-3" style={{backgroundColor:"#64B496", color:"white", border:"none" , fontWeight:"bold",borderRadius:"5px",padding:"5px"}}>Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organic;