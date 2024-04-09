
// import { useContext } from "react"
// import { ShowContext } from "../../../context/ShowContext"
// import  Select  from "./select/Select"

import { Language } from "./filterLanguage/Language"
import { Sort } from "./sort/Sort"
import { Type } from "./type/Type"

// const filterItems = [
//     {
//         name: 'Type',
//         target: ['All', 'public', 'private']
//     },
//     {
//         name: 'Language',
//         target: ['All', 'Html', 'typeScript', 'javaScript']
//     },
//     {
//         name: 'Sort',
//         target: ['Last updated', 'Name', 'Stars']
//     },
// ]

export function Filter() {
 
    // const { show, setShow } = useContext(ShowContext)
    // function handleShow() {
    //     setShow(!show)
    // }

    return (
        // <ul className="flex flex-wrap gap-1">
        //     {
        //         filterItems.map(({ name, target }, index) => {
        //             return (
        //                 <li key={index}>
        //                     <button onClick={handleShow}
        //                         className='flex bg-[#F6F8FA] text-[#24292F] text-sm font-medium
        //                                  border-[#D5D8DB]  border rounded-md  px-3 py-1
        //                                  '>
        //                         {name}
        //                        <i className="material-icons">arrow_drop_down</i>
        //                     </button>
        //                     <Select target={target}/>
        //                 </li>
        //              )
        //           }
        //        )
        //     }
        // </ul>

        <div  className="flex flex-wrap gap-1">
        <Type />
        <Language />
        <Sort />
        </div>
    )
}
