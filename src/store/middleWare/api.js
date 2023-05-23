import { apiCallBegan, apiCallSuccess, apiCallFail } from "../actionsApi";
import { productsRequst } from "../products";
import { URL } from "../../variables";
import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== apiCallBegan.type) { return next(action); }

    next(action);

    dispatch(productsRequst());

    const { onSuccess } = action.payload;

    try {
        const response = await axios.request({
            baseURL: URL,
        })
        dispatch({
            type: onSuccess,
            payload: response.data
        });
        dispatch(apiCallSuccess());

    } catch (err) {
        dispatch(apiCallFail());
    }

}



export default api;