import React, { useState } from "react";
import Ico_arrowLeft from "../asesst/Icons/Ico_arrowLeft";
import Ico_arrowRight from "../asesst/Icons/Ico_arrowRight";
import data from "../Data";
import { useStore } from "../store/store";
import { deHeight, inHeight } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Information(){
    const setArt = useStore(state=>state.setArt)
    const isOpen = useStore(state=>state.isOpen)
    const setIsOpen = useStore(state=>state.setOpen)
    const [isfirst,setIsfirst] = useState(true)

    const currentArt = useStore(state=>state.currentArt)

    console.log(currentArt)

    let exStyle:any = {}
    if (isfirst){
        exStyle={
            height:"2rem",
            
        }
        
    }else{
        exStyle={
            animation:`${isOpen && !isfirst? inHeight : deHeight} 1.5s 0s both ease `,
        }
    }


    const hadnleArrows = (which:string)=>{
        if(which === "left"){
            if(currentArt === "1"){
                setArt("6")
                
            }else{
                setArt(`${Number(currentArt) - 1}`)
                
            }
        }else{
            
            if(currentArt === "6"){
                setArt("1")
                
            }else{
                setArt(`${Number(currentArt) + 1}`)
                
            }
        }
    }


    return( 
        <Flex justify={"center"} align="end" css={{
            width:"100%",
            padding:"0 $10",
            position:"absolute",
            bottom:"0",
            
            "@bp1":{
                padding:"0 $4",
            },



            "& svg":{
                fill:"black",
                marginBottom:"$2",
                backgroundColor:"white",
                width:"30px",
                height:"30px",
                padding:"4px",
                borderRadius:"$50",
                cursor:"pointer",
                position:"absolute",
                "&:hover":{
                    backgroundColor:"rgba(255,255,255,0.7)",
                },

            
            },
            "& svg:first-child":{
                left:"$10",
                bottom:"$2",
                "@bp1":{
                    left:"$3"
                }
            },

            "& svg:last-child":{
                right:"$10",
                bottom:"$2",
                "@bp1":{
                    right:"$3"
                }
            },

            }}>

            <Ico_arrowLeft  width="40" height="20" click={()=>{if(!isOpen){hadnleArrows("left")}}}/>

            <Flex dir={"column"} align="center" justify={"between"} css={{
                backgroundColor:"White",
                minWidth:"50%",
                width:"90%",
                padding:"$1 $2",
                borderRadius:"16px 16px 0 0",
                ...exStyle,
                zIndex:"$emergency",
                boxShadow:"$24dp",
                "&>div":{
                    
                    height:"100%"
                },
                "@bp4":{
                    width:"100vw",
                    position:"fixed",

                }


                

                }}>
                    <Text onClick={()=>{setIsOpen(!isOpen) ; setIsfirst(false)}} cursor={"click"} css={{
                        subhead1_i:"600",
                        color:"rgba(0,0,0,0.7)",
                        padding:"0 0 $1 0",
                        width:"100%",
                        textAlign:"center",
                        "&:hover":{
                            color:"black"
                        },
                        borderBottom:"1px solid rgba(0,0,0,0.1)"
                        }}>
                        Tap to Detail
                    </Text>


                    <Flex id="info_con" css={{
                        padding:"$3",
                        overflowY:"auto",
                        "& >div":{
                            width:"50%",
                            padding:"$1",
                            
                        },
                        "@bp2":{
                            flex_c:"",
                            "& >div":{
                                width:"100%",
                                padding:"$1",
                                
                            },  
                        },
                        }}>

                        <Flex dir={"column"} justify="center"  css={{
                            height:"100%",

                            }}>

                            <Text css={{
                                display1_i:"900",
                                paddingBottom:"$3",
                                "@bp4":{
                                    display2_i:"900"
                                }
                                }}>
                                {data[currentArt]["name"]}
                                
                            </Text>
                            
                            <Text css={{
                                subhead1_i:"500",
                                color:"rgba(0,0,0,0.9)"
                                }}>
                                {data[currentArt]["des"]}
                            </Text>

                        </Flex>

                        <Flex dir={"column"} justify="center" align={"center"} css={{
                            
                            "&>div":{
                                
                                width:"100%"
                                
                            }
                            }}>

                                <Flex css={{

                                    "& img":{
                                        width:"100%",
                                        height:"auto"
                                    }

                                }}>
                                    <img src={data[currentArt]["artImg"]} />
                                </Flex>

                                <Flex justify={"start"} align="start" css={{
                                    paddingTop:"$2",
                                    "& div":{
                                        width:"fit-content",
                                    }
                                    }}>

                                    <Flex css={{
                                            height:"auto",
                                            "& img":{
                                                width:"35px",
                                                height:"auto",
                                                borderRadius:"$50"
                                            }
                                        }}>
                                            <img src={data[currentArt]["artistImg"]} />
                                    </Flex>

                                    <Flex dir={"column"} css={{
                                        paddingLeft:"$1"
                                        }}>

                                        <Text css={{
                                            subhead1_i:"500",
                                            color:"rgba(0,0,0,0.9)"
                                            }}>
                                            {data[currentArt]["artist"]}
                                        </Text>

                                        <Text css={{
                                            subhead2_i:"500",
                                            color:"rgba(0,0,0,0.8)"
                                            }}>
                                            {data[currentArt]["born"]} - {data[currentArt]["die"]}
                                        </Text>

                                    </Flex>

                                </Flex>

                        </Flex>

                    </Flex>


            </Flex>

            <Ico_arrowRight width="40" height="20" click={()=>{if(!isOpen){hadnleArrows("right")}}}/>

        </Flex>
    )
}


export default Information