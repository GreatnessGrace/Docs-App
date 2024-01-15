import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

function Card(params) {
    return (<>
            <div className="relative  rounded-[50px] w-60 h-72 bg-zinc-900/90 text-white px-5 py-101 overflow-hidden">
            <FaRegFileAlt/>
<p className="text-xs leading-tight mt-5 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eligendi, iusto eum et dolor libero culpa inventore sint natus quae aperiam vel, sit possimus at necessitatibus sequi provident ex odit.</p>
<div className="footer absolute bottom-0 bg-sky-200 w-full h-10  left-0"></div>
            </div>

    </>)
}

export default Card;