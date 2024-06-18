import { useState } from "react"
import SideBar from "../components/Hero/SideBar"
import MainContent from "../components/Hero/MainContent"


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="heroWrapper w-full h-full flex">
            {isOpen && (
                <SideBar handleclick={handleClick   }/>
            )}
            
            <MainContent handler={handleClick}/>
                
        </div>
    )
}

export default Hero