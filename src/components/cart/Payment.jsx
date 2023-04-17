import { useFormik } from "formik";
import PaymentRequest from "./paymentrequest";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/ui";
import { clearItems } from "../../store/cart";
import { clearProduct } from "../../store/products";
import * as Yup from 'yup'
function Payment({ darkMode, cartItems }) {

    const dispatch = useDispatch();
    const { total } = useSelector((state) => state.cart)

    const productDelevery = cartItems.reduce((acc, curr, index) => {
        return acc = acc + `${index > 0 ? ',' : ''}` + `*${curr.title}*` + " => " + 'الكمية:' + curr.quantity;
    }, []);

    const clearCartGlobe = () => {
        dispatch(clearItems());
        dispatch(clearProduct());
    }

    const formik = useFormik({
        initialValues: {
            phoneNmuber: '',
            address: '',
            notes: ''
        }, validationSchema: Yup.object({
            phoneNmuber: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('الحقل المطلوب*'),
        }), onSubmit: values => {
            const dev = JSON.stringify(
                {
                    "رقم الهاتف": values.phoneNmuber,
                    "المجموع": total,
                    'التوصيل': 3000,
                    'السعر الاجمالي': 3000 + total,
                    "المنتجات": productDelevery
                }
                , null, 2).replace(/[{}]/g, "").replace(/["]/g, "")
            window.open(`https://api.whatsapp.com/send?text=${dev}&phone=+963936468767`);

            dispatch(actions.sentHundel(true));

            setTimeout(() => {
                dispatch(actions.sentHundel(false));
            }, 20000)
            clearCartGlobe();
        },
    })



    return (
        <>
            <div className={`${darkMode ? 'bg-tertiaryDark' : 'bg-[#f5f5f9]'}
        p-8 shadow-xl rounded-xl flex-1
        `}>
                <div className={`${darkMode ? 'border-borderDark' : 'border-borderLight'} pb-6 border-b-2 border-solid`}>
                    <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-body text-xl mb-3`}>
                        الدفع
                    </div>
                    <div className={`${darkMode ? ' bg-secondaryDark text-subTextDark' : 'bg-white text-subTextLight'} py-3 px-4 rounded-xl flex items-center`}>
                        <div>
                            <i className={`bx bx-money text-4xl`}></i>
                        </div>
                        <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-body mr-8 text-sm`}>
                            كاش
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-body text-xl mb-3 mt-3`}>
                        التوصيل
                    </div>
                    <form onSubmit={formik.handleSubmit} className={`${darkMode ? ' bg-secondaryDark' : 'bg-white'} rounded-lg`}>
                        <div className="py-6 px-3 flex flex-col gap-3 outline-none focus-visible:outline-none font-body
                    ">
                            <input onChange={formik.handleChange}
                                value={formik.values.phoneNmuber}
                                type="text" name="phoneNmuber" className={`p-2 outline-none focus-visible:outline-none rounded-md border-[1px] border-solid  text-sm
                        ${darkMode ? 'border-borderDark text-textDark bg-tertiaryDark dark' : 'border-borderLight'}
                        `} placeholder="رقم الهاتف" />
                            {formik.touched.phoneNmuber && formik.errors.phoneNmuber ? (
                                <div className="text-sm text-red-600">{formik.errors.phoneNmuber}</div>
                            ) : null}

                            <input onChange={formik.handleChange}
                                value={formik.values.address} type="text" name="address" className={`p-2 outline-none focus-visible:outline-none rounded-md border-[1px] border-solid  text-sm
                        ${darkMode ? 'border-borderDark bg-tertiaryDark text-textDark dark' : 'border-borderLight'}
                        `} placeholder="العنوان" />

                            <input onChange={formik.handleChange}
                                value={formik.values.notes} type="text" name="notes" className={`p-2 outline-none focus-visible:outline-none rounded-md border-[1px] border-solid  text-sm
                        ${darkMode ? 'border-borderDark text-textDark bg-tertiaryDark dark' : 'border-borderLight'}
                        `} placeholder="الملاحظة عامة" />

                        </div>
                    </form>
                </div>
            </div >
            <PaymentRequest clearCartGlobe={clearCartGlobe} darkMode={darkMode} onSubmit={formik.handleSubmit} total={total} />
        </>
    );
}

export default Payment;