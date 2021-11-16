import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'

export default function Patient() {
   const [patient , setPatient] = useState([]);
 

   useEffect(()=>{
       Axios.get('http://localhost:5000/api/patient/allPatient').then(res =>{
           console.log(res)
           setPatient(res.data)
       })
       .catch(err=>{
           console.log(err)
       })

       
       
   }, [])
    
    
    
        

   const navigate = useNavigate()
    return (
        
        <div>
            <button onClick={()=> navigate("/addPatients")}>create</button>
            {patient.map(patients=>(
                <div>
                    <h4 key="_id">{patients.nom}</h4>
                    
                </div>
                
            ))}
            
        </div>
    )
}
