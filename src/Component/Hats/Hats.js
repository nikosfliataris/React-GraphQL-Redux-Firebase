import React from "react";
import { useParams } from "react-router-dom";

function Hats() {
  const { collectionId } = useParams();
  return <div>Hats</div>;
}

export default Hats;
