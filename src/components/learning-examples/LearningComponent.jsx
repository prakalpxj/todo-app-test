import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import {FifthComponent} from "./FirstComponent";
import LearningJavascript from "./LearningJavascript";

export default function LearningComponent(){
    return (
        <>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent/>
            <FifthComponent/>
            <LearningJavascript></LearningJavascript>
        </>

    )
}