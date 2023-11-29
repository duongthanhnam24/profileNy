function Header() {
    return (
        <header className="flex justify-around items-center h-[50px] bg-white fixed top-0 right-0 left-0">
            <a href="#" className="text-[#734908] font-medium text-xl">
                Home
            </a>
            <a href="#Slider" className="text-xl">
                Slider
            </a>
            <a className="text-[#734908] font-medium text-xl" href="#collection">
                Collection
            </a>
            <a href="#Contact" className="text-xl">
                Contact
            </a>
        </header>
    );
}

export default Header;
