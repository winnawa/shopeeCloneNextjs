import React, { createContext, useContext, useState } from "react"


const tempFunctionForNum: React.Dispatch<React.SetStateAction<number>> = ()=>{}
const tempFunctionForBool: React.Dispatch<React.SetStateAction<boolean>> = ()=>{}
const  NotiContext = createContext({    numOfNewNoti :  0, 
                                        updateNumOfNewNoti :tempFunctionForNum,
                                        hadNewNoti : false ,
                                        updateHadNewNoti : tempFunctionForBool
                                    });
export const useNotification = ()=>useContext(NotiContext) 
type PropsType={
    children  : React.ReactNode
}
const  NotiContextComponent= (props : PropsType)=>{

    const [numOfNewNoti, updateNumOfNewNoti] = useState(0);
    const [hadNewNoti, updateHadNewNoti] = useState(false);

    return(
        <NotiContext.Provider value={{numOfNewNoti , updateNumOfNewNoti, hadNewNoti , updateHadNewNoti}}>
            {props.children}
        </NotiContext.Provider>
    )

}
export default NotiContextComponent