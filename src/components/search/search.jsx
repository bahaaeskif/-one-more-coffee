import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from 'react-select';


import arrowDown from '../../assets/arrowDown.svg'
import downArrowDark from '../../assets/downArrowDark.png'
import FilterItem from "./filterItem";
import SearchInput from "./SearchInput";


import './tailwind.css'
import { filterArray } from "../../utilities";
import { minusQuantity, addQuantity } from '../../store/products';
import { addToCart, removeItem } from '../../store/cart';




function Search() {

    const dispatch = useDispatch();

    const { darkMode } = useSelector((state) => state.ui.ui)

    const { category, listItems } = useSelector((state) => state.products);



    const options = ["", ...category].map((item) => {
        return { value: item.id, label: item.name ? item.name : 'الكل' };
    })
    console.log(options)



    const [toggle, setToggle] = useState(true)

    const [filter, setFilter] = useState(
        {
            filterByName: '',
            filterByDesc: '',
            filterByCategory: { value: "", label: '' },
            filterByPriceHigh: '',
            filterByPriceLow: '',
        }
    );



    const hundelChange = (event) => {
        const inputValue = event.target.value;
        setFilter({
            ...filter,
            [event.target.name]: inputValue
        })

    }
    const hundelSelectClick = (select) => {
        setFilter({
            ...filter,
            filterByCategory: select
        })
    }
    const hundelToggle = () => {
        setToggle((prev) => !prev);
    }

    const hundelIncrement = (product) => {

        dispatch(addQuantity(product));

        dispatch(addToCart(product))
    }

    const hundelDecrement = (product) => {

        dispatch(minusQuantity(product))

        dispatch(removeItem(product))
    }


    const filterListItems = filterArray(listItems, filter);

    const inputStyle = `mt-2 border-2 border-solid border-border rounded-lg px-1 py-1 outline-none focus:outline-none w-full ${darkMode ? 'bg-tertiaryDark' : ''}`;

    return (<>
        <div className="sm: max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto p-3 font-body  w-full ">

            <div className={`mt-16 border-b-[1px] border-border border-solid ${darkMode ? 'text-tertiaryLight' : ''}`} >

                <form action="" className="lg:flex md:flex  items-center justify-center flex-wrap  gap-3 relative pb-5">
                    <div className="w-full lg:flex md:flex justify-center">
                        <div className=" basis-1/2 ">

                            <SearchInput htmlFor={"filterByName"} type={'text'} name={'filterByName'} hundelChange={hundelChange} value={filter.filterByName} inputStyle={inputStyle} label={"الأسم"} placeholder={"الأسم"} />

                        </div>
                    </div>

                    <div className={` ${toggle ? 'hidden' : 'lg:flex md:flex'} items-center justify-center flex-wrap gap-3 `}>

                        <div className={'basis-[48%]'}>

                            <SearchInput htmlFor={"filterByDesc"} type={'text'} name={'filterByDesc'} hundelChange={hundelChange} value={filter.filterByDesc} inputStyle={inputStyle} label={"الوصف"} placeholder={"الوصف"} />

                        </div>

                        <div className="basis-[50%] ">

                            <label htmlFor="">التصنيف</label>
                            <Select
                                value={filter.filterByCategory}
                                onChange={hundelSelectClick}
                                options={options}
                                className={`mt-2 my-react-select-container ${darkMode ? 'dark' : ''}`}
                                classNamePrefix="my-react-select"
                                isSearchable={false}
                            />

                        </div>

                        <div className="basis-[25%] ">

                            <SearchInput htmlFor={'filterByPriceLow'} type={'text'} name={'filterByPriceLow'} hundelChange={hundelChange} value={filter.filterByPriceLow} inputStyle={inputStyle} label={'من السعر'} placeholder={" من السعر"} />

                        </div>

                        <div className="basis-[25%]">

                            <SearchInput htmlFor={'filterByPriceHigh'} type={'text'} name={'filterByPriceHigh'} hundelChange={hundelChange} value={filter.filterByPriceHigh} inputStyle={inputStyle} label={'الى السعر'} placeholder={"الى السعر"} />

                        </div>

                    </div>
                    <div className={` rounded-lg absolute bottom-0 translate-y-[+50%] left-[50%] translate-x-[-50%]  ${darkMode ? ' bg-tertiaryDark' : 'bg-tertiaryLight'}  p-3 `} onClick={hundelToggle}>
                        <img src={darkMode ? downArrowDark : arrowDown} alt="" className={`${toggle ? '' : 'rotate-180'} ${darkMode ? 'w-[11px]' : ''}`} />
                    </div>

                </form>
            </div>

            <FilterItem filterListItems={filterListItems} darkMode={darkMode} hundelIncrement={hundelIncrement} hundelDecrement={hundelDecrement} />

        </div>
    </>);
}

export default Search;