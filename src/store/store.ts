import create from "zustand";
import { easefadein, easefadeout, fadein, fadeout } from "../Styles/keyframes";


interface Store {
    currentArt : string ;
    setArt:(value:string)=>void;
    isOpen:boolean ;
    setOpen:(value:boolean)=>void
}

const useStore = create<Store>()((set,get)=>({
    currentArt:"1",
    setArt:(value:string)=>{

        document.getElementById("bg")!.style.animation = `${easefadeout} 1s 0s both ease`
        setTimeout(()=>{
            set(state=>{return{...state,currentArt:value}})
            document.getElementById("bg")!.style.animation = `${easefadein} 0.5s 0s both ease`
        },500)

    },
    isOpen:false ,
    setOpen:(value:boolean)=>{
        let leftElement = document.getElementById("info_con")?.childNodes[0]
        let rightElement = document.getElementById("info_con")?.childNodes[1]
        if(value){
            set(state=>{return{...state,isOpen:value}})
        fadeinAnimation(leftElement , rightElement)
        }else{    
            setTimeout(()=>{
                set(state=>{return{...state,isOpen:value}})
            },1200)
        fadeoutAnimation(leftElement , rightElement)
        }

    }
}))

const fadeinAnimation = (left:any , right:any)=>{
    left.childNodes[0]!.style.animation = `${fadein} 1s 1s both ease-in-out`
    left.childNodes[1]!.style.animation = `${fadein} 1s 1.5s both ease-in-out`
    right.childNodes[0]!.style.animation = `${fadein} 1s 2s both ease-in-out`
    right.childNodes[1]!.style.animation = `${fadein} 1s 2.5s both ease-in-out`
}

const fadeoutAnimation = (left:any , right:any)=>{
    left.childNodes[0]!.style.animation = `${fadeout} 1s 0.7s both ease`
    left.childNodes[1]!.style.animation = `${fadeout} 1s 0.6s both ease`
    right.childNodes[0]!.style.animation = `${fadeout} 1s 0.4s both ease`
    right.childNodes[1]!.style.animation = `${fadeout} 1s 0s both ease`
}



export {useStore}