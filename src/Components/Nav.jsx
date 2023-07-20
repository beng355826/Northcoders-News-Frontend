import {Routes, Route, Link} from 'react-router-dom'

const Nav = () => {
    return ( 

        <nav>
        <Link to='/' className="navItems">View All Articles</Link>
        <Link to='/view-articles-by-topics' className="navItems">View Articles by topic</Link>
        </nav>

     );
}
 
export default Nav;