
import { Filter } from "./filter/Filter"
import { Search } from "./search/Search"

export function RepositoriesFilter() {
   
    return(
        <div className='flex flex-col w-full gap-2 border-b pb-3
        lg:flex-row lg:justify-between lg:gap-3'>
        <Search />
        <Filter />
        </div>
    )
}