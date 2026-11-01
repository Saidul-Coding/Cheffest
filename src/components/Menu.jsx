
const Menu = () => {
  return (
   <section>
    <div id="DeliciousMenu">
        <div className="container">
            <div className="delicious max-w-292.5 mx-auto">
                <div className=" pt-37.5">
                    <h2 className="flex font-semibold text-text font-inter text-5xl iteams-center justify-center pb-12">Our Best & Delicious Menu</h2>
                    <ul className="flex font-normal text-[18px] font-inter justify-between items-center pb-22 ">
                        <li className="rounded-[0_0_4px_4px] border-b-3"><a href="#">All</a></li>
                        <li className="hover:rounded-[0_0_4px_4px] hover:border-b-3"><a href="#">Bread</a></li>
                        <li className="hover:rounded-[0_0_4px_4px] hover:border-b-3"><a href="#">Chiffon & Rolls</a></li>
                        <li className="hover:rounded-[0_0_4px_4px] hover:border-b-3"><a href="#">Donut</a></li>
                        <li className="hover:rounded-[0_0_4px_4px] hover:border-b-3"><a href="#">Pastry & Danish</a></li>
                        <li className="hover:rounded-[0_0_4px_4px] hover:border-b-3"><a href="#">Cakesh</a></li>
                        <li className="hover:rounded-[0_0_4px_4px] hover:border-b-3"><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Menu
