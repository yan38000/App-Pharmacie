import React, {useState} from 'react';
import Axios from 'axios'
import './AddPatient.css'

export default function AddPatient() {
    const url ="http://localhost:5000/api/patient/addPatient";
    const [data , setDate] = useState({
        numSecu : "",
        nom :"",
        prenom : "",
        mutuelle : "",
        dateNaiss : ""
    })

    function submit (e){
        e.preventDefault()
        Axios.post(url,{
            numSecu : data.numSecu,
            nom : data.nom,
            prenom : data.prenom,
            mutelle : data.mutelle,
            dateNaiss : data.dateNaiss
        })
        .then(res=>{
            alert("add success")
            console.log(res.data)
        })
    }
    function handel(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value
        setDate(newData)
        console.log(newData)
    }
    return (
        <div>
            <div className="add-title">Inscription nouveau patient</div>
            <form onSubmit={(e)=> submit(e)} className="add-form">
                    <div className="add-Name">
                        <input  onChange={(e)=>{handel(e)}} className="add-input" id="prenom" value={data.prenom} placeholder="Votre Prénom" type="text"></input>
                        <input  onChange={(e)=>{handel(e)}} className="add-input" id="nom" value={data.nom} placeholder="Votre Nom" type="text"></input>
                    </div>
                
                        <input  onChange={(e)=>{handel(e)}} className="add-input2" id="dateNaiss" value={data.dateNaiss} placeholder="Date de naissance" type="date"></input>
                    
                        <input  onChange={(e)=>{handel(e)}} className="add-input2" id="mutuelle" value={data.mutuelle} placeholder="Votre numéro de mutuelle" type="text"></input>
                        <input  onChange={(e)=>{handel(e)}} className="add-input2" id="numSecu" value={data.numSecu} placeholder="Votre numéro de sécurité social" type="number"></input>
                        
                    
                    <div>
                    <button className="add-button">Enregistrer</button>
                    </div>
                
                
                
                
                
            </form>
        </div>
    )
}
