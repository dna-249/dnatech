import React from 'react'
import {Link} from "react-router-dom"



const Form = ({digit}) => {    

    const data =[["HTML","CSS","JavaScript"],
                 ["ReactJs","NextJs","Tailwind CSS"],
                 ["Python","FastApi","FlaskApi","RestApi"],
                 ["Photoshop","CorelDraw"]
                ]
    const course =["Programming FrontEnd","Advanced FrontEnd","Programming Backend","Graphic Design"]
    const links =[["https://chat.whatsapp.com/BHP3h9o1FmWBABYe5DJcY3"],
                  ["https://chat.whatsapp.com/KEc2qJi6uUf4W4Fmq9TyAu"],
                  ["https://chat.whatsapp.com/DQ4AUuEw2njGAJmoR1pyzD"],
                  ["https://chat.whatsapp.com/C65zUdEOFHMJ4lTMAmRNAt"]]
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
     <div className="center"><a href={links[digit]}> Whatsapp Us Here</a></div>
      
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