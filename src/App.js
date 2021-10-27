import "./App.css";
import Sidebar from "./Components/Sidebar";
import Suppliers from "./Components/Suppliers";
import Products from "./Components/Products";
import Employees from "./Components/Employees";
import BarChart from "./Dashboard/BarChart";
import { useLocation } from "react-router";
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
import AddSupplier from "./Components/AddSupplier/AddSupplier"
import AddProduct from "./Components/AddProduct/AddProduct";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [sup, setSup] = useState([]);
  const [pro, setPro] = useState([]);
  const [pathname, setPathname] = useState('');
  console.log('pathname',pathname);

  
  return (
    <Router>
      <div className="container">
        <header></header>
        <div>
          <Sidebar setPathname={setPathname} />
          <div className="main-content">
            <div className="lists-search-container">
              <SearchBar placeholder="Search..." data={productData} />
              <div className="lists-container">
                <Switch>
                  <Route path="/suppliers" >
                  <Suppliers sup={sup} setSup={setSup} />
                    </Route>
                    <Route path="/products" >
                  <Products pro={pro} setPro={setPro} />
                    </Route>
                  <Route path="/employees">
                    <Employees data={data} setData={setData} />
                  </Route>
                  <Route path="/dashboard">
                    <BarChart />
                  </Route>
{/*                   
                  <Route  path="/">
                    <Redirect to="/dashboard" />
                    <BarChart />
                  </Route> */}
                </Switch>
              </div>
            </div>
            <div className={`add-stuff-container ${pathname=='/dashboard'? 'headen':''}`}>
              <button className="add-stuff">Add</button>
              <Switch>
                <Route path="/suppliers" >
                <AddSupplier setSup={setSup} />
                  </Route>
                <Route path="/employees">
                  <AddUser setData={setData} />
                </Route>
                <Route path="/products">
                  <AddProduct setPro={setPro} />
                </Route>
               
                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
