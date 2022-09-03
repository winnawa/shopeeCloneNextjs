import { useState,useEffect } from "react"
// import styles from "./Slides.module.css"
import {Container, CircleInTheSlide} from "./styled";

const Slides = ()=>{
    const slides = [{
        name:"Mona Lisa",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
    },{
        name:"Starry Night",
        url:"https://vcdn-giaitri.vnecdn.net/2022/02/23/buc-starry-night-2140-1645604348.jpg"
    },{
        name:"Vitruvian Man",
        url:"https://upload.wikimedia.org/wikipedia/commons/7/77/0_The_Vitruvian_Man_-_by_Leonardo_da_Vinci.jpg"
    },{
        name: "The Weeping Woman",
        url:"https://arthive.net/res/media/img/orig/article/c2e/7567110@2x.jpg"
    }]
    
    const [currentPosInSlides,updatePos] = useState(0);

    const changeTheSlide= () => {
        
        // console.log(slides[currentSlide].url);
        if (currentPosInSlides + 1 === slides.length){
            
            updatePos(0);
        }
        else {
            updatePos(currentPosInSlides+1)
        }
    }

    useEffect(() => {
        let timeFunc = setInterval(changeTheSlide, 3000);
        return ()=>{
            clearInterval(
                timeFunc
            )
        }
      }, [currentPosInSlides]);

    const circlesInTheSlides = slides.map((element,index)=>{
        if (index !== currentPosInSlides) {return <CircleInTheSlide key={index} active={false} onClick={()=>{updatePos(index)}}/> }
        else {return <CircleInTheSlide key={index} active={true} onClick={()=>{updatePos(index)}}/>}
    });

    return(
        <Container imgURL={slides[currentPosInSlides].url}>
            <div style={{position:"absolute", width:"100%",height:"35px",display:"flex",justifyContent:"center", bottom:"0px" }}>
                {circlesInTheSlides}
            </div>
        </Container>
    )

}

export default Slides