


import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import CategoryProduct from "../../../common/categoryProduct";



function CardsSection({ kind, showHundel }) {

    const navigate = useNavigate();


    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const { loading, listItems } = useSelector((state) => state.products);
    const products = listItems.filter((x) => {
        return x.category === kind;
    })

    const hundelNavigate = (kind) => {
        navigate('/daitles', {
            state: {
                "category": kind
            }
        })
    }

    return (
        <div className=''>
            {loading ? null : <div className={`flex justify-between items-center p-3 border-b-[2px] ${darkMode ? 'border-borderDark text-textDark' : 'border-borderLight text-textLight'} border-dashed  font-body mb-3`}>
                <div className="font-[500]">{kind}</div>
                <div className={`${darkMode ? 'text-subTextDark' : 'text-subTextLight'} capitalize flex items-center `}>
                    <button onClick={() => hundelNavigate(kind)} to='/daitles' className="flex justify-center items-center  ml-1 pb-[3px]">عرض المزيد</button>
                    <div><svg viewBox="64 64 896 896" focusable="false" data-icon="left" width=".75em" height=".75em" fill="currentColor" aria-hidden="true" className="flex items-center"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></div>
                </div>
            </div>}

            <CategoryProduct products={products} darkMode={darkMode} showHundel={showHundel} />

        </div >
    );
}

export default CardsSection;