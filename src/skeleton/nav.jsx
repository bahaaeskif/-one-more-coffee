import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Nav() {
    return (

        <nav className='fixed top-[-4px] left-0 w-full z-20'>
            <Skeleton height={60} />
        </nav>

    );
}

export default Nav;