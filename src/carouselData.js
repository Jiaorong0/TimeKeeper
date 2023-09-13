import Containers from "./components/Containers";
import FirstContainer from "./components/FirstContainer";
import shockedImage from "./images/shocked.png"
import happyImage from "./images/happyrem.png"




export default [
    <FirstContainer />, //first contsiner
    <Containers                                   // second container
        title="Let's see how many hours do you waste today!"
        img={shockedImage}
        content="My god! I am killing my time again 😭"  
        data = {[{service : "SocialMedia", time: 12}, {service: "Work", time: 6}, {service:"Sleep",time:3},{service:"Other",time:2.5},{service:"Study",time:0}]} 
            />,
    <Containers                                // third container
        title="Another productive day again!"
        img={happyImage}
        content="Oh, yeah! 🔥"  
        data = {[{service : "SocialMedia", time: 1}, {service: "Work", time: 6}, {service:"Sleep",time:7},{service:"Other",time:0},{service:"Study",time:6}]} 
    />

]

