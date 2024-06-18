import { Link } from "react-router-dom"
import { routeSide } from "../../types/routesSideBar"
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
interface sideProps{
    handleclick: ()=>void
}
const SideBarNav = ({handleclick}:sideProps) => {
    return (
        <nav className='nav h-full w-full'>
            <div className="sideHeader w-full h-20 flex justify-center 
            items-center text-white text-xl font-semibold shadow-lg mb-3">
                <div className="logo mr-2 text-2xl"><BsGraphUpArrow/></div>
                <h1 className="text-2xl">
                    Finnace
                </h1>
            </div>
            <ul className='flex h-96 w-full flex-col justify-start p-5'>
                {routeSide.map((item, index)=>(
                    <Link to={item.link} key={index} className="rounded-3xl h-12 p-3 shadow-xl text-white mb-10 flex items-center gap-2 text-2xl hover:bg-white hover:text-orange-500">{item.icon}{item.name}</Link>
                ))}
                <li className="rounded-3xl h-12 p-3 shadow-xl text-white mb-10 flex items-center gap-2 text-2xl hover:bg-white hover:text-orange-500 hover:cursor-pointer" onClick={handleclick}><IoMdCloseCircleOutline/> Fechar</li>
            </ul>
        </nav>
    )
}

export default SideBarNav