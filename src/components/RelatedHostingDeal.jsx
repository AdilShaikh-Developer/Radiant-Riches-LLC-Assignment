import dealThumbnail from "../assets/deals-thumbnail.jpg";

const RelatedHostingDeal = ({ data }) => {
  return (
    <div className="related-deal">
      <img src={dealThumbnail} alt="" />

      <div className="tags">
        <span>{data.price.discount.discount}</span>
        <span>{data.price.discount.detail}</span>
      </div>

      <h4>{data.name}</h4>
      <p>{data.detail}</p>

      <div className="price-container">
        <span className="price">{data.price.currentPrice}</span>
        <div>
          <span className="offer">{data.price.actualPrice}</span>
          <span className="discount">({data.price.discount.discount})</span>
        </div>
      </div>
      <button>View Deal</button>
    </div>
  );
};

export default RelatedHostingDeal;
