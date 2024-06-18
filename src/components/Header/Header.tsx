import { FaRegCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

interface headeButtonProps{
    handlerClick:()=>void;
    name: string;
}


const Header = ({handlerClick, name}:headeButtonProps) => {
    

    return (
        <div className="header 
        w-full h-24 flex flex-row bg-orange-600 text-white font-semibold items-center justify-between p-4 shadow-2xl">
            <div className="wrapperLogo w-60 flex flex-row justify-center items-center ">

                <div className="iconSide mr-5 w-12" onClick={handlerClick}>
                    <GiHamburgerMenu className="text-4xl hover:cursor-pointer hover:text-gray-200"/>
                </div>

                <div className="nomeEmpresa text-2xl">
                    <h1>{name}</h1>
                </div>

            </div>

            <div className="wrapperUser w-64 flex flex-row justify-around items-center ">

                <div className="nomeUser mr-2 ">
                    <h2>SuperAdmin</h2>
                </div>

                <div className="perfilImg">
                    <FaRegCircleUser className="text-2xl"/>
                </div>

            </div>
        </div>
    )
}

export default Header