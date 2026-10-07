import { Outlet, NavLink } from 'react-router'

export default function Display () {
return (
    <div>
        <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}