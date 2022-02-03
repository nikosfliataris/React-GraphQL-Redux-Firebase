import React from "react";
import { useQuery, gql } from "@apollo/client";
import Spinner from "./spinner/spinner.component";
import CollectionOverView from "../CollectionOverView/CollectionOverView";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
function GraphQLOverview() {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);
  console.log(loading);
  console.log(error);
  console.log(data);
  return (
    <div query={GET_COLLECTIONS}>
      {loading ? (
        <Spinner />
      ) : (
        <CollectionOverView collections={data.collections} />
      )}
    </div>
  );
}

export default GraphQLOverview;
