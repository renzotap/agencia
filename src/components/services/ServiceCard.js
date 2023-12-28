import { Link } from "react-router-dom"


function ServiceCard({data,index}){
    return(
        <div 
        onMouseEnter={()=>{
            const tittle_element = document.getElementById(`learn`+index)
            tittle_element.classList.add('text-indigo-600')
        }} 
         
        onMouseLeave={()=>{
            const tittle_element = document.getElementById(`learn`+index)
            tittle_element.classList.remove('text-indigo-600')
        }} 

        className="w-full relative p-8 h-96 lg:h-[200pm] bg-white shadow-xl hover:-translate-y-1 transition duration ease-in-out hover:transition hover:duration hover:ease-in-out">
            <div className="w-full">
               <img src={data.img} className='w-10 h-10 inline-flex'/>
               <h2 className="text-xl font-semibold text-gray-900 pt-8"> {data.title}</h2>
               <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
               <div className="absolute bottom-0 left-0 p-8">
                    <Link to={data.href} id={`learn`+index}className="text-xl font-semibold pt-8">Learn More</Link>
               </div>
            </div>
        </div>
    )
}
export default ServiceCard