import NavBar from "./navBar"
import Logo from "./logo"

function Header () {
    return(
        <header className="dark:bg-white p-4 justify-between shadow-md md:flex" >
        <Logo/>
        <NavBar/>
        </header>
    )
}

export default Header