import { Form, Link, useLocation, useNavigate } from "react-router-dom"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import {useState} from 'react'



function CategoriesHeader({categories}){

    const location = useLocation()
    const navigate = useNavigate()

    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/search/" + term), 0.2);
        setTerm("");
    };

    return(
        <div className="w-full bg-gray-100 py-7">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="space-x-8 px-6">
                        <div className="relative ">
                            <div className="relative -mb-6 w-full overflow-x-auto pb-2">
                                <ul
                                    role="list"
                                    className="mx-4 inline-flex space-x-8 sm:mx-6 "
                                >  

                                    <Link to='/blog' 
                                    className={`${location.pathname === '/blog' ? "text-indigo bg-white ":"text-gray-500 border hover:border-indigo-600" } inline-flex  flex-col text-center lg:w-auto py-2 px-6  text-gray-900 rounded-md text-lg font-medium`}>
                                        All
                                    </Link>
                                    {
                                        categories&&categories.map((category,index)=>(
                                            <Link key={index} to={`/category/${category.slug}`} 
                                            className={`${location.pathname === `/category/${category.slug}` ? "text-indigo bg-white":"text-gray-500 border hover:border-indigo-600"} inline-flex  flex-col text-center lg:w-auto py-2 px-6 text-gray-900 rounded-md text-lg font-medium`}>
                                              {category.name}
                                            </Link >
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>                

                    </div>
                </div>
                    <form onSubmit={(e)=> onSubmit(e)} className="relative col-span-2  mr-8">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <i className= 'bx bx-search-alt text-xl text-gray-900'></i>

                        </div>
                                <input
                                    id='search'
                                    name='search'
                                    value={term}    
                                    onChange={(e)=>handleChange(e)}
                                    type='search'
                                    className={`
                                        py-2.5 pl-10 pr-3
                                        block w-full rounded-full
                                        border border-gray-300
                                        focus:border-gray-200 focus:ring-gray-200 
                                        placeholder-gray-600 focus:placeholder-gray-500

                                    `} 
                                    >
                                </input>           
                        </form>              
            </div>

        </div>
    )

}export default CategoriesHeader