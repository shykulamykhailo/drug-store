import { NavLink } from 'react-router-dom';

function MainNav() {
    return (
        <nav>
            <NavLink to="store">Store</NavLink>
            <NavLink to="shoppingCart">Shopping cart</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
            <NavLink to="user">User</NavLink>
        </nav>
    );
}

export default MainNav;
