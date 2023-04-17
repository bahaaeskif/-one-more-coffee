import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SkeletonCategory from "../skeleton/skeletonCategory";

function Category() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;

    const navigate = useNavigate();

    const hundelNavigate = (kind) => {
        navigate('/daitles', {
            state: {
                "category": kind
            }
        })
    }


    const { category, loading } = useSelector((state) => state.products);
    const loadingArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className={`${darkMode ? ' bg-secondaryDark dark' : 'bg-white'} py-3 border-b-[1px] ${darkMode ? 'border-borderDark' : 'border-borderLight'} border-solid fixed left-1/2 top-[52px] translate-x-[-50%] w-full sm:w-[560px] md:w-[768px] lg:w-[1140px] z-10 `}>
            <div className="w-full dark   flex items-center justify-between  gap-2  pt-3 pb-1 overflow-x-scroll lg:overflow-x-hidden font-body ">
                {category.map((x, index) => {
                    return <button onClick={() => hundelNavigate(x)} key={index} className={`rounded-md overflow-hidden basis-[116px] uppercase text-xs sm:text-sm md:text-base lg:text-base ${darkMode ? ' bg-tertiaryDark text-textDark' : 'bg-tertiaryLight text-textLight'} shrink-0 `}>
                        <div className={`${darkMode ? 'bg-tertiaryDark' : 'bg-tertiaryLight'} text-center py-2`}>{x}</div>
                    </button>
                })}
            </div>
        </div>
    );
}

export default Category;