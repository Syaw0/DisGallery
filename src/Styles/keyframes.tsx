import { keyframes } from "./@stitches.config";

const fadein = keyframes({
    "0%":{
        opac:"0",

    },
    "100%":{
        opac:"1",

    }
})


const easefadein = keyframes({
    "0%":{
        opac:"0",
        transform:"scale(1.1)"
    },
    "100%":{
        opac:"1",
        transform:"scale(1)"

    }
})

const easefadeout = keyframes({
    "0%":{
        opac:"1",
        transform:"scale(1)"

    },
    "100%":{
        opac:"0",
        transform:"scale(1.1)"

    }
})




const inHeight = keyframes({
    "0%":{
        height:"2rem",

    },
    "100%":{
        height:"40rem",

    }
})


const deHeight = keyframes({
    "0%":{
        height:"40rem",

    },
    "100%":{
        height:"2rem",

    }
})



const fadeout = keyframes({
    "0%":{
        opac:"1",

    },
    "100%":{
        opac:"0",

    }
})



const fadeinTop = keyframes({
    "0%":{
        opacity:"0",
        transform:"translateY(-100px)",
    },
    "100%":{
        opacity:"1",
        transform:"translateY(0px)",
    }
})

export {fadein , fadeinTop , fadeout , inHeight , deHeight , easefadeout , easefadein}