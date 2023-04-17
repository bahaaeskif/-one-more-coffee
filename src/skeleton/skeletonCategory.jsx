import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCategory({ darkMode }) {
    return (
        <div className={`${darkMode ? ' bg-secondaryDark dark' : 'bg-white'} py-3 border-b-[1px] ${darkMode ? 'border-borderDark' : 'border-borderLight'} border-solid fixed left-1/2 top-[52px] translate-x-[-50%] w-full sm:w-[560px] md:w-[768px] lg:w-[1140px] z-10 `}>
            <div className="w-full dark   flex items-center justify-between  gap-2  pt-3 pb-1 overflow-hidden lg:overflow-x-hidden font-body ">
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
                <Skeleton width={150} height={40} />
            </div>
        </div>
    );
}

export default SkeletonCategory;