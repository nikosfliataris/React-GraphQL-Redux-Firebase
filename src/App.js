import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Component/Header/Header";
import {
  auth,
  createUserProfileDocument,
  AddCollectionAndDocuments,
  convertCollection,
  firestore,
} from "./firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./Redux/User/userAction";
import { default as CollectionOverView } from "./Component/PrevireCollection/GraphQLOverview";
import { updateCollection } from "./Redux/Shop/shopAction";
import Spinner from "./Component/PrevireCollection/spinner/spinner.component";

/// Suspense Components//
const HomePage = lazy(() => import("./Page/HomePage/HomePage"));
const ShopPage = lazy(() => import("./Page/ShopPage/ShopPage"));
const CheckOut = lazy(() => import("./Page/CheckOut.js/CheckOut"));
const SignIn = lazy(() => import("./Page/SignIn/SignIn"));
const Registration = lazy(() => import("./Page/Registration/Registration"));
const Payment = lazy(() => import("./Page/Payment/Payment"));
////////////
function App() {
  const [currentuser, setCurrentUser] = useState(null);
  console.log(currentuser);
  const CurrentUser = useSelector((state) => ({ user: state.user.User }));
  console.log(CurrentUser);
  const ItemsCollections = useSelector((state) => state.shop.collections);
  console.log(ItemsCollections);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (UserAuth) => {
      if (UserAuth) {
        const userRef = await createUserProfileDocument(UserAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }
      // setCurrentUser(UserAuth);
      // AddCollectionAndDocuments("collections", ItemsCollections);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      const Collection = convertCollection(snapshot);
      dispatch(updateCollection(Collection));
      console.log(Collection);
    });
    //Native fetching with firebase
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/eshop-8bfe9/databases/(default)/documents/collections"
    // )
    //   .then((res) => res.json())
    //   .then((collections) => console.log(collections));
    //promise fetch with firebase
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const Collection = await convertCollection(snapshot);
    //   dispatch(updateCollection(Collection));
    //   console.log(Collection);
    // });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="components">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            exact
            path="/shop"
            element={
              <Suspense fallback={<Spinner />}>
                <ShopPage />
              </Suspense>
            }
          />
          <Route
            exact
            path="/shop/:collectionId"
            element={<CollectionOverView />}
          />
          <Route
            exact
            path="/signin"
            element={
              <Suspense fallback={<Spinner />}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            exact
            path="/registration"
            element={
              <Suspense fallback={<Spinner />}>
                <Registration />
              </Suspense>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <Suspense fallback={<Spinner />}>
                <CheckOut />
              </Suspense>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <Suspense fallback={<Spinner />}>
                <Payment />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
