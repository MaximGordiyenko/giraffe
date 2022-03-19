import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewUsers } from "./redux/actions/users.action";
import { Users } from "./Users";

const App = () => {
  const dispatch = useDispatch();
  
  const isLoaded = useSelector(state => state.getUsers.loading);
  const users = useSelector(state => state.getUsers.users);
  const error = useSelector(state => state.getUsers.error);
  
  useEffect(() => {
    dispatch(getNewUsers());
  }, [dispatch]);
  
  if (error) {
    return (<div>{error}</div>);
  } else if (isLoaded) {
    return (<div>Loading...</div>);
  } else {
    return <Users users={users}/>;
  }
};

export default App;