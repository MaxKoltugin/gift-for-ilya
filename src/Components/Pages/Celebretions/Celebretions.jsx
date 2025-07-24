import "./celebretions.css";
import MusicButton from "../../MusicButton/MusicButton";
import CelebrationCards from "../CelebrationCard/CelebrationCards";

const Celebretions = () => {
  return (
    <div className="celebretions-wrapper">
      <div className="music-wrapper">
        <MusicButton />
      </div>
      <div className="main-celebretion">
        <div className="image-wrapper">
          <img
            alt="celebretion-img"
            src="/birthday-image.png"
            className="celebration-img"
          />
        </div>
        <div className="text-celebration-wrapper">
          <p className="title-celebration">
            <strong>Поздравление 🎂</strong>
          </p>
          <p className="text-celebration">
            Дорогой деда Илья, поздравляю с днём рождения! <br /> Пусть каждый
            твой день будет наполнен радостью, а здоровье будет крепким. Спасибо
            тебе за твою заботу. Желаю, чтобы все твои желания исполнялись, а в
            доме всегда царили тепло и счастье. 💖
            <br />
            <br /> <strong>Максим</strong>
          </p>
        </div>
      </div>
      <CelebrationCards />
    </div>
  );
};

export default Celebretions;
