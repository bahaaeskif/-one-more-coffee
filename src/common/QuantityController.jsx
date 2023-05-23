
function QuantityController({ quantity, darkMode, hundelIncrement, hundelDecrement }) {

    return (
        <div className={`rounded-lg flex items-center w-fit  ${darkMode ? ' bg-secondaryDark' : ' bg-tertiaryLight'}`}>

            <button onClick={hundelIncrement} className={`rounded-lg p-3 shadow-xl ${darkMode ? 'text-subTextDark bg-tertiaryDark' : 'text-subTextLight bg-white'}`}>
                <span role="img" aria-label="plus" className="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
            </button>

            {quantity > 0 &&
                <>

                    <div className={`${darkMode ? ' text-textDark' : 'text-textLight'} px-2`}>
                        {`${quantity}`}
                    </div>

                    <button onClick={hundelDecrement} className={`rounded-lg p-3 shadow-xl ${darkMode ? 'text-subTextDark bg-tertiaryDark' : 'text-subTextLight bg-white'}`}>


                        {quantity === 1 ? <span role="img" aria-label="delete" className={`anticon anticon-delete ${darkMode ? 'text-white' : ' text-black'}`}><svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg></span> : <span role="img" aria-label="minus" className="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                        </span>}
                    </button>
                </>
            }

        </div >
    );
}

export default QuantityController;