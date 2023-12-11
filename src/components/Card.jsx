import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

function Card(params) {
    return (<>
            <div className=" rounded-[20px] w-60 h-80 bg-zinc-900/90 text-white p-5">
            <FaRegFileAlt/>
<p className="text-xs mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eligendi, iusto eum et dolor libero culpa inventore sint natus quae aperiam vel, sit possimus at necessitatibus sequi provident ex odit.</p>
            </div>

    </>)
}

export default Card;