import './App.css';
import { useState, useEffect } from 'react';
import { withDraw, deposite } from "./redux_toolkit/slices/bank_slice";
import { addProduct } from "./redux_toolkit/slices/product_slice";
import { useSelector, useDispatch } from 'react-redux';
import {fetchProduct} from "./redux_toolkit/slices/product_slice";


function App() {
  const [value, setValue] = useState(0);

  const state = useSelector((state) => state.bank);
  const products = useSelector((state) => state.product);
  // console.log(products);
  const dispatch = useDispatch();

  // console.log(dispatch(fetchProduct()));

  useEffect(() => {
     dispatch(fetchProduct());
  },  []);
  

  return (
    <>
      <div className="App">Hello React Redux</div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          placeholder="amout"
          onChange={(e) => setValue(e.target.value)}
          // value={value}
        />
        <br />
        <div className="amount">Solde :{state}$</div>
        <div className="btns">
          <button
            style={{ margin: "0 3px 0" }}
            onClick={() => dispatch(withDraw(+value))}
          >
            With Drow Money
          </button>
          <button onClick={() => dispatch(deposite(+value))}>
            Deposite Money
          </button>
        </div>
      </form>
      <button
        onClick={() =>
          dispatch(addProduct({ id: Date.now(), title: "product" }))
        }
      >
        Add Product
      </button>
      <h3>Products :</h3>
      <ul className="items">
        {
          products.map((product, index) => {
             return (
              <li key={product.id}>{product.title}-{index+1}</li>
             )
          })
        }
      </ul>
    </>
  );
}

export default App;
