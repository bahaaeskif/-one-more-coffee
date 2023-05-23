import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteGlobal } from "../../../variables";
function OrderFixed() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;
    const { amount, total } = useSelector((state) => state.cart)
    const { category, loading } = useSelector((state) => state.products);


    return (
        <>
            {loading ? null : <div className={`hidden w-full sm:w-[560px] md:w-[768px] lg:w-[1140px]
        fixed left-1/2 bottom-[25px] translate-x-[-50%] rounded-full lg:flex
        justify-between z-30
         ${darkMode ? ' bg-tertiaryDark' : 'bg-tertiaryLight'} font-body`}
            >

                <Link to={RouteGlobal.cart} className={`py-2 px-7 ${darkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full text-white flex items-center gap-2 basis-1/6 `}>
                    <span ><i className='bx bxl-whatsapp text-3xl'></i></span><span className="text-center leading-5 tracking-wide text-sm">اطلب عن طريق <br /> الواتس</span>
                </Link>

                <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} flex gap-4 rounded-full justify-center items-center  `}>
                    <div className="flex flex-col items-center">
                        <span>الكمية</span>
                        <span>{amount}</span>
                    </div>
                    <div className="flex flex-col items-center ml-5">
                        <span>السعر الاجمالي</span>
                        <span>{total}</span>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default OrderFixed;