import { NavLink } from 'react-router-dom';

function MainNav() {
    return (
        <nav>
            <NavLink to="store">Store</NavLink>
            <NavLink to="shoppingCart">Shopping cart</NavLink>
            <NavLink to="history">History</NavLink>
            <NavLink to="user">User</NavLink>
        </nav>
    );
}

export default MainNav;
