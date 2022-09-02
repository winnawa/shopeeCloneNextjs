import { AdditionalSale, ContainerInside, ImgOfSingleItem, NameOfSingleItem, PositionOfSoldAmount, PriceOfSingleItem, RecommendationContainer, RecommendationHeaderPosition, RelatedProductsTag, RelatedProductsTagContainer, SingleRecommendContainer, SoldAmountOfSingleItem } from "./styled"
import { RecommendationHeader,MoreButton,MoreButtonPosition } from "./styled";
const  recommendedItemsArray = [
    {
        imgURL :  "https://i.pinimg.com/236x/14/c9/18/14c91844882f821254f6147b69257aa3.jpg",
        itemName : "T-shirt Sweater Basic",
        onAdditionalSale : true,
        additionalSale : "10%",
        salePercent : "10%",
        price :  "3$",
        soldAmount :  "4.5m",
    },
    {
        imgURL :  "https://cf.shopee.vn/file/1ff3fb5b341e1d2198b745540634fd6f",
        itemName : "Ulzzzang 2022 Slippers",
        onAdditionalSale : false,
        additionalSale : "10%",
        salePercent : "10%",
        price :  "6.5$",
        soldAmount :  "1.2m",
    },{
        imgURL :  "https://ae01.alicdn.com/kf/Sa91d0bce65a14ccc837e462bdba36ce0g/2022New-Luxury-Designer-Shoes-Men-Foam-Bread-Slides-Summer-Unisex-EVA-Beach-Sandals-Women-Candy-Color.jpg_Q90.jpg_.webp",
        itemName : "Bread Black Slippers",
        onAdditionalSale : true,
        additionalSale : "10%",
        salePercent : "50%",
        price : "2.5$",
        soldAmount : "6.3m",
    },{
        imgURL :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4hb8oP66Xo8t6gubVceLmGhIAyQ-04vw3A&usqp=CAU",
        itemName :  "Travel Packbag",
        onAdditionalSale :  true,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "2.6$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "http://phuongtung.vn/pt/images/detailed/25/bluetooth-airpods-3-1.jpg",
        itemName :  "Bluetooth Airpod 5.0 I7S",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "1.5$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "https://salt.tikicdn.com/ts/tmp/8c/af/d5/682356e29ccf92f719fe4cbaa7112215.png",
        itemName :  "Mini Handy USB Fan",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "1$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "https://m.media-amazon.com/images/I/318aW4+t8LL._AC_SY580_.jpg",
        itemName :  "Lightfull Katana Plastic Toy",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "1$",
        soldAmount :  "2.5m",
    },{
        imgURL :  "https://lzd-img-global.slatic.net/g/p/a9dfa8506b4bd9ede5a942c66681e295.jpg_2200x2200q80.jpg_.webp",
        itemName :  "Multi-style Fashionable Hat",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "2.6$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "https://assets.vogue.com/photos/61b50b6cafd83244ae63b1f8/master/w_2560%2Cc_limit/007-christian-lacroix-spring-1994-couture-CN10056546-eve-salvail.jpg",
        itemName :  "Losangeles 1994 Clothes Set",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "2.6$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "https://product.hstatic.net/1000379579/product/untitled-1_2c598c90af5b416a8c051bb16baf478b.png",
        itemName :  "BBIA Last Lipstick",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "2.6$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC65pO9ToPlDyfJymcBFxjA8WGoTrnlmNwO5-uEeSzmC9_lxnc47iUapWJfRkFnhH3nhE&usqp=CAU",
        itemName :  "Unisex Hot Trend Glasses",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "2.6$",
        soldAmount :  "7.3m",
    },{
        imgURL :  "https://lzd-img-global.slatic.net/g/p/cee112ae7e8bedcfe5d6322433f391a1.png_720x720q80.jpg_.webp",
        itemName :  "Silicon Student Watch",
        onAdditionalSale :  false,
        additionalSale : "10%",
        salePercent : "25%",
        price  :  "5.6$",
        soldAmount :  "7.3m",
    }
]



const Recommendation = ()=>{

    const RecommendedItems = recommendedItemsArray.map((element,index)=>{

        return (
            <SingleRecommendContainer key={index} >
                <ContainerInside>
                <ImgOfSingleItem imgURL={element.imgURL} />
                <div style={{marginLeft:"5px",marginRight:"5px",marginTop:"10px"}}>
                    <NameOfSingleItem>{element.itemName}</NameOfSingleItem>
                    <AdditionalSale onAdditionalSale={element.onAdditionalSale}>{element.onAdditionalSale ? element.additionalSale : ""}</AdditionalSale>
                    <PriceOfSingleItem>{element.price}</PriceOfSingleItem>  
                    <PositionOfSoldAmount>
                        <SoldAmountOfSingleItem>{element.soldAmount}</SoldAmountOfSingleItem>
                    </PositionOfSoldAmount>
                </div>
                <RelatedProductsTagContainer>
                    <RelatedProductsTag>Related Products</RelatedProductsTag>
                </RelatedProductsTagContainer>
                </ContainerInside>
            </SingleRecommendContainer>
        )
    });

    return(
        <RecommendationContainer>
            <RecommendationHeaderPosition>
                <RecommendationHeader> RECOMMENDATION </RecommendationHeader>
            </RecommendationHeaderPosition>
            {RecommendedItems}
            <MoreButtonPosition id="help">
                {/* We put the help id here because we want to make a href from Help option to this location
                But if we put it at the footer, when we gete  to the page, the seach bar  will over lay 
                our content  */}
                <MoreButton>More</MoreButton>            
            </MoreButtonPosition>
        </RecommendationContainer>
    )
}
export default Recommendation