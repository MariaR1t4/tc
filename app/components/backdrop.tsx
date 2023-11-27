import React from 'react';
import OkImage from '../../public/icons8-ok.gif'
import CancelImage from '../../public/icons8-cancel.gif'
import Image from 'next/image';

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
    height: "50vh"
}

const MyBackdrop = (feed: any, cancelShow:any) => {
    React.useEffect(() => {
        setTimeout(() => cancelShow,1000)
    }, [cancelShow])
    return (
    <div >
        {feed ? <Image src={OkImage} alt='ok' /> : <Image style={imageStyle} src={CancelImage} alt='cancel'/>}
    </div> 
    );
}

export default MyBackdrop;