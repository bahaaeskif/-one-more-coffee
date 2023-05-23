import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteGlobal } from "../variables";

function Category() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const { category, loading } = useSelector((state) => state.products);
    const loadingArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className={`${darkMode ? ' bg-secondaryDark dark' : 'bg-white'} py-3 border-b-[1px] ${darkMode ? 'border-borderDark' : 'border-borderLight'} border-solid fixed left-1/2 top-[52px] translate-x-[-50%] w-full sm:w-[560px] md:w-[768px] lg:w-[1140px] z-10 `}>
            <div className="w-full dark   flex items-center  gap-2  pt-3 pb-1 overflow-x-scroll lg:overflow-x-hidden font-body ">
                <NavLink to={RouteGlobal.home} className={`rounded-md overflow-hidden uppercase text-xs sm:text-sm md:text-base lg:text-base ${darkMode ? ' bg-tertiaryDark text-textDark' : 'bg-tertiaryLight text-textLight'} shrink-0 min-w-fit px-2 `}>
                    <div className={` text-center py-2`}>Main</div>
                </NavLink>
                {category.map((x) => {
                    return <NavLink to={`/${RouteGlobal.detailes}/${x.id}`} key={x.id} className={`rounded-md overflow-hidden  uppercase text-xs sm:text-sm md:text-base lg:text-base ${darkMode ? ' bg-tertiaryDark text-textDark' : 'bg-tertiaryLight text-textLight'} shrink-0  min-w-fit`}>
                        <div className={` text-center py-2 px-2`}>{x.name}</div>
                    </NavLink>
                })}
            </div>
        </div>
    );
}

export default Category;