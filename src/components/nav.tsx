import React from "react";
import Ico_Logo from "../asesst/Icons/Ico_logo";
import Ico_menu from "../asesst/Icons/Ico_menu";
import Ico_menu2 from "../asesst/Icons/Ico_menu2";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Nav(){
    return(
        <Flex justify={"between"} css={{
            width:"100%",
            

            }}>

            <Text cursor={"click"} css={{
                headline3_i:"900",
                
                color:"White",
                flex_r:"",
                jc_ac:"",
                "& svg":{
                    fill:"White",
                    marginRight:"5px"
                },
                "@bp4":{
                    headline5_i:"900"
                }
                }}>
                <Ico_Logo width="24" height="24"/>
                DisGallery
            </Text>

            <Text cursor={"click"} css={{
                headline3_i:"900",
                color:"white",
                flex_r:"",
                jc_ac:"",
                "& svg":{
                    fill:"White"
                },
                "@bp4":{
                    headline5_i:"900"
                }
                }}>
                <Ico_menu width="25" height="25"/>
                Menu
            </Text>

        </Flex>
    )
}

export default Nav