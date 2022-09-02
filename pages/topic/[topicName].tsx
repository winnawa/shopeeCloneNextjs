import { useRouter } from "next/router"
import { categoriesArray } from "../../components/homepage/Body/Category"
import {Parallax,ParallaxLayer} from '@react-spring/parallax'
import { BackgroundImgCenterBox, BackgroundImgContainer, SingleTopicPageContainer, TextBackGroundAndSizeColorBox, TextCenterBox, TextContainer } from "../../components/topicPage/styled";
import Header from "../../components/homepage/Header";
const SingleTopicComponent = ()=>{

    const router = useRouter();
    const tempName = router.query.topicName as string; 
    const topicName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
    const filteredArray = categoriesArray.filter((element)=>{if (element.name === topicName) return element});
    //console.log(filteredArray);
    const imgLink = filteredArray[0]?.imgURL ?? "https://static.frieze.com/files/styles/frieze_teaser/public/article/thumbnail/Tao%20Hui%2C%20Still%20from%20%27Being%20Wild%27%2C%202021.%20Single-channel%20HD%20video%2C%20colour%2C%20with%20sound%2C%2012%20min%203%20sec%20%282%29%20copy.jpg?itok=KNnUgV0o";


    return(
        <SingleTopicPageContainer>
            <Header></Header>

            <Parallax pages={1.9} >
                <ParallaxLayer offset={0} factor={1.9} speed={0.2} >    
                    <BackgroundImgCenterBox>
                        <BackgroundImgContainer imgURL={imgLink}>SCROLL  DOWN </BackgroundImgContainer>
                    </BackgroundImgCenterBox>
                </ParallaxLayer>
                <ParallaxLayer offset={0.95} factor={0.5} speed={0.5}>
                   <TextCenterBox>
                       <TextBackGroundAndSizeColorBox>
                           <TextContainer> Welcome to {topicName} !!!</TextContainer>
                           <TextContainer>Here we use <span style={{fontStyle:"italic"}}>parallax effect</span> to elaborate our page, this page has no other utilities, thank you.</TextContainer>
                           <TextContainer>Have a good day.</TextContainer>
                       </TextBackGroundAndSizeColorBox>
                   </TextCenterBox>
                </ParallaxLayer>

            
            </Parallax>
        </SingleTopicPageContainer>
    )
}
export default SingleTopicComponent