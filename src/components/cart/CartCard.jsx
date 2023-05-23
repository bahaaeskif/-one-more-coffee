import QuantityController from '../../common/QuantityController';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, minusQuantity } from '../../store/products';
import { addToCart, removeItem } from '../../store/cart';
function
    CartCard({ darkMode, item, showHundel }) {

    const dispatch = useDispatch();

    const hundelIncrement = (product) => {
        dispatch(addQuantity(product));
        dispatch(addToCart(product))
    }

    const hundelDecrement = (product) => {
        dispatch(minusQuantity(product))
        dispatch(removeItem(product))
    }

    return (
        <div className={`p-3 shadow-xl w-full font-body  ${darkMode ? ' bg-tertiaryDark' : 'bg-white'} rounded-2xl mb-3`}>
            <div className={`flex`}>
                <div className={` overflow-hidden rounded-md bg-slate-100 basis-[30%]  ${darkMode ? ' bg-gray-900' : 'bg-slate-100 '}`}>
                    <img onClick={() => showHundel(item)} src={item.thumbnail} alt="one more" className='object-cover h-[140px] object-center ' />
                </div>
                <div className=' basis-[80%] px-4'>
                    <div className={`font-bold mb-2  ${darkMode ? ' text-textDark' : 'text-textLight'}`}>
                        {item.title}
                    </div>
                    <div className='flex gap-2 mb-8'>
                        <span className={`${darkMode ? ' text-subTextDark' : 'text-subTextLight'}`}>السعر</span>
                        <span className={`uppercase flex gap-2 flex-row-reverse
                        ${darkMode ? ' text-textDark' : 'text-textLight'}`}>
                            <span>{item.price}</span>
                            <span>sp</span>
                        </span>
                    </div>
                    <QuantityController quantity={item.quantity} darkMode={darkMode} hundelDecrement={() => { hundelDecrement(item) }}
                        hundelIncrement={() => {
                            hundelIncrement(item)
                        }}
                    />
                </div>

            </div>
        </div >
    );
}

export default CartCard;