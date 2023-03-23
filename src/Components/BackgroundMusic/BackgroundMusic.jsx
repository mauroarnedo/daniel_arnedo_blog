import { useState } from "react";
import "./BackgroundMusic.css";

const BackgroundMusic = () => {
    const [muted, setMuted] = useState(false);

    const toggleMute = () => setMuted(!muted);

    return (
        <div>
            <audio src="src\Utils\Audio\PinkFloyd-BrainDamage.mp3" autoPlay loop muted={muted}></audio>
            <button className="music-button" onClick={toggleMute}>
                {muted ? 
                    <img src="src\Utils\Image\volumemax-svgrepo-com.svg" alt="Unmute" width="30px" />
                : 
                    <img src="src\Utils\Image\mute-svgrepo-com.svg" alt="Mute" width="50px" />
                }
                {/* {muted ? "Unmute" : "Mute"} */}
            </button>
        </div>
    )
}

export default BackgroundMusic;