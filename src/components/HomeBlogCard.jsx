import React from "react";

const HomeBlogCard = ({ title, content, imageSrc }) => {
  return (
    <div className="home-page-blog-card">
      <div className="blog-data-button">
        <div className="blog-title-description">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <button className="read-more">Read more</button>
      </div>

      <img src={imageSrc} alt="" />
    </div>
  );
};

export default HomeBlogCard;
