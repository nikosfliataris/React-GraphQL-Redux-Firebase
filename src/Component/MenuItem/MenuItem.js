import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuItem.scss";
function MenuItem({ title, imageUrl, id, size, linkUrl }) {
  const history = useNavigate();
  return (
    <>
      <div
        className={`${size} menu-item`}
        key={id}
        onClick={() => history(`${linkUrl}`)}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content">
          <h2 className="title">{title.toUpperCase()}</h2>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
