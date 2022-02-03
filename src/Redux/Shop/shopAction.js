import ShopAction from "./shopTypes";

export const updateCollection = (Collection) => ({
  type: ShopAction.UPDDATE_COLLECTION,
  payload: Collection,
});
