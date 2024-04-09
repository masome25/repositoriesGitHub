// import axios from "axios"
// import { useEffect } from "react"

import { useContext } from "react"
import { RepositoriesContext } from "../../context/RepositoriesContext"

export function Repositories() {

  const {tem} = useContext(RepositoriesContext)

  // useEffect(() => {
  //   axios.get('https://api.github.com/users/dumbmety/repos')
  //     .then(res => {
  //       setState(res.data)
  //       setTem(res.data)
  //       console.log(res.data)
  //     })
  // }, [])

  const colorLanguage = {
    JavaScript : 'yellow',
    TypeScript : 'blue',
    HTML: 'red',
    null : 'hidden'
  }

  return (
    <>
      <ul className="min-w-fit">
        {tem.map((item) => {
          return (
            <li key={item.id} className="border-b py-6 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0969DA] text-xl font-semibold hover:underline">{item.name}
                  <button className="border rounded-2xl px-1.5  text-[#656D76] text-xs ml-1">{item.visibility}</button></h3>
                <p className="text-[#656D76] text-sm	">{item.description}</p>
                <div>
                  <ul className="flex flex-wrap">
                    {
                      item.topics.map((topic, index) =>
                        <li key={index}> <a className="bg-[#DDF4FF] text-[#0960DA] rounded-xl 
                        px-2.5 font-medium	text-center text-xs	">{topic}</a> </li>
                      )
                    }
                  </ul>
                </div>
                <div className="flex gap-4 flex-wrap text-[#656D76] text-xs items-center">
                  <span className="flex items-center">  
                    <i className={`fa fa-circle mr-1 ${colorLanguage[item.language]}`}></i>
                    {item.language}
                  </span>
                  <span className="flex items-center "><i className="material-icons text-sm">star_border  </i>{item.stargazers_count}</span>
                  <span className="flex items-center"><i className="fa fa-code-fork"></i>{item.forks_count}</span>
                  <span>  updated</span>
                </div>
              </div>
              <div>
                <button className="border rounded-md flex items-center gap-2 px-2 bg-[#F6F8FA]
               text-[#24292F] text-xs	">
                  <i className="material-icons text-base">star_border</i>
                  Star
                  <i className="material-icons border-l">arrow_drop_down</i>
                </button>
              </div>
            </li>
          )
        }
        )
        }
      </ul>
    </>
  )
}