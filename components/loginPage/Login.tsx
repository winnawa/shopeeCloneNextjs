import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { app } from "../../src/firebase/firebase"
import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { Button, FlexContainer, ImgContainer, TextBackGroundAndSizeColorBox, TextCenterBox, TextContainer } from "./styled";
import { useRouter } from "next/router";
const LoginComponent = ()=>{
    const router = useRouter();

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    provider.setCustomParameters({prompt: "select_account"});
    const signInWithGoogle = () => {
        signInWithPopup(auth,provider)
        .then((results : any)=>{
            router.push({
                pathname: "/home",
              }, 
              undefined, 
              { shallow: true }
            );
        })
        .catch((error : any)=>{console.log(error.code);}
        );
    }

    return(
        <>
            <Parallax pages={1.5} >
                <ParallaxLayer offset={0} factor={1.5} speed={0.2} >    
                    <ImgContainer imgURL="https://b2h3x3f6.stackpathcdn.com/assets/landing/img/gallery/2.jpg">
                    </ImgContainer>
                </ParallaxLayer>
                <ParallaxLayer offset={0.90} factor={0.5} speed={0.5}>
                    <TextCenterBox>
                        <TextBackGroundAndSizeColorBox>
                            <TextContainer>  Welcome to our website</TextContainer>
                            <TextContainer> Let"s take a tour !!!</TextContainer>
                        </TextBackGroundAndSizeColorBox>
                      
                    </TextCenterBox>
                    <FlexContainer>
                        <Button onClick={signInWithGoogle}>Sign In</Button>
                    </FlexContainer>
                </ParallaxLayer>
            </Parallax>
            
        </>
    )
}
export default LoginComponent;
