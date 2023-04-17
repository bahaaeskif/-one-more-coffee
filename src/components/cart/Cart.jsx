import { useDispatch, useSelector } from 'react-redux'

import CartCard from './CartCard';
import Payment from './Payment';

import EmptyCart from './emptyCart';
import ProductDatile from '../home/productDatile/ProductDatile';
import { actions } from "../../store/ui";
import { addToProductDatile } from "../../store/productDatiles";


function Cart() {

    const dispatch = useDispatch();
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const { cartItems } = useSelector((state) => state.cart)

    const showHundel = (product = {}) => {

        dispatch(actions.showHundel());

        dispatch(addToProductDatile(product));
    }

    const { datileShow } = useSelector((state) => state.ui.ui)

    const { productDatile } = useSelector((state) => state.productDatile);

    return (
        <div className='mt-14 px-3 py-8 sm: max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto flex items-start flex-col md:flex-row lg:flex-row gap-6'>
            {cartItems.length > 0 ? <>
                <div className='basis-[55%] w-full'>
                    {cartItems.map((item) => {
                        return <CartCard showHundel={showHundel} darkMode={darkMode} item={item} key={item.id} />
                    })}
                </div>
                <div className='flex-1 w-full'>
                    <Payment darkMode={darkMode} cartItems={cartItems} />
                </div>
            </> : <EmptyCart />}
            {<ProductDatile datileShow={datileShow} showHundel={showHundel} darkMode={darkMode} productDatiles={productDatile} />}
        </div>

    );
}

export default Cart;