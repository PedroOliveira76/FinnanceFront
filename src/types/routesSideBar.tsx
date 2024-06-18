import { ReactElement } from "react";
import { VscGraph } from "react-icons/vsc";
import { FaWpforms } from "react-icons/fa6";

interface routeSideBarProps{
    icon:ReactElement;
    name:string;
    link:string
}

export const routeSide:routeSideBarProps[] = [
    {icon:<VscGraph />, name:'DashBoard', link:'/'},
    {icon:<FaWpforms />, name:'Cadastrar', link:'/fatura'},
]