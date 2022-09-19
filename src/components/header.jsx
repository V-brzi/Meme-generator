import React from "react";

function Header() {
    return (
        <header>
            <img src="https://th.bing.com/th/id/OIP.h0fNsIDqht_R54CjV5jpvwAAAA?pid=ImgDet&rs=1" alt="meme-icon" className="meme-icon"/>
            <h1 className="header-title">Meme Generator</h1>
            <p className="header-txt">
                You <span className="meme-it">see</span> it you <span className="meme-it">meme</span> it
            </p>
        </header>
    )
}

export default Header