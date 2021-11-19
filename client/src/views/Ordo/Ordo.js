

import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import '../Med/Med.css'

import {ImageList} from '@mui/material'
import ButtonOrdoItem from '../../components/ordoItem/patientItem/ButtonOrdoItem'

export default function Patient() {
   const [ordonnance , setOrdonnance] = useState([]);
    

   useEffect(()=>{
       Axios.get('http://localhost:5000/api/ordonnance//allOrdonnance').then(res =>{
           console.log(res)
           setOrdonnance(res.data)
       })
       .catch(err=>{
           console.log(err)
       })

       
       
    }, [])
    
   
    
        

   
    return (
        <div>
            <ButtonOrdoItem />
                <ImageList sx={{ width: 1100, height: 450 }} cols={2} rowHeight={164} className="scroll">
                    {ordonnance.map(ordonnances=>(
                        <div className="all">
                            <div className="card-all">
                                <div className="card-s" key={ordonnances._id}>
                                    <div className="card-left">
                                        <p className="card-title">Patient : {ordonnances.patient}</p>
                                        <p className="card-subTitle">Médecin : {ordonnances.medecin}</p>
                                        <p className="card-subTitle">Médicament : {ordonnances.detail[0].refMed}</p>
                                        <p className="card-subTitle">Boite par mois : {ordonnances.detail[0].boitesParMois}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ImageList>
        </div>
        
    )
}
