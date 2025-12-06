import Image from "next/image";
import Link from "next/link";
import "./hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <video
          className="hero-video"
          preload="auto"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/Home/video.webm" type="video/webm" />
          <source src="/Home/video.MP4" type="video/mp4" />
          Ваш браузер не поддерживает данное видео
        </video>
        <div className="hero-content">
          <div className="slogan">
            <div className="slogan-top">
              <p>Создание</p>
              <h1>
                Индивидуальное проектирование домов и&nbsp;интерьеров
                в&nbsp;Москве
              </h1>
            </div>
            <div className="slogan-bottom">
              <p>Комфорта</p>
              <span>Тепло, стиль и&nbsp;гармония в&nbsp;каждом проекте</span>
            </div>
          </div>
          {/* <button
            type="button"
            data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            href="tel:+79782868717"
          >
            Обсудить проект
          </button> */}
          <Link 
            className="linkhero"
            href="tel:+79782868717">
            Обсудить проект
          </Link>
        </div>
      </div>
    </>
  );
}
