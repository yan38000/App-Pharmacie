import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import ButtonPatientsItem from '../../components/patientItem/ButtonPatientsItem'
import './Patient.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faPlus,faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import {ImageList}from '@mui/material'

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
            <ButtonPatientsItem />
            <ImageList sx={{ width: 1100, height: 450 }} cols={2} rowHeight={164} className="scroll">
            {patient.map(patients=>(
                <div className="all">
                    <div className="card-all">
                        <div className="card-s">
                            <div className="card-left">
                                <p className="card-title">{patients.nom}</p>
                                <p className="card-subTitle">Date de naissance :</p>
                                <p className="card-subTitle">Mutuelle :</p> 
                                <p className="card-subTitle">Sécurité Social :</p>
                                <p className="card-subTitle">Ordonnances :</p>
                            </div>
                    
                            <div className="card-right">
                                <FontAwesomeIcon icon={faPlus}  className="icon-button-card"/>
                                <FontAwesomeIcon icon={faEdit}  className="icon-button-card"/> 
                                
                                <FontAwesomeIcon icon={faTrash}  className="icon-button-card"/>
                                 
                            </div>

                         </div>
                    </div>
                   
                </div>
                
            ))}
            </ImageList>
        </div>
    )
}
