import Header from "../Header/Header"
import FormFatura from "./FormFatura"

interface contentProps {
  handler: () => void
}

const CadFatura = ({ handler }: contentProps) => {

  return (
    <div className="w-full h-full flex flex-col">
      <Header handlerClick={handler} name="Cadastrar" />
      <div className="formulario w-full h-full p-10 bg-orange-400 flex justify-center items-center box-border">
          <FormFatura />
      </div>
    </div>
  )
}

export default CadFatura