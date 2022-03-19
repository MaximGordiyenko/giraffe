import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewUsers } from "./redux/actions/users.action";
import { Users } from "./Users";
import { Products } from "./Products";
import { getNewProducts } from "./redux/actions/products.action";

const App = () => {
  const dispatch = useDispatch();
  
  const isLoadedUser = useSelector(state => state.getUsers.loading);
  const isLoadedProduct = useSelector(state => state.getProducts.loading);
  const users = useSelector(state => state.getUsers.users);
  const products = useSelector(state => state.getProducts.products);
  const error = useSelector(state => state.getUsers.error);

  useEffect(() => {
    dispatch(getNewUsers());
    dispatch(getNewProducts());
  }, [dispatch]);
  
  if (error) {
    return (<div>{error}</div>);
  } else if ( isLoadedUser && isLoadedProduct) {
    return (<div>Loading...</div>);
  } else {
    return (
      <>
        <Users users={users}/>
        <Products products={products}/>
      </>
    );
  }
};

export default App;