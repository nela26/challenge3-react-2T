import { NavLink } from 'react-router-dom'



export default function Navbar () {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : "no-active")

  return (
    <nav>
    <div>
      <NavLink className={setActiveClass} end to='/'>
        Home
      </NavLink>
      {' - '}
      <NavLink className={setActiveClass} to='/pokemon'>
        Pokemón
      </NavLink>
    </div>
    </nav>
  )
}
