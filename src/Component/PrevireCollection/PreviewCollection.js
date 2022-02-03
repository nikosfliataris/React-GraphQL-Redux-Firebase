import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "./../CollectionItem/CollectionItem";
import { Link } from "react-router-dom";
function PreviewCollection({ id, title, routeName, items }) {
  return (
    <div className="collection-preview">
      <h2 className="title" key={id}>
        <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {items
          ?.filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
