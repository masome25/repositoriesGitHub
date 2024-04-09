import { useContext } from "react";
import { ShowContext } from "../../../../context/ShowContext";
import  Select  from "../select/Select";
const typeElmn = ['All', 'public', 'private']
export function Type() {
   const {show, setShow} = useContext(ShowContext)
    function handleShowType() {
      setShow(!show)
      console.log('type')
    }
  
    return (
            <div>
                <button onClick={handleShowType}
                  className='flex bg-[#F6F8FA] text-[#24292F] text-sm font-medium
                  border-[#D5D8DB]  border rounded-md  px-3 py-1
                  '>
                    Type
                    <i className="material-icons">arrow_drop_down</i>
                </button>
                <Select typeElmn={typeElmn} className={'type'}/>
            {console.log('type')}
            </div>
    )
}