import QuantityController from "../../common/QuantityController";

function FilterItem({ filterListItems, darkMode, hundelIncrement, hundelDecrement }) {
    return (
        <div className="mt-6  flex flex-wrap">
            {filterListItems.map((product) => {
                return <div className="cols px-2 basis-1/2 md:basis-1/3 lg:basis-1/6 cursor-pointer" key={product.id}>
                    <div className="card w-full relative">
                        <div className="rounded-lg overflow-hidden mb-7 ">
                            <div className={`${darkMode ? ' bg-tertiaryDark' : 'bg-tertiaryLight'}  h-[140px] w-full`}>
                                <img src={product.thumbnail} alt="" className="object-cover object-center h-[140px] w-full" />
                            </div>
                            <div className={`absolute left-[50%] 
                         rounded-lg 
                         translate-x-[-50%] translate-y-[-50%] shadow-xl
                         ${darkMode ? 'text-subTextDark bg-tertiaryDark' : 'text-subTextLight bg-white'}
                         `}>
                                <QuantityController darkMode={darkMode} quantity={product.quantity} hundelIncrement={() => { hundelIncrement(product) }} hundelDecrement={() => { hundelDecrement(product) }} />
                            </div>
                        </div>

                        <div className={`${darkMode ? 'text-textDark' : 'text-textLight'} mb-8 px-4 `}>
                            <div className="capitalize font-bold mb-1">{product.title}</div>
                            <div className="flex">
                                <span className=" uppercase text-sm flex flex-row-reverse">
                                    <span className='mr-1'>{product.price}</span><span>sp</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            })}
        </div>
    );
}

export default FilterItem;