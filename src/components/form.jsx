import React from 'react'



const Form = ({digit}) => {    

    const data =[["HTML","CSS","JavaScript"],
                 ["ReactJs","NextJs","Tailwind CSS"],
                 ["Python","FastApi","FlaskApi","RestApi"]
                ]
    const course =["Programming FrontEnd","Advanced FrontEnd","Programming Backend","Graphic Design"]
    
  return (
    <> 
    <div className="center form">
    <div className="form"> 
    <h3>Course:<br/> <span style={{color:"green"}}>{course[digit]}</span></h3>
       <div> <h4>packages:</h4> 
        {data[digit]?.map((course, index)=> <ul key={index}><li>{course}</li></ul>)}
        </div>
     <div>
        <h4>Program Duration: </h4>
        1st February to 30th March
     </div>

     <div>
     <h4>Location:<span> Online/Onsite:</span> </h4> 
      Efab City Estate, Lifecamp, Abuja.    
     </div>
     <div className="center"><button>Reserve Your Ticket</button></div>
      
    </div >
    <div className="center text">
       <h4> Contact:</h4>
        Email:dnatech@gmail.com <br/>
        Whatsapp:08085943776<br/>
        Tel:07037638761
    </div>
    </div>
    </>
  )
}

export default Form