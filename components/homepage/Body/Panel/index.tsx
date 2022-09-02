import { PanelContainer } from "./styled"
import Slides from "./Slides"
import { SingleImgContainer, DoubleImgContainer } from "./styled"
const Panel = ()=>{
    return(
        <PanelContainer>  {/* displayed flex */}
            <Slides></Slides>
            <DoubleImgContainer>
                <SingleImgContainer imgURL={"https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Scream_by_Edvard_Munch_1893_800x.png"} style={{marginBottom:'10px'}}/>
                <SingleImgContainer imgURL={"https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/1693-508220135858/phaidon-twenty-first-century-painting-masterpieces-list-900x450-c.jpg"}/>
            </DoubleImgContainer>
        </PanelContainer>
    )
}

export default Panel