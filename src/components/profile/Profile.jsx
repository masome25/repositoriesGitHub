
import { useState } from "react"

export function Profile() {
    const [isFollow, setIsFollow] = useState(false)
    const [followers, setFollowers] = useState(454)
    function handleFollowers() {
        isFollow ? setFollowers(followers - 1) : setFollowers(followers + 1)
        setIsFollow(!isFollow)
    }

    return (
        <div className="border-b mt-16 md:w-3/12">
            <div className="flex items-center mb-12 md:flex-col md:items-start">
                <img src='https://avatars.githubusercontent.com/u/68688806?v=4'
                    className="rounded-full w-2/12 mr-3 md:w-full md:mx-0" />
                <div className="flex-auto	">
                    <h6 className="text-[#1F2328] text-2xl	font-semibold my-0">Mety</h6>
                    <p className="text-[#656D76] text-xl font-light my-0">dumbymety . he/him</p>
                </div>
            </div>
            <div className="md:hidden">??</div>
            <div className="md:flex md:flex-col-reverse">
                <div>
                    <p className="text-[#1F2328] text-base mb-4">Interested in Innovation</p>
                    <div className="flex items-end">
                        <a className="text-sm hover:text-[#0969DA] flex items-end">
                            <i className="material-icons text-[#656D76] hover:text-[#0969DA]">people_outline</i>
                            <span className="font-medium"> {followers} </span>
                            <span className="text-[#656D76] hover:text-[#0969DA] "> followers </span>
                        </a>
                        .
                        <a className="text-sm hover:text-[#0969DA]">
                            <span className="font-medium">  824 </span>
                            <span className="text-[#656D76] hover:text-[#0969DA]"> following </span>
                        </a>
                    </div>
                </div>
                <button onClick={handleFollowers}
                    className=" my-3 py-1 bg-[#F6F8FA]  w-full
                             hover:bg-[#F3F4F6] focus:text-[#656D76]
                             border-[#D5D8DB]  border rounded-md
                             text-[#1F2328] text-base font-medium">
                    {isFollow ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    )
}