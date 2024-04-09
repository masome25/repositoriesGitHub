
import React from 'react'
import { useState } from 'react'
import { Profile } from './profile/Profile'
import { Repositories } from './repositories/Repositories'
import { RepositoriesFilter } from './repositoriesFilter/RepositoriesFilter'

export function GetData() {
  // const [state, setState] = useState([])
  // const [tem, setTem] = useState([])

  return (
    
    <div className='md:flex md:gap-4'>
    <Profile />
    <div className=' md:grow'>
    <div className='flex flex-col items-center gap-2 mt-8  relative '>
        <RepositoriesFilter
        //  state={state} setTem={setTem} 
         />
      </div>
      <Repositories 
      // state={state} setState={setState} tem={tem} setTem={setTem}
       />
    </div>
    </div>
  )
}



  // function handleAll() {
  //   setTem(state)
  // }
  // function handlePublic() {
  //   x = state.filter((item) => {
  //     return item.private === false
  //   })
  //   setTem(x)
  // }
  // function handlePrivate() {
  //   x = state.filter((item) => {
  //     return item.private
  //   })
  //   setTem(x)
  // }




