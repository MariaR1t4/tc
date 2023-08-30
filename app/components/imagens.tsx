export default function Imagem({
    imagem,
}:{
        imagem:string
    }){
        return(
            <img src={imagem} alt="" className=" w-full h-32 relative rounded-e-none"/>
        )
    }