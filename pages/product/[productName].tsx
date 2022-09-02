import { useRouter } from "next/router";
import Header from "../../components/homepage/Header";
import React from "react";
import { paintingArray} from "../../components/homepage/Body/FlashSale";
import { DescriptionContainer, ImgContainer, InfoContainer, ProductNameContainer, SingleProductContainer } from "../../components/productPage/styled";


const SingleProductDetail = ()=>{

    const router = useRouter();
    const productName = router.query.productName;
    const filteredArray = paintingArray.filter((element)=>{if (element.name === productName) return element});
    console.log(filteredArray);
    const obj = filteredArray[0];



    return(
        <React.Fragment>
            <Header></Header>
            <SingleProductContainer>
                <ImgContainer imgURL={obj.imgURL}></ImgContainer>
                <InfoContainer>
                    <ProductNameContainer>{obj.name}</ProductNameContainer>
                    <DescriptionContainer>{obj.description}</DescriptionContainer>
                </InfoContainer>
            </SingleProductContainer>
        </React.Fragment>
    )

}

export default SingleProductDetail