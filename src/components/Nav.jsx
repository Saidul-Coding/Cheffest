

const Nav = () => {
  return (
    <div>
   
  <header className="z-40 bg-black/95 backdrop-blur-md border-b border-zinc-800">
    <div className="max-w-350 mx-auto px-4">
      <div className="flex items-center  justify-between gap-4">
        
       
        <a href="#welcome" className="flex items-center py-3 pl-20.25 gap-3 ">
          <div className="w-25 h-25  flex items-center justify-center text-text  hover:bg-amber-600 transition-transform">
           <img src="/Logo.svg" alt="logo" />
          </div>
        </a>

        <nav className="hidden md:flex items-center  gap-1 lg:gap-2" aria-label="Main Navigation">
          <a href="#welcome" className=" px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-900 transition-colors hover:text-amber-400">
            Welcome
          </a>
          <a href="#our-menu"className="nav-link px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-zinc-900 hover:text-amber-400 transition-colors">
            Our Menu
          </a>
          <a href="#franchise" className="nav-link px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-zinc-900 hover:text-amber-400 transition-colors">
            Franchise
          </a>
          <a href="#contact"  className="nav-link px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-zinc-900 hover:text-amber-400 transition-colors">
            Contact
          </a>
        </nav>

       
        <div className="flex items-center pr-12.5 gap-2">
            <button
              className="bg-amber-500 rounded-sm hover:bg-amber-400 text-text font-semibold text-sm px-4 py-2 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="text-tex">Search</span>  <img className="flex items-center justify-center w-3 h-3 " src="/Search_Icon.svg" alt="Search_Icon" />
            </button>
          

        
          <button
            id="openCartBtn"
            type="button"
            className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-sm font-semibold transition-colors cursor-pointer"
            aria-label="View Order"
          >
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="hidden lg:inline">Order</span>
            <span id="cartCountBadge" className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500 text-black">
              0
            </span>
          </button>
          <button
            id="mobileMenuBtn"
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:text-amber-400 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg id="menuIconOpen" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

   
      <div id="mobileMenuPanel" className="hidden md:hidden pb-4 pt-2 border-t border-zinc-800 space-y-3">
        <div className="flex flex-col space-y-1">
          <a href="#welcome" data-nav="welcome" className="mobile-nav-link px-3 py-2.5 rounded-lg text-sm font-semibold text-amber-400 bg-zinc-900">Welcome</a>
          <a href="#our-menu" data-nav="our-menu" className="mobile-nav-link px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-zinc-900">Our Menu</a>
          <a href="#franchise" data-nav="franchise" className="mobile-nav-link px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-zinc-900">Franchise</a>
          <a href="#contact" data-nav="contact" className="mobile-nav-link px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-zinc-900">Contact</a>
        </div>
        <form id="mobileSearchForm" className="flex items-center bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
          <input
            id="mobileSearchInput"
            type="text"
            placeholder="Search menu items..."
            className="bg-transparent text-white placeholder-zinc-400 text-sm px-3.5 py-2.5 flex-1 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm px-4 py-2.5 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Nav
