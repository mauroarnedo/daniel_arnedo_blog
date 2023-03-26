import { useState } from "react";
import "./BackgroundMusic.css";
import Music from "../../Utils/Audio/PinkFloyd-BrainDamage.mp3";
import UnmutedIcon from "../../Utils/Image/volumemax-svgrepo-com.svg";
import MutedIcon from "../../Utils/Image/mute-svgrepo-com.svg";

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying)

        const audioElement = document.getElementById("audio");

        if (!isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause()
        }
    };

    return (
        <div>
            <audio src={Music} id="audio" loop></audio>
            <button className="music-button" onClick={togglePlay}>
                {isPlaying ? 
                    <img className="unmuted" src={UnmutedIcon} alt="Pause" />
                : 
                    <img className="muted" src={MutedIcon} alt="Play" />
                }
            </button>
        </div>
    )
}

export default BackgroundMusic;