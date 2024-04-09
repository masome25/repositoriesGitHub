import { memo, useContext } from "react"
import { ShowContext } from "../../../../context/ShowContext"
import React from 'react'

// export default memo(function Select({typeElmn, className}) {
//     const {show, setShow} = useContext(ShowContext)
//     function handleClose() {
//         setShow(false)
//     }

//     return (
//         <>
//             <div className={` bg-[#8e90937c] h-[3000px]  z-10
//                              ${show ? 'block' : 'hidden'} 
//                              fixed top-0 right-0 left-0 z-10
//                              sm:bg-inherit`}
//                 onClick={handleClose}
//             >
//                 <div className={`
//                 border rounded-lg border-[#A6ADB4]
//                 bg-[#FFFFFF] mt-28 text-[#1F2328] text-sm
//                   sm:w-72 ${className}
//                 `}>
//                     <div className='flex justify-between border-b p-4'>
//                         <h5 className="font-medium">Select a type</h5>
//                         <button onClick={handleClose}>
//                             <i className="material-icons  text-base">close</i>
//                         </button>
//                     </div>
//                     <ul>
//                         {
//                             typeElmn.map((item, index) => {
//                                 return (
//                                     <li className='border-b p-4' key={index}>
//                                         <input type="checkbox" name={item} id={item} 
//                                                className='accent-white focus:accent-white' 
//                                         />
//                                         {console.log('render select')}
//                                         <label htmlFor={item} className="pl-2">{item}</label>
//                                     </li>
//                                 )
//                               }
//                            )
//                         }
//                     </ul> 
//                 </div>
//             </div>
//         </>
//     )
// }
// )

const Select = React.memo(({typeElmn, className}) => {
    const {show, setShow} = useContext(ShowContext)
    function handleClose() {
        setShow(false)
    }

    return (
        <>
            <div className={` bg-[#8e90937c] h-[3000px]  z-10
                             ${show ? 'block' : 'hidden'} 
                             fixed top-0 right-0 left-0 z-10
                             sm:bg-inherit`}
                onClick={handleClose}
            >
                <div className={`
                border rounded-lg border-[#A6ADB4]
                bg-[#FFFFFF] mt-28 text-[#1F2328] text-sm
                  sm:w-72 ${className}
                `}>
                    <div className='flex justify-between border-b p-4'>
                        <h5 className="font-medium">Select a type</h5>
                        <button onClick={handleClose}>
                            <i className="material-icons  text-base">close</i>
                        </button>
                    </div>
                    <ul>
                        {
                            typeElmn.map((item, index) => {
                                return (
                                    <li className='border-b p-4' key={index}>
                                        <input type="checkbox" name={item} id={item} 
                                               className='accent-white focus:accent-white' 
                                        />
                                        {console.log('render select')}
                                        <label htmlFor={item} className="pl-2">{item}</label>
                                    </li>
                                )
                              }
                           )
                        }
                    </ul> 
                </div>
            </div>
        </>
    )
});
export default Select;
