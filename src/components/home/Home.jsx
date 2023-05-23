


import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/ui";
import { addToProductDatile } from "../../store/productDatiles";

//import components
import SkeletonCategory from "../../skeleton/skeletonCategory";
import CardsSkeleton from "../../skeleton/CardsSkeleton";
import OrderFixed from "./orderfixed/OrderFixed";
import ProductDatile from "./productDatile/ProductDatile";
import CardsSection from "./cardssection/CardSection";
import Category from "../../common/category";

function Home() {
    const dispatch = useDispatch();

    const { category, loading } = useSelector((state) => state.products);

    const { datileShow, darkMode } = useSelector((state) => state.ui.ui)

    const { productDatile } = useSelector((state) => state.productDatile);


    const showHundel = (product = {}) => {

        dispatch(actions.showHundel());

        dispatch(addToProductDatile(product));

    }
    const loadingArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


    return (
        <div className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto pt-14 pb-[70px] px-3">
            <Category />

            {loading && <SkeletonCategory />}

            <div className="pt-[80px] md:pt-[90px] "> {category?.map((kind, index) => {
                return <CardsSection kind={kind} key={index} showHundel={showHundel} />
            })}</div>

            {loading && loadingArr.map((x, index) => <CardsSkeleton key={index} />)}

            <OrderFixed />

            {<ProductDatile darkMode={darkMode} datileShow={datileShow} showHundel={showHundel} productDatiles={productDatile} />}
        </div>
    );
}

export default Home;