import React from 'react';
import Title from '../title/title';
import image from "../../assets/images/RB19 1000x600.webp"

const title = 'React with Webpack and Babel';


function App() {
    return (
        <div>
            <Title text={title}/>
            <img src={image} alt={"RB 19"}/>
        </div>
    );
}

export default App;
