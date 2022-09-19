import React, {useState, useEffect} from "react";


function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/22bdq6.jpg"
    })

    const [allMemes, setAllMemes] = useState("")
    
    function getMeme(){
        const randomNum = Math.floor(Math.random()*allMemes.length)
            setMeme(prevMeme => {
                return {
                    ...prevMeme,
                    randomImg: allMemes[randomNum].url
                }
    })
    }

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])


    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="meme-form">

                <input 
                type="text" 
                className="input1"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}/>

                <input 
                type="text" 
                className="input2" 
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}/>

                <button type="submit" onClick={getMeme} className="submit-btn">Get a new meme image</button>
            </div>

            <div className="meme-container">
                <h2 className="top-txt">{meme.topText}</h2>
                <img src={meme.randomImg} id="meme-img" className="meme-img" alt="meme-img"/>
                <h2 className="bottom-txt">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme