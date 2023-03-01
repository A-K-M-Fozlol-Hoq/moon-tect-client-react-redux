import { removeProduct } from '../../actions/productAction';

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.acknowledged) {
        dispatch(removeProduct(id));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
export default deleteProduct;
