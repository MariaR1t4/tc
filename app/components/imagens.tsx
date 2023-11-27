import Image from "next/image"

export default function Imagem({
    imagem,
}:{
        imagem:string
    }){
        return(
            <Image src={imagem} alt="" className=" w-full h-32 relative rounded-e-none"/>
        )
    }