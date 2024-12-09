import logo from "./mainLogo.svg"

const Navbar = () => {
    return (
        <>
            <nav className='text-2xl font-bold text-orange-600 bg-zinc-700 relative'>
                <ul className='flex justify-end'>
                    <li><img className="w-10 py-2" src={logo} /></li>
                    <li><h1 className='py-2 pr-10 pl-5 select-none'>Admin Panel</h1></li>
                </ul>
            </nav>
        </> 
    )
}

export default Navbar
