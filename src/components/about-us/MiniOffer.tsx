const offerCatalog = [
  {
    id: 1,
    name: "Spicy",
    img: "../../../public/assets/img/Spicy-min.jpg",
  },
  {
    id: 2,
    name: "Nuts & Feesd",
    img: "../../../public/assets/img/Nuts & Feesd-min.jpg",
  },
  {
    id: 3,
    name: "Fruits",
    img: "../../../public/assets/img/Fruits-min.jpg",
  },
  {
    id: 4,
    name: "Vegatable",
    img: "../../../public/assets/img/Vegatable-min.jpg",
  },
];

const MiniOffer: React.FC = () => {
  return (
    <section className="mini-offer">
      <div className="container">
        <div className="mini-offer__content">
          <div className="mini-offer__content-title">
            <span className="mini-offer__content-title-subheading">
              The Products
            </span>

            <h2 className="mini-offer__content-title-heading">
              What We Offer Organic for You
            </h2>
          </div>

          <ul className="mini-offer__content-items">
            {offerCatalog.map((item) => (
              <li key={item.id} className="mini-offer__content-items-item">
                <img
                  className="mini-offer__content-items-item-img"
                  loading="lazy"
                  src={item.img}
                  alt={item.name}
                />

                <h3 className="mini-offer__content-items-item-text">
                  {item.name}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MiniOffer;