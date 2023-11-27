import React from 'react';

const backdrop = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: 100,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
}

const imageStyle = {
    width: "50vw",
    height: "50vh",
    textAlign: "center",
    backgroundColor: "white",
    zIndex: 101
}

const ModalAula = (aula: any, cancelScreen:any) => {
   
    return (
    <div style={backdrop} >
        <div style={imageStyle}>
        {aula.aula.id}
        {JSON.stringify(cancelScreen)}
        <button onClick={cancelScreen}>Close</button>
        </div>
    </div> 
    );
}

export default ModalAula;