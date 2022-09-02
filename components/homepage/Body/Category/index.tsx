
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import { CategoryContainer,CategoryHeader, SingleCategory,ImgContainer,TextContainer,LeftButton,RightButton } from "./styled"


export const categoriesArray= [
    {
        name : "Artists",
        imgURL:"https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        iconURL: "https://cdn2.vectorstock.com/i/1000x1000/12/91/artist-icon-in-flat-style-vector-10211291.jpg"
    },
    {
        name : "Draws",
        imgURL : "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80",
        iconURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIco7if03TRLyQb9o4-YhrutSXcB-Snajskw&usqp=CAU"
    },
    {
        name : "Brushes",
        imgURL:"https://images.unsplash.com/photo-1510935813936-763eb6fbc613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
        iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9lr7as4oh0oAAAOqGsrMHV96Oaw70169zw&usqp=CAU"
    },
    {
        name : "Auctions",
        imgURL:"https://images.unsplash.com/photo-1555964681-9e0c30ba9b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        iconURL:"https://img.freepik.com/premium-vector/auction-flat-icon-design-vector-illustration_549488-97.jpg?w=2000"
    },
    {   
        name : "Collections",
        imgURL:"https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        iconURL:"data:image/jpeg;base64,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"
    },
    {
        name : "Galleries",
        imgURL:"https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        iconURL:"https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png"
    },
    {
        name : "Vouchers & Services",
        imgURL:"https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        iconURL:"https://us.123rf.com/450wm/bloomua/bloomua1504/bloomua150400075/38866989-thin-line-icon-with-flat-design-element-of-movie-ticket-paper-coupon-one-pass-in-theater-grand-event.jpg?ver=6"
    },
    {
        name : "3D Online Tours",
        imgURL:"https://images.unsplash.com/photo-1598740717606-47a84c14d27f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        iconURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBPqc-eyF2yu5JEuhH9ATgJxJbiQRlwBHcg&usqp=CAU"
    },
    {
        name : "Art Exhibitions",
        imgURL:"https://images.unsplash.com/photo-1577887545694-f5c2a6293428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        iconURL:"https://cdn-icons-png.flaticon.com/512/806/806652.png"
    },
    {
        name : "History",
        imgURL:"https://images.unsplash.com/photo-1581345837712-414b9b6fb450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        iconURL:"https://cdn2.iconfinder.com/data/icons/education-and-knowledge-4-1/128/168-512.png"
    },
    {
        name : "Facts",
        imgURL:"https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
        iconURL:"https://png.pngtree.com/png-clipart/20190630/original/pngtree-fact-file-document-icon-png-image_4176951.jpg"
    },
    {
        name : "International Services",
        imgURL:"https://images.unsplash.com/photo-1488409688217-e6053b1e8f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
        iconURL:"https://www.inventicons.com/uploads/iconset/512/wm/512/International_Shipping-34.png"
    },
]


const currentPageHasEnoughCategories = (numOfCateOnAPage : number,currentPage: number)=>{
    if ((numOfCateOnAPage*(currentPage+1)) <= categoriesArray.length ){return true;}
    return false;
}

const Category = ()=>{
    
    const router = useRouter();
    const [currentPage,updateCurrentPage] = useState(0);
    const [categoryActivated, updateActivated] = useState(false);
    const [loading,updateLoading] = useState(false);

    const numOfCategoiesOnAPage = 10;
    const lastPos = categoriesArray.length - 1;
    const maxPage = (lastPos - (lastPos % numOfCategoiesOnAPage)) / numOfCategoiesOnAPage ;
    

    const leftClickedHandler = (event : React.MouseEvent<HTMLDivElement>)=>{
        event.preventDefault();
        updateLoading(true);
        // we set the value of loading to true so we WILL NOT allow the user to see what is happening
        if (currentPage == 0) {updateCurrentPage(maxPage)}
        else {updateCurrentPage(currentPage-1)}
    }
    const rightClickedHandler = (event : React.MouseEvent<HTMLDivElement>)=>{
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
  

    const redirectToSingleTopicPage = (event : React.MouseEvent<HTMLDivElement>, location : string = "")=>{

        router.push(
            { 
                pathname: `/topic/${location}`,
            }, 
            undefined, 
            { 
                shallow: true 
            }
        )
    }

    const categoriesArrayDisplayed = categoriesArray.map((element,index)=>{
        //console.log('MAP',categoryActivated)
        const satisfiedNumCategory = currentPageHasEnoughCategories(numOfCategoiesOnAPage,currentPage);
        if (satisfiedNumCategory){
            const minPos = numOfCategoiesOnAPage*currentPage;
            const maxPos = numOfCategoiesOnAPage*(currentPage+1) -1;
            if ((index >= minPos)&&(index <= maxPos)){

                return (
                    <SingleCategory  appear={categoryActivated} key={index} onClick={(e)=>{redirectToSingleTopicPage(e,element.name)}}>
                        <ImgContainer imgURL={element.iconURL}>  </ImgContainer>
                        <TextContainer> {element.name}</TextContainer>
                    </SingleCategory>
                )
            }
        }
        else {
            const minPos = numOfCategoiesOnAPage*(currentPage-1)+ (categoriesArray.length % numOfCategoiesOnAPage);
            const maxPos = categoriesArray.length -1;
            if ((index >= minPos)&&(index <= maxPos)){
                return (
                            <SingleCategory appear={categoryActivated} key={index} onClick={(e)=>{redirectToSingleTopicPage(e,element.name)}}>
                                <ImgContainer imgURL={element.iconURL}>  </ImgContainer>
                                <TextContainer> {element.name}</TextContainer>
                            </SingleCategory>

                )
            }
        }   
    })

    const leftButton = '<';
    const rightButton = '>';
    return (
        <CategoryContainer>
            <LeftButton onClick={leftClickedHandler}> {leftButton} </LeftButton>
            <RightButton onClick={rightClickedHandler}> {rightButton} </RightButton>
            <CategoryHeader>CATEGORY</CategoryHeader>
            {!loading && categoriesArrayDisplayed}
        </CategoryContainer>
    )
}

export default Category