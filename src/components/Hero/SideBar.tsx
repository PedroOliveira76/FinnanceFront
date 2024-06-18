import SideBarNav from "../SideBar/SideBarNav"
interface sideProps{
  handleclick: ()=>void
}
const SideBar = ({handleclick}:sideProps) => {
  return (
    <div className='sidebar absolute bg-orange-500 h-full w-60 items-center justify-start'>
        <SideBarNav handleclick={handleclick} />
    </div>
  )
}

export default SideBar