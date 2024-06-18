import Header from "../Header/Header"

interface contentProps{
    handler: ()=>void
}

const MainContent = ({handler}:contentProps) => {

  return (
    <div className="w-full h-full flex flex-col">
        <Header handlerClick={handler} name="DashBoard" />
        <div className="formulario w-full h-full  bg-orange-400 flex justify-center items-center box-border">
          
      </div>
    </div>
  )
}

export default MainContent