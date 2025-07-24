import { useRef, useState } from "react";
import "./celebrationCards.css";

const CelebrationCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [pausedIndex, setPausedIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoActive = (index) => {
    const video = videoRefs.current[index];
    setActiveIndex(index);
    if (video) {
      if (!video.paused) {
        video.pause();
        setActiveIndex(null);
      } else {
        video.play();
        setPausedIndex(null);
      }
    }

    videoList.forEach((_, i) => {
      if (i !== index && videoRefs.current[i]) {
        videoRefs.current[i].pause();
        videoRefs.current[i].currentTime = 0;
      }
    });
  };

  const handleVideoEnded = (index) => {
    const video = videoRefs.current[index];
    setActiveIndex(null);
    setPausedIndex(null);
    video.currentTime = 0;
  };

  const videoList = [
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
    "/celebration-video1.mp4",
  ];

  return (
    <div className="cards-list-wrapper">
      <ul className="card-list">
        {videoList.map((src, i) => (
          <li
            className={`card ${activeIndex === i ? "active" : ""} ${
              pausedIndex === i ? "paused" : ""
            }`}
            key={i}
          >
            <div className="video-wrapper">
              <video
                className="card-video"
                src={src}
                ref={(el) => (videoRefs.current[i] = el)}
                onClick={() => handleVideoActive(i)}
                onEnded={() => handleVideoEnded(i)}
                controls={false}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CelebrationCards;
