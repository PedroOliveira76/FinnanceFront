import { useState } from "react"
import SideBar from "../components/Hero/SideBar"
import CadFatura from "../components/CadastroFatura/CadFatura"


const CadastroFatura = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="heroWrapper w-full h-full">
            {isOpen && (
                <SideBar handleclick={handleClick}/>
            )}

            <CadFatura handler={handleClick} />
        </div>
    )
}

export default CadastroFatura