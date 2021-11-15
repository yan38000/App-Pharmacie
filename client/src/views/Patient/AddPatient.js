import React, {useState} from 'react';
import Axios from 'axios'

export default function AddPatient() {
    const url ="http://localhost:5000/api/patient/addPatient";
    const [data , setDate] = useState({
        nom :"",
        prenom : "",
        dateNaiss : ""
    })

    function submit (e){
        e.preventDefault()
        Axios.post(url,{
            nom : data.nom,
            prenom : data.prenom,
            dateNaiss : data.dateNaiss
        })
        .then(res=>{
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
            addPatient
            <form onSubmit={(e)=> submit(e)}>
               
                <input  onChange={(e)=>{handel(e)}} id="nom" value={data.nom} placeholder="nom" type="text"></input>
                <input  onChange={(e)=>{handel(e)}} id="prenom" value={data.prenom} placeholder="prenom" type="text"></input>
                <input  onChange={(e)=>{handel(e)}} id="dateNaiss" value={data.dateNaiss} placeholder="date" type="date"></input>
                
                <button>submit</button>
            </form>
        </div>
    )
}
