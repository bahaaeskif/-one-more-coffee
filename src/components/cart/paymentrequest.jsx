


function PaymentRequest({ darkMode, onSubmit, total, clearCartGlobe }) {



    return (
        <>
            <div className={`${darkMode ? ' bg-tertiaryDark' : ' bg-tertiaryLight'} font-body p-8 mt-6 shadow-xl rounded-lg`}>
                <div className="mb-3 flex items-center gap-2">
                    <span className={`${darkMode ? 'text-textDark' : 'text-textLight'} font-bold`}>السعر الاجمالي</span>
                    <span className={`flex items-center gap-1 uppercase font-bold
                        ${darkMode ? 'text-textDark' : 'text-textLight'}
                    `}>
                        <span>
                            sp
                        </span>
                        <span>
                            {total}
                        </span>
                    </span>
                </div>
                <div className={`flex flex-col md:flex-row lg:flex-row gap-2`}>
                    <div className=" basis-[55%]">
                        <button type="submit" onClick={onSubmit} className={`py-2 px-7 ${darkMode ? 'bg-green-600' : 'bg-green-500'} rounded-lg text-white flex items-center justify-center gap-2 basis-1/6 w-full  `}>
                            <span className="text-center leading-5 tracking-wide text-sm">ارسال الطلب</span> <span ><i className='bx bxl-whatsapp text-3xl'></i></span>
                        </button>
                    </div>
                    <button onClick={clearCartGlobe} className={`${darkMode ? 'border-[#ff0000] text-[#ff0000]' : 'border-[#ff0000] text-[#ff0000]'} flex-1 border-solid p-2 border-[1px] rounded-lg flex items-center justify-center gap-2 corsur-pointer`} >
                        احذف السلة
                        <svg className={``} xmlns="http://www.w3.org/2000/svg" width="16.751" height="21.537" viewBox="0 0 16.751 21.537"><path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M23.055,23.644a2.4,2.4,0,0,1-2.393,2.393H11.09A2.4,2.4,0,0,1,8.7,23.644V9.286H23.055Zm-2.943-8.519-1.687-1.687-2.549,2.537-2.537-2.537-1.687,1.687,2.537,2.537L11.652,20.2l1.687,1.687,2.537-2.537,2.537,2.537L20.1,20.2l-2.537-2.537ZM11.688,5.7l1.2-1.2h5.983l1.2,1.2h4.188V8.09H7.5V5.7Z" transform="translate(-7.5 -4.5)" fill="red"></path></svg>
                    </button>


                </div>
            </div >
        </>
    );
}

export default PaymentRequest;