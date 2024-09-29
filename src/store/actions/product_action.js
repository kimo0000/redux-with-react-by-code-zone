export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCT = "GET_PRODUCT";

export const addProduct = (product) => {
   return {
    type: ADD_PRODUCT,
    payload: product
   }
}

export const getProducts = (products) => {
   return {
     type: GET_PRODUCT,
     payload: products,
   };
}

export const fetchProducts = () => {
    return async (dispatch) => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch(getProducts(data));
    }
}