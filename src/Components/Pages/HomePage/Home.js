import react from "react";
import HomePage from "../HomePage";
import {homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from '../HomePage/Data';


function Home() {
    return (
        <>
            <HomePage {...homeObjOne} />
            <HomePage {...homeObjTwo} />
            <HomePage {...homeObjThree} />
            <HomePage {...homeObjFour} />
        </>
    )
}

export default Home