import "./footer.css";

const Footer = () => {
  const handleShareW = () => {
    window.open(
      "whatsapp://send?text=Подарок на мой день рождения! 🎉%0Ahttp://192.168.0.21:3000/"
    );
  };
  const handleShareTg = () => {
    window.open(
      "https://t.me/share/url?url=http://192.168.0.21:3000/&text=Подарок на мой день рождения! 🎉"
    );
  };

  return (
    <div className="footer">
      <div className="footer-logo-wrapper">
        <img className="footer-logo" src={"/logo-big.png"} alt="" />
      </div>
      <div className="author-wrapper">
        <p className="page-author">
          <span>Подготовил и создал</span> <strong>Кольтюгин Максим</strong>
        </p>
      </div>
      <div className="date-wrapper">
        <p className="date">
          <strong>06.07.25</strong>
        </p>
      </div>
      <div className="share-wrapper">
        <p className="share-text">Поделиться:</p>
        <div className="share-buttons">
          <button
            className="wpbtn"
            title="share to whatsapp"
            onClick={handleShareW}
          >
            <img className="wp" src="/w.svg" alt="" />
          </button>
          <button
            className="wpbtn"
            title="share to telegram"
            onClick={handleShareTg}
          >
            <img className="tg" src="tg.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
