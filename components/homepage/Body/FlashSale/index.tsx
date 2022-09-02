
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { PaintingContainer,CategoryHeader, SinglePainting,ImgContainer,NameContainer,LeftButton,RightButton } from "./styled"
import { PriceContainer,SalePercent } from "./styled"

export const paintingArray= [
    {
        name : "Dream Of Human Life",
        price: "100000$",
        imgURL: "https://static.wixstatic.com/media/a04ebf_d494b857b9c84eadb1386c89dc42a858~mv2.jpg/v1/fill/w_700,h_420,al_c,q_90/a04ebf_d494b857b9c84eadb1386c89dc42a858~mv2.jpg",
        salePercent : "55%",
        description : "This painting by an unknown artist is based on Michelangelo’s drawing The Dream (Courtauld Institute, London). Michelangelo’s presentation drawings were made as gifts for his friends and were always intended as self-sufficient works of art. The Dream is probably one of an important group of such drawings that Michelangelo gave to the young Roman nobleman Tommaso Cavalieri in 1532–3. The art historian Vasari used the title The Dream (Il Sogno) in his 1568 edition of The Lives of the Artists. There is no other contemporary document to explain the composition’s meaning, but it appears to explore contemporary ideas about the ascent of the soul to the divine aided by beauty. The angel awakens or animates the perfect youth, drawing him away from the illusions and deceits of the earthly realm of sin to a new spiritual life in harmony with the will of God. Representations of the seven deadly sins are seen in the background.",
    },
    {
        name : "The Windmill",
        price: "56000$",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/7/72/Rembrandt_-_The_windmill_-_Google_Art_Project.jpg",
        salePercent : "15%",
        description : "Rembrandt depicted the boundary between city and countryside. The print shows the so-called Little Stink Mill, an actual windmill that stood on the De Passeerde bulwark along the city wall that ran down the west side of Amsterdam. The mill was owned by the Leathermakers Guild and its nickname derived from its activity of softening tanned leather by treating it with cod liver oil. Rembrandt traced the mill and its surroundings in such detail that it seems likely he began the print on site and then finished it in the studio. Visible in the sky are diagonal striations that result from his having brushed acid over the surface of the printing plate for effect, and craquelure was more likely the result of an accident that occurred as the plate was being bitten by the acid."
    },
    {
        name : "A Child Being Taught to Walk",
        price: "123000$",
        imgURL: "https://i.pinimg.com/736x/1d/d5/f1/1dd5f1ef6673131c48739c0f83b33ace.jpg",
        salePercent : "5%",
        description  : "The child is being held by her mother and older sister. The mother grips the child firmly, the sister more hesitantly, and Rembrandt observes her looking at the child’s face to see how anxious she is. The lines of her shoulders beautifully indicate this; Rembrandt even turned his pen round and scratched through the ink to emphasise it. It makes me see the child’s face, a hint of worry in it, indicated only by one or two faint marks. One then begins to look at ink, not mothers and sisters, and marks made by a hand, speedily. The trace of Rembrandt’s hand is still alive. Your eye can go back and forth between brown ink: sister; fast mark: mother. How rewarding this is, to move from the physical surface of the paper to its disappearance when you read the “subject”, and then back again. How many marvellous layers does this drawing have? The mother has a double profile, Picassoesque. Was it an accident with the pen that he then used as a master would? Both profiles are fascinating about her character. Her skirt is a bit ragged, without any real detail; one seems to know this, and then marvels at how these few lines suggest it. Then, there’s a passing milkmaid, perhaps glancing at a very common scene, and we know the milk pail is full. You can sense the weight. Rembrandt perfectly and economically indicates this with – what? Six marks, the ones indicating her outstretched arm. Very few people could get near this. It is a perfect drawing.",
    },
    {
        name : "Young Woman with Folded Hands",
        price: "99000$",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/0/04/Peter_Paul_Rubens_162.jpg",
        salePercent : "40%",
        description:"This impressive study of an unknown woman is one of Rubens's finest drawings. He used red chalk for the face, neck and hands, and black chalk for the clothes. The face with the slghtly open mouth is drawn three-quarter view. Evidently Rubens was extremely pleased with this study as he used it in several paintings, including 'The Crowning of St Catherine', his altar piece of 1631 (Toledo Museum of Art, Ohio).",
    },
    {   
        name : "Two Studies of a Singer",
        price: "42000$",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Degas_-_Zwei_Studien_einer_S%C3%A4ngerin.jpg/640px-Degas_-_Zwei_Studien_einer_S%C3%A4ngerin.jpg",
        salePercent : "70%",
        description :  "Not Available",

    },
    {
        name : "Half Figure of a Young Woman",
        price: "37000$",
        imgURL:"https://mymodernmet.com/wp/wp-content/uploads/2021/08/gustav-klimt-drawing-1.jpg",
        salePercent : "30%",
        description : "Rapidly executed during Klimt's late period, this sensuous drawing belongs to a large group of works that focus on women, strongly recalling the central figures in the paintings The Maiden (1912-13; Národní Galerie, Prague) and The Bride (1917-18; private collection, on loan to the Österreichische Galerie Belvedere, Vienna). Klimt was known to draw for many hours each day, often experimenting extensively with a single motif, such as the one seen here, of a woman with her head resting languidly on her shoulder. In addition, he relied on multiple drawings, sometimes from vastly different periods, to make a single painting, rendering it difficult to conclusively assign a drawing as preparatory to a particular painting. Most closely associated with The Bride and her long, almost geometric braids, Half-figure of a Young Woman is, characteristically, worked up from sketchy light gray lines into darker, more agitated strokes.",
    },
    {
        name : "The Jockey",
        price: "1000$",
        imgURL:"https://mymodernmet.com/wp/wp-content/uploads/2021/08/henri-de-toulouse-lautrec-drawing-3.jpeg",
        salePercent : "10%",
        description : "In this impeccable Degas artwork, The Jockey (Le Jockey), c. 1888-89, the impressionist artist captures the sport of horse racing, one of his most sought after and memorable themes, in a monochromatic palette of sepia color. Displaying his range and expertise as a draftsman, this artwork showcases the horse and his companion in a variety of positions. This skillful study of the athleticism and musculature of his subject is equally desirable for its beautiful composition which angles quite elegantly in a diagonal across the scene, with each sketch of Le Jockey and the horse progressing in definition with contrast and detail. Much like his celebrated images of the Ballet, Degas's fascination with motion and narrative are captured in rhythmic procession of horses and riders. Created circa 1888-1889, this crayon lithograph in sepia ink on cream Chine applique is hand signed by Edgar Degas (Paris, 1834- Paris, 1917) in pencil in the lower left margin and also hand signed by G.W. Thornley in pencil in the lower right margin. From the edition of 25, printed by Atelier Becquet, Paris and published by Boussod-Valadon, Paris, this work is exceptionally rare because it is from the deluxe edition of only twenty-five impressions, the only suite of lithographs hand-signed by Degas.",
    },
    {
        name : "Portrait of Victor Baltard's Wife",
        price: "111000$",
        imgURL:"https://mymodernmet.com/wp/wp-content/uploads/2021/08/ingres-drawings-1.jpeg",
        salePercent : "20%",
        description : "Not Available",
    },
    {
        name : "Pietà",
        price: "123000$",
        imgURL:"https://mymodernmet.com/wp/wp-content/uploads/2021/08/michelangelo-drawing-2.jpeg",
        salePercent : "25%",
        description  :  "The Pietà is regarded as one of the greatest works of the Renaissance artist Michelangelo Buonarroti. This impressive sculpture is currently placed in Vatican City, at St. Peter's Basilica. The Pietà is among the initial works of art of the similar theme made by the artist. Cardinal Jean de Billheres commissioned the statue, and this nobleman was a previous representative in Rome. The statue, which was in Carrara marble, was created to the funeral monument of the cardinal, yet it was relocated at St. Peter’s Basilica during the 18th century. It was also the only artwork by Michelangelo that was signed by the artist himself."
    },
    {
        name : "The Kiss",
        price: "112000$",
        imgURL:"https://media.timeout.com/images/103166743/750/562/image.jpg",
        salePercent : "10%",
        description : "The Kiss, Klimt 's most famous painting, was realised between 1907-08, the highpoint of Klimt “Golden Period,” when he painted a number of works in a similar gilded style. The inspiration for his “Golden Phase” was presumably provided by a visit to Ravenna during his travels through Italy in 1903, which introduced him to the world of Byzantine mosaics. For Klimt the flatness of the mosaics and their lack of perspective and depth only enhanced their golden brilliance, and he started to make unprecedented use of gold and silver leaf in his own work. The Kiss is housed in the Austrian Gallery in Vienna’s Upper Belvedere Palace. The painting depicts a couple embracing in a field of flowers. The man is bent over the woman, and she, clinging tightly to him, awaits his kiss. In terms of ornamentation, the male figure is characterized by square and rectangular forms, while for the female, soft lines and floral patterns are dominant.",
    },
    {
        name : "Whistler Mother",
        price: "135000$",
        imgURL:"https://media.timeout.com/images/103166741/750/562/image.jpg",
        salePercent : "50%",
        description : "This artwork is a portrait of James McNeill Whistlers mother, Anna McNeill Whistler while they were in London in 1871. It was said that James' model was not able to commit to the job and it was during this time that James decided to do his mother's portrait. There was a lot of experimentation before the creation of this famous painting. James Whistler wanted his mother to pose for him while standing up but it proved to be too tiresome for her. It was in this painting that Whistler was able to express his style in tonal composition and harmony. At first glance the painting appears simple. However, upon closer inspection the artwork indeed portrays a balance between the different shapes in the picture.",

    },
    {
        name : " Les Demoiselles",
        price: "186000$",
        imgURL:"https://media.timeout.com/images/103166750/750/562/image.jpg",
        salePercent : "55%",
        description  :  "Les Demoiselles dAvignon marks a radical break from traditional composition and perspective in painting. It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks. The compressed space they inhabit appears to project forward in jagged shards, while a slice of melon in the still life at the bottom of the composition teeters on an upturned tabletop. Picasso unveiled the monumental painting in his Paris studio after months of revision. The Avignon of the work's title is a reference to a street in Barcelona famed for its brothels."
    },
]


const currentPageHasEnoughCategories = (numOfCateOnAPage : number,currentPage  :number)=>{
    if ((numOfCateOnAPage*(currentPage+1)) <= paintingArray.length ){return true;}
    return false;
}



const FlashSale = ()=>{
    
    const [currentPage,updateCurrentPage] = useState(0);
    const [categoryActivated, updateActivated] = useState(false);
    const [loading,updateLoading] = useState(false);

    const numOfCategoiesOnAPage = 5;
    const lastPos = paintingArray.length - 1;
    const maxPage = (lastPos - (lastPos % numOfCategoiesOnAPage)) / numOfCategoiesOnAPage ;
    

    const leftClickedHandler = (event  :  React.MouseEvent<HTMLDivElement>)=>{
        event.preventDefault();
        updateLoading(true);
        // we set the value of loading to true so we WILL NOT allow the user to see what is happening
        if (currentPage == 0) {updateCurrentPage(maxPage)}
        else {updateCurrentPage(currentPage-1)}
    }
    const rightClickedHandler = (event  :  React.MouseEvent<HTMLDivElement>)=>{
        event.preventDefault();
        updateLoading(true);
        // we set the value of loading to true so we WILL NOT allow the user to see what is happening
        if (currentPage == maxPage){updateCurrentPage(0);}
        else {updateCurrentPage(currentPage+1);}
    }

    useEffect(()=>{
        const time = setTimeout (()=>{updateActivated(true)},200); 
        // we need the setTimeout because without it when updateActivated(true), the DOM will re-render 
        // and component get the prop updateActivated = true immediately -> no transition effect (we can see
        //the effect in console but on screen it happend very fast)
        // with setTimeout, we will make them appear as false for a while before we re-render them
        return (()=>{
            clearTimeout(time);
            updateActivated(false);
            // we updateActivated to false so it will be blank before appear on the screen on the next page click
            updateLoading(false);
            // this happend after we click the page, now we allow the component to display on the screen
        })        
    },[currentPage])
    

    const router = useRouter();
    const redirectToSingleProductPage = (event: React.MouseEvent<HTMLDivElement>, location : string = "")=>{
        //event.preventDefault();
        router.push({
            pathname: `/product/${location}`,
          }, 
          undefined, 
          { shallow: true }
        );
    }

    const paintingArrayDisplayed = paintingArray.map((element,index)=>{
        //console.log('MAP',categoryActivated)
        const satisfiedNumCategory = currentPageHasEnoughCategories(numOfCategoiesOnAPage,currentPage);
        if (satisfiedNumCategory){
            const minPos = numOfCategoiesOnAPage*currentPage;
            const maxPos = numOfCategoiesOnAPage*(currentPage+1) -1;
            if ((index >= minPos)&&(index <= maxPos)){

                return (
                    <SinglePainting mount={categoryActivated} key={index} onClick={(e)=>{redirectToSingleProductPage(e,element.name)}}>
                        <SalePercent>
                            {element.salePercent} 
                            <div style={{textAlign:"center",color:"red",fontSize:"large"}}>SALE</div>
                        </SalePercent>
                        <ImgContainer imgURL={element.imgURL}>  </ImgContainer>
                        <NameContainer> {element.name}</NameContainer>
                        <PriceContainer>{element.price}</PriceContainer>
                    </SinglePainting>
                )
            }
        }
        else {
            const minPos = numOfCategoiesOnAPage*(currentPage-1)+ (paintingArray.length % numOfCategoiesOnAPage);
            const maxPos = paintingArray.length -1;
            if ((index >= minPos)&&(index <= maxPos)){
                return (
                    
                        <SinglePainting mount={categoryActivated} key = {index} onClick={(e)=>{redirectToSingleProductPage(e,element.name)}}>
                                <SalePercent>
                                {element.salePercent} 
                                <div style={{textAlign:"center",color:"red",fontSize:"large"}}>SALE</div>
                            </SalePercent>
                            <ImgContainer imgURL={element.imgURL}>  </ImgContainer>
                            <NameContainer> {element.name}</NameContainer>
                            <PriceContainer>{element.price}</PriceContainer>
                        </SinglePainting>

                )
            }
        }   
    })
    
    const leftButton = '<';
    const rightButton = '>';
    return (
        <PaintingContainer>
            <LeftButton onClick={leftClickedHandler}> {leftButton} </LeftButton>
            <RightButton onClick={rightClickedHandler}> {rightButton} </RightButton>
            <CategoryHeader>
                PAINTING SALE
                {/* <div></div>   show time here */}
            </CategoryHeader>
            {!loading && paintingArrayDisplayed}
        </PaintingContainer>
    )
}

export default FlashSale