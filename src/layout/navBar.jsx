import CartWidget from "./cartWidget"

function NavBar () {
    return (
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Nosotros</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Cultura</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-red-500 dark:border-red-500">Cursos</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contacto</a>
			</li>
			<CartWidget/>
		</ul>	
        
    )
}

export default NavBar