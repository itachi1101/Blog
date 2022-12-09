import Card from "../../Components/Card/Card";
import './Page2.styles.scss'
export default function Page2(){
    return(
        <div className="page2-container">
            <div className="page2-heading">
                Editor's Choice
            </div>
            <div className="page2-wrapper">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
             
                
            </div>
        </div>
    )
}