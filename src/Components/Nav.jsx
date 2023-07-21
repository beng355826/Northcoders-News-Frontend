import {Routes, Route, Link} from 'react-router-dom'

const Nav = () => {
    return ( 

        <nav>
        <Link to='/topics' className="navItems">View Articles</Link>
        </nav>

     );
}
 
export default Nav;