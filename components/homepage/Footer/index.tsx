import { useState } from "react";
import { MoreAboutProject,TextAreaForExtraInfo, TextAreaForInspiration, BigTitle, ReadMore, FooterContainer, CategorySection, CategoryHeader, CategoryColumnsSection, SingleCategoryColumn, SingleCategorySpanContainer, SingleCategoryContainer, SingleSpanInCategory, ContentTitle } from "./styled";


const categoryArray = [
    {
        header : "MEN CLOTHES",
        contents : ['Jackets, Coats & Vests|',
        ' Suit Jackets & Blazers|',
        ' Hoodies & Sweatshirts|',
        ' Jeans|',
        ' Pants/Suits|',
        ' Short|',
        ' Tops|',
        ' Tanks|',
        ' Innerwear & Underwear|',
        ' Sleepwear|',
        ' Sets|',
        ' Socks|',
        ' Traditional Wear|',
        ' Costumes|',
        ' Occupational Attire|',
        ' Others|',
        ' Men Jewelries|',
        ' Eyewear|',
        ' Belts|',
        ' Neckties, Bow Ties & Cravats|']
    },
    {
        header  : "WOMEN CLOTHES",
        //contents :['Pants & Leggings|' ,'Shorts|', 'Skirts|' ,'Jeans|' ,'Dresses|', 'Wedding Dresses|' ,'Jumpsuits, Playsuits & Overalls|', 'Jackets, Coats & Vests|', 'Sweaters & Cardigans|', 'Hoodies & Sweatshirts|' ,'Sets|','Lingerie & Underwear|' ,'Sleepwear & Pajamas|' ,'Tops|' ,'Sportwear|' ,'Maternity Wear|' ,'Traditional Wear|' ,'Costumes|' ,'Fabric|' ,'Socks & Stockings|' ,'Others']
        contents : ['Pants & Leggings|',
        ' Shorts|',
        ' Skirts|',
        ' Jeans|',
        ' Dresses|',
        ' Wedding Dresses|',
        ' Jumpsuits, Playsuits & Overalls|',
        ' Jackets, Coats & Vests|',
        ' Sweaters & Cardigans|',
        ' Hoodies & Sweatshirts|',
        ' Sets|',
        ' Lingerie & Underwear |',
        ' Sleepwear & Pajamas|',
        'Tops|',
        ' Sportwear|',
        ' Maternity Wear|',
        ' Traditional Wear|',
        ' Costumes|',
        ' Fabric|',
        ' Socks & Stocking|']
    },
    {
        header : "MOBILE & GADGETS",
        contents : ['Mobile Phones|',
        ' Tablets|',
        ' Powerbanks|',
        ' Batteries, Cables & Charger|',
        ' Cases, Covers, & Skins|',
        ' Screen Protectors|',
        ' Phone Holders & Selfie Sticks|',
        ' Memory Cards |',
        ' Sims|',
        ' Others|'],
    },
    {
        header : "MOMS, KIDS & BABIES",
        contents : ['Baby Travel Essentials|',
        ' Feeding Essentials|',
        ' Maternity Accessories|',
        ' Maternity Healthcare|',
        ' Bath & Body Care|',
        ' Nursery|',
        ' Baby Safety|',
        ' Baby Food|',
        ' Baby Healthcare|',
        'Diapering & Potty|',
        ' Toys|',
        ' Gift Sets & Packages|',
        ' Others|',
        'Milk 24 months and ups|'],
    },
    {
        header : "CONSUMER ELECTRONICS",
        contents : ['Wearable Devices|',
        ' Tivi Accessories|',
        ' Gaming & Console|',
        ' Console Accessories|',
        ' Video Games|',
        ' Accessories and spare parts|',
        ' Earphones|',
        ' Audio|',
        'Tivi|',
        ' Tivi Box|']
    },
    {
        header : "HOME & LIVING",
        contents : ['Bedding|',
        ' Furniture|',
        ' Home Decoration|',
        ' Tools and Home improvement|',
        ' Kitchenware and food storage|',
        ' Lighting|',
        ' Outdoor & Garden|',
        ' Bathroom|',
        ' Regilious and Worship items|',
        ' Party supplies|',
        ' Housekeeping and Laundry|',
        ' Houseorganizers|',
        ' Drinkware|',
        ' Home Fragrance & Aromatherapy|']
    },
    {
        header : "COMPUTER & ACCESSORIES",
        contents : ['Desktop Computers|',
        ' Monitors|',
        ' Desktop & Laptop Components|',
        ' Data Storage|',
        ' Network Components|',
        ' Printers, Scanners & Projectors|',
        ' Peripherals & Accessories|',
        ' Laptops|',
        ' Others|'],
    },
    { 
        header : "BEAUTY",
        contents : ['Skincare|',
        ' Bath & Body Care|',
        ' Makeup|',
        ' Hair Care|',
        ' Beauty Tools & Accessories|',
        ' Oral Care|',
        ' Perfumes & Fragrances|',
        ' Men\'s Care|',
        ' Others|',
        ' Feminine Care|'],
    },
    {
        header : "CAMERAS",
        contents: ['Cameras|',
        ' Security Cameras & Systems|',
        ' Memory Cards|',
        ' Lenses|',
        ' Camera Accessories|'],
    },
    {
        header :  "HEALTH",
        contents : ['Medical Supplies|',
        ' Insect Repellents|',
        ' Food Supplement|',
        ' Adult Diapers & Incontinence|',
        ' Beauty Supplements|',
        ' Sexual Wellness|',
        ' Massage & Therapy Devices|'],
    },
    {
        header : "WATCHES",
        contents : ['Men Watches|',
        ' Women Watches|',
        ' Set & Couple Watches|',
        ' Kid Watches|',
        ' Watches Accessories|'],
    },
    {
        header : "WOMEN SHOES",
        contents : ['Boots|',
        ' Sneakers|',
        'Flat|',
        ' Heels|',
        ' Wedges|',
        ' Flat Sandals & Flip Flops|',
        ' Shoe Care & Accessories|'],
    },
    {
        header : "MEN SHOES",
        contents : ['Boots|',
        ' Sneakers|',
        ' Slip Ons & Mules|',
        ' Loafers & Boat Shoes|',
        ' Oxfords & Lace-Up|',
        ' Sandals & Flip Flops|',
        ' Shoe Care & Accessories|']
    },
    {
        header : "WOMEN BAGS",
        contents : ['Backpacks|',
        ' Laptop Bags|',
        ' Clutches & Wristlets|',
        'Waist Bags & Chest Bags|',
        ' Tote Bags |',
        'Top-handle Bags|',
        ' Crossbody & Shoulder Bags|',
        ' Wallets|',
        ' Bag Accessories|'],
    },
    {
        header : "HOME APPLIANCES",
        contents: ['Kitchen Appliances|',
        ' Large Appliance|',
        ' Vacuums & Floor care|',
        ' Air Conditioners & Fans|',
        ' Garment Care|',
        ' Others|',
        ' Blenders, Mixers & Grinders|'],
    },
    {
        header : "FASHION ACCESSORIES",
        contents  : ['Rings|',
        ' Earrings|',
        ' Scarves & Shawls|',
        ' Gloves|',
        ' Hair Accessories|',
        ' Bracelets & Bangles|',
        ' Anklets|',
        ' Hats & Caps|',
        ' Necklaces|',
        ' Eyewear|',
        ' Investment Precious Metals|',
        ' Belts|',
        ' Neckties, Bow Ties & Cravats|',
        ' Additional Accessories|',
        ' Accessories Sets & Packages|',
        ' Others|',
        ' Socks & Stockings|'],
    },
    {
        header : "SPORTS & OUTDOORS",
        contents : ['Luggage|',
        ' Travel Bags|',
        ' Travel Accessories|',
        ' Sports & Outdoor Recreation Equipments|',
        ' Sports Footwear|',
        ' Sports & Outdoor Apparels|',
        ' Sports & Outdoor Accessories|'],
    },
    {
        header : "GROCERY",
        contents :  ['Snacks|',
        ' Convenience / Ready-to-eat|',
        ' Food Staples|',
        ' Cooking Essentials|',
        ' Baking Needs|',
        ' Dairy & Eggs|',
        ' Beverages|',
        ' Breakfast Cereals & Spread|',
        ' Bakery|',
        ' Alcoholic Beverages|',
        ' Gift Set & Hampers|',
        ' Fresh & Frozen Food|'],
    },
    {
        header  : "AUTOMOTIVE",
        contents : ['Bike, E-bike|',
        ' Motorbike|',
        ' Car|',
        ' Helmets|',
        ' Motorbike Accessories|',
        ' Bicycle & E-bike Accessories|',
        ' Interior Accessories|',
        ' Automotive Oils & Lubes|',
        ' Auto Parts & Spares|',
        'Motorbike Spare Parts|',
        ' Exterior Accessories|',
        ' Automotive Care|']
    },
    {
        header  : "BOOK  & STATIONERY",
        contents : ['Domestic Books|',
        ' Foreign Books|',
        ' Gift & Wrapping|',
        ' Writing & Correction|',
        ' School & Office Supplies|',
        ' Coloring & Arts|',
        ' Notebooks & Paper Products|',
        ' Souvenirs|']
    }
]

const Footer = ()=>{
    const [showMore,updateshowMore] = useState(false);
    const [readOption, updateReadOption] = useState("Read More");

    const readOptionHadler = ()=>{
        updateshowMore(!showMore);
        if (readOption === "Read More") {updateReadOption("Read Less");}
        else  {updateReadOption("Read More");}
    }

    const  changePageHandler = ()=>{

    }
  
    // const putInArray =  (s)=>{
    //     let outPutArray = [];
    //     let contentTopic = "";
    //     for (character in s){
    //         if (s[character] == '|'){
    //             contentTopic += "|";
    //             outPutArray.push(contentTopic);
    //             contentTopic = "";
    //         }
    //         else {
    
    //             contentTopic += s[character];
    //         }
    //     }
    //     console.log(outPutArray);
    // }  
    
    const columnDivide = (posOfColumn : number)=>{
        const columnContent = categoryArray.map((element,index)=>{
            if (index% 5 === posOfColumn){
                //console.log(element.contents)
                const insideElements = element.contents.map((element,index)=>{
                    return(
                        //<span onClick={changePageHandler}>{element}</span> // span of single category
                        <SingleSpanInCategory key={index+100} onClick={changePageHandler}>{element}</SingleSpanInCategory>
                    )
                })
                return(
                    <SingleCategoryContainer key={index}>
                        <CategoryHeader>{element.header}</CategoryHeader>
                        <SingleCategorySpanContainer >
                            {insideElements}
                        </SingleCategorySpanContainer>        
                    </SingleCategoryContainer>
                )
            }
        }) 
        return columnContent; 
    }


    return (
        <FooterContainer >
            <MoreAboutProject >
                <BigTitle >ABOUT</BigTitle>
                <ContentTitle>THIS PROJECT</ContentTitle>
                <TextAreaForInspiration>
                    This project is  inspired from <b>Shopee</b> website, I tried to bring as many functionality as
                    possible from the original  website. There is still some limitation due to the animation effect 
                    that I am still unable to fathom. <br/>
                    In this website I try to use GraphQL to retrieve data from MongoDB. <br/>
                    The Shopee website is so deep in layer that hindering me from finishing this project quickly.
                </TextAreaForInspiration>
                {showMore && <ContentTitle>SHOPEE</ContentTitle>}
                {showMore && 
                    <TextAreaForExtraInfo>
                        Shopee Pte. Ltd. (Shopee) is a Singaporean multinational technology company which 
                        focuses mainly on e-commerce. Headquartered under Sea Ltd, Shopee was first launched in
                        Singapore in 2015, and later expanded its reach abroad. <br></br>
                        As of 2021, it is widely considered as the largest e-commerce platform in Southeast Asia 
                        with 343 million monthly visitors, and the company also serves consumers and sellers 
                        throughout in several countries across the Americas and Europe who wish to purchase and 
                        sell their goods online.
                    </TextAreaForExtraInfo>}
                <ReadMore onClick={readOptionHadler}>{readOption}</ReadMore>
            </MoreAboutProject>

            <CategorySection>
                    <CategoryHeader style={{paddingBottom : "10px", fontSize : "x-large"}}>CATEGORY</CategoryHeader>
                    <CategoryColumnsSection>
                        <SingleCategoryColumn style={{marginRight: "15px"}}>{columnDivide(0)}</SingleCategoryColumn>
                        <SingleCategoryColumn style={{margin: "0px 15px 0px 15px"}}>{columnDivide(1)}</SingleCategoryColumn>
                        <SingleCategoryColumn style={{margin: "0px 15px 0px 15px"}}>{columnDivide(2)}</SingleCategoryColumn>
                        <SingleCategoryColumn style={{margin: "0px 15px 0px 15px"}}>{columnDivide(3)}</SingleCategoryColumn>
                        <SingleCategoryColumn style={{marginLeft: "15px"}}>{columnDivide(4)}</SingleCategoryColumn>
                    </CategoryColumnsSection>
            </CategorySection>
        </FooterContainer>
    )
}
export default Footer;