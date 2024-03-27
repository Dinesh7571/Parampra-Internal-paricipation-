import React from 'react'

const Events = () => {

  const colors=["bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500"]
      
  const eventList=[
    {
        name:"Medi-Quest",
        code:0    
    },
    
    {
        name:"Web Stack",
        code:1
    },
    {
        name:"Mind Bend(Riddles)",
        code:2
    },
    {
        name:"Science Exibition",
        link:"",
        code:3
    },
    {
        name:"Need for speed",
        link:"",
        code:4
    },
    {
        name:"Robo War",
        link:"",
        code:5
    },
    {
        name:"Bridge Kriti",
        link:"",
        code:6
    },
    {
        name:"Graphics Design",
        link:"",
        code:7
    },
    {
        name:"Visual Vista",
        link:"",
        code:9
    },
    {
        name:"Rubic's Ruckus",
        link:"",
        code:10
    },
    {
        name:"Shark Tank",
        link:"",
        code:11
    },
    {
        name:"Junk Yard",
        link:"",
        code:12
    },
    {
        name:"BGMI",
        link:"",
        code:13
    },
    
   
  ]
       
    return (
        <div className="bg-[#0d1117] text-white min-h-screen p-12">
            <h1 className="text-6xl font-bold mb-4">Parampara 2024 Technical Events </h1>
            {/* <h1 className='text-2xl'>()</h1> */}
            <p className="text-xl mb-12">
                College annual fest registratinon platform to provide clear view of all events
            </p>

         <div className='flex justify-center'>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 md:w-[50%] sm:w-[100%] h-50">

                  {eventList.map((item,index)=>(
                             <a href={`/${item.code}`} key={index} className={`whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 ${colors[index%6]} text-white rounded-lg px-4 flex flex-col items-center justify-center`}>
                             {item.name}
                             </a>                                                                                                                                                                                                                                                      
                  ))}
                
                
            </div>
         </div>
        </div>
        
    )
}

export default Events