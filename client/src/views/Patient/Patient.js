import React, {useState, useEffect} from 'react'
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
    return (
        
        <div>
            {patient.map(patients=>(
                <h1 key={patients._id}>{patients.nom}</h1>
            ))}
            aaaa
        </div>
    )
}
