import { globalCss } from "./@stitches.config";

const globalStyle = globalCss({
    html:{
        scrollBehavior:"smooth"
    },
    "*":{
        padding:"0",
        margin:"0",
        boxSizing:"border-box",
        transition:"$coAndBg",
        scrollBehavior:"smooth",
    },
    "::selection":{
        backgroundColor:"$onBg100"
    },
    body:{
    },
    "@import":'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    "#root":{
        width:"100%",
        flex_c:"",
        jc_ac:"",
        position:"relative",
    },
    "#wrapper":{
        width:"100%",

        height:"100vh",
        overflow:"hidden"
        

    }
})

export default globalStyle