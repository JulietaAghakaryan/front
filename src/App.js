import "./App.css";
import Sidebar from "./Components/Sidebar";
import Suppliers from "./Components/Suppliers";
import Products from "./Components/Products";
import Employees from "./Components/Employees";
import { makeStyles } from '@mui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import productData from "./Data.json";
import AddUser from "./Components/AddUser/AddUser";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  
  return (
    <Router>
      <div className="container">
        <header></header>
        <div>
          <Sidebar />
          <div className="main-content">
            <div className="lists-search-container">
              <SearchBar placeholder="Search..." data={productData} />
              <div className="lists-container">
                <Switch>
                  <Route path="/suppliers" component={Suppliers} />
                  <Route path="/products" component={Products} />
                  <Route path="/employees">
                    <Employees data={data} setData={setData} />
                  </Route>
                  <Route  path="/">
                    <Redirect to="/dashboard" />
                  </Route>
                </Switch>
              </div>
            </div>
            <div className="add-stuff-container">
              <button className="add-stuff">Add</button>
              <Switch>
                <Route path="/suppliers" />
                <Route path="/employees">
                  <AddUser setData={setData} />
                </Route>
                <Route path="/products" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
