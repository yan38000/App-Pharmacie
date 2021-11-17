import React from 'react'
import './ButtonPatientsItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faPlus} from '@fortawesome/free-solid-svg-icons'

import {useNavigate} from 'react-router-dom'
export default function ButtonPatientsItem() {

    const navigate = useNavigate();
    return (
        <div className="c-button">
            <button onClick={()=> navigate('/addPatients')} className="button">
                <FontAwesomeIcon icon={faPlus}  className="icon-button"/>    
                Créer un patient
            </button>
        </div>
    )
}
