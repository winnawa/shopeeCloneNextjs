import React from "react"
import styles from "./SymbolIcon.module.css"
import logoImg from "../../../public/logoImg.png"
import { useRouter } from "next/router"
const SymbolIcon = ()=>{
    const router= useRouter();

    const goToHome = (event : React.MouseEvent<HTMLDivElement>)=>{
        router.push("/home");
    }

    return (
        <div className={styles.container}>
            <div className={styles.symbol}> </div>
            <div style={{paddingLeft : "0.8rem",width:"25%",height:"100%", display:"flex", flexDirection:"column", flexWrap:"wrap",justifyContent:"center"}}>
                <div className={styles.word} onClick={goToHome}> ART </div>
                <div className={styles.word} onClick={goToHome}> GALLERY </div>
            </div>
        </div>
    )
}
export default SymbolIcon