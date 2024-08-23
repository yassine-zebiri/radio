import PlayImg from "../assets/play.svg";
import NextImg from "../assets/forward.svg";
import BackImg from "../assets/backward.svg";
import PauseImg from "../assets/pause.svg";
import towerBroadcastImg from "../assets/tower-broadcast.svg";
import "./style.css";
import { useEffect, useRef, useState } from "react";

interface Radio {
    id: number;
    name: string;
    pic: string;
    src: string;
}

function RadioPage({ id }: { id: number | undefined }) {
    const [index, SetIndex] = useState<number | undefined>(undefined);
    const [isPlayed, SetIsPlayed] = useState<boolean>(true);
    const [radio, SetRadio] = useState<Radio | undefined>(undefined);
    const [radios, SetRadios] = useState<Radio[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        fetch("/radio/radio.json")
            .then(res => res.json())
            .then(res => {
                if (res.length > 0 && id !== undefined) {
                    const result = res.filter((e: Radio) => e.id == id);
                    SetRadios(res);
                    SetRadio(result[0]);
                    SetIndex(res.findIndex((e: Radio) => e.id == id));
                }
            })
            .catch(error => console.error("Error loading radio data:", error));
    }, [id]);

    useEffect(() => {
        if (index !== undefined && radios[index]) {
           SetRadio(radios[index]);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = radios[index].src;
                audioRef.current.load();

                // انتظار تحميل الصوت بالكامل قبل تشغيله
                audioRef.current.oncanplaythrough = () => {
                    audioRef.current?.play();
                    SetIsPlayed(false); // تحديث حالة التشغيل
                };
            } 
        }
    }, [index, radios]);

    const play = () => {
        if (audioRef.current) {
            if (isPlayed) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            SetIsPlayed(!isPlayed);
        }
    };

    const NextRadio = () => {
        if (index !== undefined && radios.length > 0) {
            SetIndex((index + 1) % radios.length);
           
        }
    };

    const BackRadio = () => {
        if (index !== undefined && index > 0) {
            SetIndex(index - 1);
        }
    };

    return (
        <div id="radioPage">
            <div className="main-pic">
                <img src={radio?.pic} alt="" />
            </div>
            <div className="title">
                <h1>{radio?.name}</h1>
            </div>
            <div id="icons">
                <img src={NextImg} onClick={NextRadio} alt="Next" />
                <img src={isPlayed ? PlayImg : PauseImg} onClick={play} alt="Play/Pause" />
                <img src={BackImg} onClick={BackRadio} alt="Back" />

            </div>
            <div>
                <audio ref={audioRef} src={radio?.src} />
            </div>
            <div id="wave" className={`${!isPlayed ? "wave-animation" : ""}`}>
                <img src={towerBroadcastImg} alt="Broadcast" />
            </div>
        </div>
    );
}

export default RadioPage;
