import { useState } from "react";
import "./BackgroundMusic.css";
import Music from "../../Utils/Audio/PinkFloyd-BrainDamage.mp3";
import UnmutedIcon from "../../Utils/Image/volumemax-svgrepo-com.svg";
import MutedIcon from "../../Utils/Image/mute-svgrepo-com.svg";

const BackgroundMusic = () => {
    const [muted, setMuted] = useState(false);

    const toggleMute = () => setMuted(!muted);

    return (
        <div>
            <audio src={Music} autoPlay loop muted={muted}></audio>
            <button className="music-button" onClick={toggleMute}>
                {muted ? 
                    <img src={UnmutedIcon} alt="Unmute" width="30px" />
                : 
                    <img src={MutedIcon} alt="Mute" width="50px" />
                }
                {/* {muted ? "Unmute" : "Mute"} */}
            </button>
        </div>
    )
}

export default BackgroundMusic;