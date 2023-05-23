

import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../store/ui";
import { addToProductDatile } from "../../store/productDatiles";

import ProductDatile from "../home/productDatile/ProductDatile";
import Category from "../../common/category";
import CategoryProduct from "../../common/categoryProduct";

function ShowMore() {
    const dispatch = useDispatch();
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const { listItems } = useSelector((state) => state.products);

    const { id } = useParams();

    const products = listItems.filter((x) => {
        return x.category === id
    })

    const showHundel = (product = {}) => {

        dispatch(actions.showHundel());

        dispatch(addToProductDatile(product));

    }

    const { datileShow } = useSelector((state) => state.ui.ui)
    const { productDatile } = useSelector((state) => state.productDatile);

    return (
        <div className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto pt-40 lg:pt-36">
            <Category />
            <CategoryProduct products={products} darkMode={darkMode} showHundel={showHundel} />
            {<ProductDatile darkMode={darkMode} datileShow={datileShow} showHundel={showHundel} productDatiles={productDatile} />}
        </div>

    );
}

export default ShowMore;