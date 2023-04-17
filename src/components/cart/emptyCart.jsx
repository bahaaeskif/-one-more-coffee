import noProducts from '../../assets/emptyCart (2).png'
import sendedpic from '../../assets/sended.svg'

import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/ui';

function EmptyCart() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;
    const sended = ui.deleveryIsSent
    const dispatch = useDispatch();

    return (

        <div className={`w-full flex items-center justify-center flex-col width-full`}>
            {sended && <>
                <div>
                    <img src={sendedpic} alt="emptyCart pic" className='w-[450px] mb-10' />
                </div>
                <div className={`font-body text-2xl ${darkMode ? 'text-textDark' : 'text-textLight'} `}>
                    شكرا لك تم ارسال طلبك بنجاح
                </div>
            </>}
            {!sended && <>
                <div>
                    <img src={noProducts} alt="emptyCart pic" className='w-[450px] mb-10' />
                </div>
                <div className={`font-body md:text-2xl lg:text-2xl text-xl ${darkMode ? 'text-textDark' : 'text-textLight'} `}>
                    لم تتم اضافة منتجات الى السلة حتى الان
                </div>
            </>}
        </div>
    );
}

export default EmptyCart;