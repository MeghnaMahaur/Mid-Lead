import React, { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {
  // const [inputarr, setInputarr] = useState([])

  const [inputdata, SetInputdata] = useState({
    quantity : "",
  })

  function changehandle(e){
    SetInputdata({...inputdata, quantity : e.target.value});
  }
  // let {quantity} = inputdata;

  // function addToInputArr(){
  //   setInputarr([...inputarr, quantity]);
  //   SetInputdata({...inputdata, quantity : ""});
  //   console.log(inputarr);
  //   // console.log(inputdata);
  // }

  const [netTotal, setNetTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [subTotal, setSubToatl] = useState(0);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const [isCartVisible, setIsCartVisible] = useState(false);

  function handleCheckOrder(e){
    setIsCartVisible(!isCartVisible);
  }

  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <div className="div">
            <a className="logo" href="D:\Internshala\Mid Lead Interview\E-Commerce Assignment\Springboot\Mid Lead\ReactJS\midlead-ecommerce\src\Components\sbalogo.png">Logo</a>
            <div className="div-nav-list">
              <ul className="nav-list">
                <li className="nav-item">
                  <a className="item" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="item" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="item" href="#">Pricelist</a>
                </li>
                <li className="nav-item">
                  <a className="item" href="#">Safety Tips</a>
                </li>
                <li className="nav-item">
                  <a className="item" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <i className="bi bi-phone-fill">+91 98431  16916</i>
                </li>
                <li className="nav-button">
                  <button type="button" className="btn">Check Price</button>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </header>

      <img src="https://imgcdn.iar.net.in//d992d54ae97874fee83cbb29d41bcf80044a7a395512a9c73246fe9af44c990dfddf8fba12f8c072ddec1161af02121a138355a054b5cb9acce0f61ff442a697/fit/1600/550/sm/1/plain/https://asset.iamretailer.com/goodwillstage.iar.net.in/4_5_2022/8HEP3Ng/10.Goodwill_Cracker_Festival_Banner_1350x460px.jpg" className="img-fluid" alt="Banner" />

      <Cart cart={cart} netTotal={netTotal} discountTotal={discountTotal} subTotal={subTotal} />

      <table className="table table-striped">
        <thead className="table-head">
          <th>Image</th>
          <th>Product Name</th>
          <th>Content</th>
          <th>Actual Price</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </thead>
        <h2 className="heading">SINGLE SOUND CRACKERS (75% DISCOUNT)</h2>
        <h2 className="heading">SPARKLERS (75% DISCOUNT)</h2>
        <h2 className="heading">OTHER SHOT ITEMS (75% DISCOUNT)</h2>
        <h2 className="heading">GROUND CHAKKAR (75% DISCOUNT)</h2>
        <h2 className="heading">FANCY WHEEL (75% DISCOUNT)</h2>
        <h2 className="heading">FLOWER POTS (75% DISCOUNT)</h2>
        <h2 className="heading">MUD FLOWER POT (MUNSATTI) (75% DISCOUNT)</h2>
        <h2 className="heading">COLOUR CANDLES (75% DISCOUNT)</h2>
        <h2 className="heading">FANCY CANDLES (75% DISCOUNT)</h2>
        <h2 className="heading">TWINKLING STAR (75% DISCOUNT)</h2>
        <h2 className="heading">LOOSE CRACKERS (75% DISCOUNT)</h2>
        <h2 className="heading">BOMB (75% DISCOUNT)</h2>
        <h2 className="heading">ROCKETS (75% DISCOUNT)</h2>
        <h2 className="heading">VIJAY MOUNTAIN (75% DISCOUNT)</h2>
        <h2 className="heading">NEW FANCY NOVELTIES (75% DISCOUNT)</h2>
        <h2 className="heading">SUNSHINE MOUNTAIN (75% DISCOUNT)</h2>
        <h2 className="heading">CARTOONS / STONE ITEMS (75% DISCOUNT)</h2>
        <h2 className="heading">MINI AERIALS SHOTS AND FANCY THUNDER (75% DISCOUNT)</h2>
        <h2 className="heading">PANDIAN SINGLE SHOTS (75% DISCOUNT)</h2>
        <h2 className="heading">VIJAY SINGLE SHOT ITEMS (75% DISCOUNT)</h2>
        <h2 className="heading">SUNSHINE SINGLE SHOT (75% DISCOUNT)</h2>
        <h2 className="heading">12 SHOTS (75% DISCOUNT)</h2>
        <h2 className="heading">PANDIAN SHOTS (75% DISCOUNT)</h2>
        <h2 className="heading">VIJAY SHOT ITEMS (75% DISCOUNT)</h2>
        <h2 className="heading">SUNSHINE SHOTS (75% DISCOUNT)</h2>
        <h2 className="heading">PANDIYAN SETOUT SHOT (GIANT) (75% DISCOUNT)</h2>
        <h2 className="heading">WHISTLING FOUNTAINS (75% DISCOUNT)</h2>
        <h2 className="heading">GIFT BOXES (75% DISCOUNT)</h2>

        <tbody className="table-body">
          <tr>
          <ProductList addToCart={addToCart} />
          <td>
            <input type="text" autoComplete="off" name="quantity" value={inputdata.quantity} onChange={changehandle} />
            {/* <button onClick={addToInputArr}>Add</button> */}
          </td>
          <td></td>
          </tr>
        </tbody>
      </table>

      
      <button type="button" className="btn"  onClick={handleCheckOrder}>Please Check Your Order</button>

      {isCartVisible && <Cart cart={cart}/>}

      <footer>
        <div className="footer-div">
          <h2 className="footer-head">Sri Balaji Agencies</h2>
          <p>Sri Balaji Agencies is a leading direct fireworks outlet in Sivakasi, offering fire crackers with
            discount.</p>

          <h3>Our Showroom</h3>
          <p>3/571, Anuppankulam, Sivakasi Tamil Nadu 626189</p>
        </div>
        <div className="footer-div">
          <h2 className="footer-head">Contact Us</h2>
          <h3>Mobile</h3>
          <i className="bi bi-phone-fill">+91 98431  16916</i>
          <h3>Email</h3>
          <i className="bi bi-phone">sribalajiagencies9843116916@gmail.com</i>
        </div>
        <div className="footer-div">
        <h2 className="footer-head">Quick Links</h2>
        <a className="item" href="#">Home</a>
        <a className="item" href="#">About Sri Sri Balaji Agencies</a>
        <a className="item" href="#">Fire Crackers</a>
        <a className="item" href="#">Fireworks Gift Box</a>
        <a className="item" href="#">Price List</a>
        <a className="item" href="#">Quick Purchase</a>
        <a className="item" href="#">Contact us</a>
        </div>
        <div className="footer-div">
          <h2 className="footer-head">Reach Us</h2>
          <a href="https://www.google.com/maps/place/Sri+Softwarez/@9.4412815,77.7946231,1532m/data=!3m1!1e3!4m6!3m5!1s0x3b06cee6d797be0b:0xca4b550afa10ced6!8m2!3d9.4413452!4d77.7966831!16s%2Fg%2F11b6dfw_hd?hl=en&entry=ttu">
          <img src="D:\Internshala\Mid Lead Interview\E-Commerce Assignment\Springboot\Mid Lead\ReactJS\midlead-ecommerce\src\Components\location.png" className="img-fluid" alt="" />
          View larger map
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
