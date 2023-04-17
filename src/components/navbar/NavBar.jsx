//import files
import logo from '../../assets/Logo.png'
import logoDark from '../../assets/LogoDark.png'

//import library
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/ui';

//import components
import Nav from '../../skeleton/nav';


function Navbar() {
    const { ui } = useSelector((state) => state.ui)
    const darkMode = ui.darkMode;
    const { category, loading } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const { amount } = useSelector((state) => state.cart)



    const hundelSwitch = () => {
        dispatch(actions.switch());
    }
    return (<>
        {loading ? <Nav /> :
            <nav className={`${darkMode ? `bg-navDark` : `bg-navLight`} fixed top-0 left-0 w-full z-20`
            }>
                < div className=" sm: max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto p-3" >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">

                            <button className={`${darkMode ? ' bg-tertiaryDark' : ' bg-tertiaryLight'} px-2 py-1 rounded`}>
                                <i className={`bx bx-menu-alt-right text-md ${darkMode ? 'text-textDark' : ' text-textLight'}`} ></i>
                            </button>
                            <button className={`${darkMode ? ' bg-tertiaryDark' : ' bg-tertiaryLight'} px-2 py-1 rounded`} onClick={hundelSwitch}>
                                <i className={`bx ${darkMode ? `bx-moon` : `bx-sun`} text-md ${darkMode ? 'text-textDark' : ' text-textLight'}`}></i>
                            </button>
                        </div>
                        <div className="logo w-[60px]">
                            <Link to='/'><img src={darkMode ? logoDark : logo} alt="logo" className={`p-1 bg-cover ${darkMode ? 'w-[60px]' : ''} `} /></Link>
                        </div>

                        <div className="flex items-center gap-2">
                            <Link to="/search" className={`${darkMode ? ' bg-tertiaryDark' : ' bg-tertiaryLight'} px-2 py-1 rounded`}>
                                <i className={`bx bx-search-alt-2 text-md ${darkMode ? 'text-textDark' : ' text-textLight'} `}></i>
                            </Link>
                            <Link to="/cart" className={`${darkMode ? ' bg-tertiaryDark' : ' bg-tertiaryLight'} px-2 py-1 rounded relative`}>
                                <i className={`bx bx-shopping-bag text-md ${darkMode ? 'text-textDark' : ' text-textLight'}`}></i>
                                {amount > 0 ? <div className={`absolute left-[-8px] top-[-5px] w-4 rounded-full h-4 text-textDark flex items-center justify-center text-xs font-mono ${darkMode ? 'bg-tertiaryLight text-textLight' : ' bg-tertiaryDark'}`}>{amount}</div> : null}
                            </Link>
                        </div>
                    </div>
                </div >
            </nav >}
    </>
    );
}

export default Navbar
