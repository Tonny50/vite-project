import React from 'react'

function Card() {
  return (
    <>
    <div><img src="https://media.istockphoto.com/id/1471048457/photo/white-rabbit.jpg?s=612x612&w=0&k=20&c=oyvNuHmhbGWfNgVK2_CFVT7br0b9F3ND1Kk_8R3mhqs=" alt="" /></div>
    <h1 className='text-3xl bg-green-500 m-5 rounded'>hello, meet Bunny</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur tenetur obcaecati, omnis tempora unde laborum similique eaque tempore, veritatis ex in officiis harum perferendis sit praesentium accusamus explicabo dolore!</p>
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div> 
             <img className="size-48 shadow-xl rounded-md" alt="" src="https://media.istockphoto.com/id/1471048457/photo/white-rabbit.jpg?s=612x612&w=0&k=20&c=oyvNuHmhbGWfNgVK2_CFVT7br0b9F3ND1Kk_8R3mhqs=" /> 
         </div>
           <div className="flex items-center md:items-start flex-col">  
              <span className="text-2xl font-medium">Class Warfare</span>  
                <span className="font-medium text-sky-500">The Anti-Patterns</span> 
                   <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">   
                       <span>No. 4</span>  
                           <span>·</span>  
                               <span>2025</span>  
                                 </span>  
                                 </div></div>


    </>
  )
}

export default Card