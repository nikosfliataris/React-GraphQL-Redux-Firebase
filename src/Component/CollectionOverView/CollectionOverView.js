import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionOverView.scss";
function CollectionOverView({ collections }) {
  console.log(collections);
  const { collectionId } = useParams();
  console.log(collectionId);
  const filter = collections.filter(
    (collection) => collection.title === collectionId
  );
  console.log(filter);

  return (
    <div className="collection-overview">
      <div className="title">{filter[0]?.title.toUpperCase()}</div>
      <div className="collection">
        {filter[0]?.items.map((item) => (
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

export default CollectionOverView;
