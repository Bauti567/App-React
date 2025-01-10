import React, { useState } from 'react'
function ShowComponent() {
    const[active,setActive] = useState(false)
    
    const showComponent = ()=>{
        setActive(!active);

    }

  return (
    <div>
        <h1>Show or not componente</h1>
        <button onClick={showComponent}>
            {active ? "Ocultar componente": "Mostrar Componete"}
        </button>
        {
            active && (
                <div style={{marginTop: '20px'}}>
                    <span>!El componente es visible</span>
                </div>
            )
        }
    </div>

  )
}

export default ShowComponent;