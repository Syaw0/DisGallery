import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import data from "./Data"
import {useStore} from "./store/store"
import Nav from "./components/nav"
import Information from './components/information';
import { fadeinScale } from './Styles/keyframes';


window.addEventListener("resize" , ()=>{
  document.getElementById("root")!.style.width =  `${window.innerWidth}px`
})


function App() {

  const currentArt = useStore(state=>state.currentArt)
  console.log(data[currentArt]["artImg"])
  globalStyle()

  return (
    <Flex dir={"column"} justify={"between"} align="center" id='wrapper' data-testid="app" css={{
      width:"100%",
      height:"100%",
      "& > div:not(div:last-child , div:first-child)":{
        padding:"$2 $10"
      },
      "@bp1":{
        "& > div:not(div:last-child , div:first-child)":{
          padding:"$2 $4"
        },
        "@bp4":{
          "& > div:not(div:last-child , div:first-child)":{
            padding:"$2 $2"
          },
        }
      }
    }}>

      <Flex id="bg"  css={{
              backgroundImage:`url(${data[currentArt]["artImg"]})`,
              bgImg:"",
              width:"100vw",
              height:"100vh",
              position:"fixed",
              zIndex:"0",
              top:"0",
              left:"0",
              animation:`${fadeinScale} 2s 0s both ease`
      }}>

      </Flex>




      <Nav/>
      <Information/>
    </Flex>
  );
}

export default App;
