


export function Update() {
    
  const frs = new Date().getTime()
    
  const min = setInterval(() => {
        const sec = new Date().getTime()
        const diff = Math.round((sec - frs)/(1000*60))
        console.log(diff)
        if(diff === 59) {
            clearInterval(min)
        }
       }, 60000)


       const hour = setInterval(() => {
        const sec = new Date().getTime()
        const diff = Math.round((sec - frs)/(1000*60*60))
        console.log(diff)
        if(diff === 23) {
            clearInterval(hour)
        }
       }, 3600000)

       const day = setInterval(() => {
        const sec = new Date().getTime()
        const diff = Math.round((sec - frs)/(1000*60*60*24))
        console.log(diff)
        if(diff === 7) {
            clearInterval(day)
        }
       }, 3600000*24)





  return (
    <>
    <p>kkk</p>
    </>
  )
}