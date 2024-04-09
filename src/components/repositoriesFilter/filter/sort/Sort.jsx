
import { useContext } from "react"
import { ShowContext } from "../../../../context/ShowContext"
import  Select  from "../select/Select"

const typeElmn = ['Last updated', 'Name', 'Stars']
export function Sort() {
  const {show, setShow} = useContext(ShowContext)
  function handleShowType() {
    setShow(!show)
    console.log('sort')
  }

  
  return (
    <>
      <div>
        <button onClick={handleShowType} 
     className='flex bg-[#F6F8FA] text-[#24292F] text-sm font-medium py-1
     border-[#D5D8DB]  border rounded-md  px-3'>
          Sort
          <i className="material-icons">arrow_drop_down</i>
        </button>
        <Select typeElmn={typeElmn} className={'sort'}/>
        
        {console.log('sort')}
      </div>
    </>
  )
}