import { apiCallBegan, apiCallSuccess, apiCallFail } from "../actionsApi";
import { productsRequst } from "../products";
import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== apiCallBegan.type) { return next(action); }

    next(action);

    dispatch(productsRequst());

    const { onSuccess } = action.payload;

    try {
        let DATASET = "production";

        let PROJECT_ID = "b9ol14x2";
        let QUERY = encodeURIComponent('*[_type == "product"]{title, "thumbnail" : thumbnail.asset->url, price, category,descreption, brand, quantity, "id": _id}');
        // Compose the URL for your project's endpoint and add the query
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

        const response = await axios.request({
            baseURL: URL,
        })

        console.log(response.data.result)

        dispatch({
            type: onSuccess,
            payload: response.data.result
        });
        dispatch(apiCallSuccess());

    } catch (err) {
        dispatch(apiCallFail());
    }

}



export default api;