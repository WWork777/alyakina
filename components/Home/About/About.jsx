import Image from "next/image";
import './About.scss'

export default function About() {
  return (
    <>
      <div className="home-block about">
        <Image src={'/Home/фото.webp'} alt="София Алякина, основатель студии архитектуры и дизайна" width={400} height={700}/>

        <div className="about-text">
            <h2>МЫ - БЮРО<br></br>
                АРХИТЕКТУРЫ И&nbsp;ДИЗАЙНА<br></br>
                <span>СОФИИ АЛЯКИНОЙ</span>
            </h2>
            <Image src={'/Home/фото.webp'} alt="София Алякина, основатель студии архитектуры и дизайна" width={400} height={700}/>
            <p>Добро пожаловать в мир архитектуры и&nbsp;дизайна, где каждый проект рождается из&nbsp;ваших идей и&nbsp;наших профессиональных решений.</p>
            <p>Мы создаём пространства, которые становятся отражением вашей индивидуальности, источником вдохновения и комфорта. 
            Наша&nbsp;задача&nbsp;—&nbsp;воплощать ваши мечты в&nbsp;проектах, которые гармонично соединяют стиль, функциональность и&nbsp;уют.</p>
            <div className="advantage-block">
                <div className="advantage">
                    <span>10+</span>
                    <div className="advantage-line"></div>
                    <p>лет опыт<br></br>сотрудников</p>
                </div>
                <div className="advantage">
                    <span>55+</span>
                    <div className="advantage-line"></div>
                    <p>архитектурных<br></br>проектов домов</p>
                </div>
                <div className="advantage">
                    <span>90+</span>
                    <div className="advantage-line"></div>
                    <p>уникальных<br></br>интерьеров создано</p>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}
