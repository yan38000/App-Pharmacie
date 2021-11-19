import React from 'react'



import {useNavigate} from 'react-router-dom'
export default function ButtonReturnItem() {

    const navigate = useNavigate();
    return (
        <div className="c-button">
            <button onClick={()=> navigate('/patients')} className="button">
                  
                Retour
            </button>
        </div>
    )
}
