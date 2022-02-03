import React, { useState, useEffect } from "react";
import "./ShopPage.scss";

import { useDispatch, useSelector } from "react-redux";
import { firestore } from "./../../firebase/firebase";
import { updateCollection } from "./../../Redux/Shop/shopAction";
import PreviewCollection from "../../Component/PrevireCollection/PreviewCollection";
function ShopPage() {
  // const [ShopData, setShopData] = useState(Data);
  const CollectionItems = useSelector((state) => state.shop.collections);
  console.log(CollectionItems);
  const dispatch = useDispatch();

  return (
    <div>
      {CollectionItems?.map((collection) => (
        <PreviewCollection
          key={collection.id}
          items={collection.items}
          title={collection.title}
          routeName={collection.routeName}
        />
      ))}
    </div>
  );
}

export default ShopPage;
