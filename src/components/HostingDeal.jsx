import dealThumbnail from "../assets/deals-thumbnail.jpg";

const HostingDeal = ({ data, index }) => {
  return (
    <>
      {data.tag ? (
        <span className="tag">
          {data.tag.svg}
          {data.tag.tag}
        </span>
      ) : (
        <span></span>
      )}
      <span className="index">{index}</span>
      <div className="hosting-deal">
        <div className="thumbnail-container">
          {/* It's not possible to put dynamic image because in react we can't give file path outside public folder (I might have put image in public but it is not a good practice) but in real world senario images will hosted on backend so we can directly give the URL of image */}
          <img src={dealThumbnail} alt="" />
          <span>{data.thumbnail.name}</span>
        </div>
        <div className="deal-details-container">
          <div className="deal-heading-container">
            <p>
              <span>{data.details.name}</span>
              {data.details.detail}
            </p>
          </div>
          <span>Main Highlights</span>
          {data.details.highlights}
          <button>
            Show more
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z"
                fill="#1B88F4"
              />
            </svg>
          </button>
        </div>
        <div className="deal-extra-info-container">
          <div className="deal-rating-container">
            <span className="rating">{data.review.rating}</span>
            <span className="review">{data.review.review}</span>
            <span className="stars-container">{data.review.stars}</span>
          </div>
          <button>View</button>
        </div>
      </div>
    </>
  );
};

export default HostingDeal;
