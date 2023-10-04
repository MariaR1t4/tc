import Image from 'next/image'
import React from 'react'
import Loading from '../../public/icons8-loading.gif'


function Feedback(props:any) {
  const feedback = {
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
    height: "50vh"
}


    React.useEffect(() => {
        const setOpen = (props.open)
    }, [])
    return (
    <div >
        {open==true ? <Image src={Loading} alt='ok' /> : null}
    </div> 
    );  

}

}


export default Feedback;