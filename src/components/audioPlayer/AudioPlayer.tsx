import { useEffect, useRef, useState } from "react";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconRewindBackward10,
  IconRewindForward10,
  IconVolume,
  IconVolume2,
  IconVolumeOff,
} from "@tabler/icons-react";
import { Text } from "../ui/text/Text";

export const AudioPlayer = ({ audio, title, singer }: any) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(50);
  const [playedDuration, setPlayedDuration] = useState<number>(0);

  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(true);
    setPlayedDuration(0);
    play();
  }, [audio]);

  useEffect(() => {
    setTotalDuration(ref.current?.duration ?? 0);
    ref.current?.addEventListener("timeupdate", () => {
      setPlayedDuration(ref.current?.currentTime ?? 0);
    });
  }, [ref]);

  useEffect(() => {
    if (ref?.current) {
      ref.current.volume = volume / 100;
    }
  }, [volume]);

  const play = () => {
    ref?.current?.play();
    setIsPlaying(true);
  };

  const stop = () => {
    ref?.current?.pause();
    setIsPlaying(false);
  };

  const rewindBackward = () => {
    if (ref?.current) {
      if (playedDuration > 10) {
        ref.current.currentTime -= 10;
      } else {
        ref.current.currentTime = 0;
      }
    }
  };

  const rewindForward = () => {
    if (ref?.current) {
      if (totalDuration - playedDuration < 10) {
        ref.current.currentTime = totalDuration;
      } else {
        ref.current.currentTime += 10;
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div style={{ width: "100%", height: "2px", backgroundColor: "gray" }}>
        <div
          style={{
            width: `${(playedDuration / totalDuration) * 100}%`,
            height: "100%",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <audio
        ref={ref}
        controls
        src={audio}
        style={{ visibility: "hidden", display: "none" }}
      ></audio>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <IconRewindBackward10
            style={{ cursor: "pointer" }}
            onClick={rewindBackward}
          />
          {!isPlaying && (
            <IconPlayerPlay
              style={{ cursor: "pointer", margin: "0 20px" }}
              onClick={play}
            />
          )}
          {isPlaying && (
            <IconPlayerPause
              style={{ cursor: "pointer", margin: "0 20px" }}
              onClick={stop}
            />
          )}
          <IconRewindForward10
            style={{ cursor: "pointer" }}
            onClick={rewindForward}
          />
        </div>
        <div>
          <Text text={title} size="md" />
          <Text text={singer} size="md" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {volume === 0 && <IconVolumeOff />}
          {volume > 0 && volume <= 60 && <IconVolume2 />}
          {volume > 60 && <IconVolume />}
          <input
            type="range"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
