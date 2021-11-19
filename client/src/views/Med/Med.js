import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './Med.css'

import {ImageList}from '@mui/material'

export default function Patient() {
   const [medecin , setMedecin] = useState([]);
    

   useEffect(()=>{
       Axios.get('http://localhost:5000/api/medecin/allMedecin').then(res =>{
           console.log(res)
           setMedecin(res.data)
       })
       .catch(err=>{
           console.log(err)
       })

       
       
   }, )
    
   
    
        

   
    return (
        
        <div>
            
            <ImageList sx={{ width: 1100, height: 450 }} cols={2} rowHeight={164} className="scroll">
            {medecin.map(medecins=>(
                <div className="all">
                    <div className="card-all">
                        <div className="card-s" key={medecins._id}>
                            <div className="card-left">
                                <p className="card-title">{medecins.nom} {medecins.prenom}</p>
                                
                            </div>
                    
                            
                         </div>
                    </div>
                   
                </div>
                
            ))}
            </ImageList>
        </div>
    )
}
