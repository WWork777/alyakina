import Image from "next/image";
import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Projects from "../../components/Home/Projects/Projects";
import Services from "../../components/Home/Services/Services";
import Blog from "../../components/Home/Blog/Blog";
import Advantages from "../../components/Home/Advantages/Advantages";
import Form from "../../components/Home/Form/Form";

export const metadata = {
  title: "Дизайн интерьера в Москве",
  description:
    "Дизайн интерьера в Москве — эксклюзивные проекты домов и квартир. Авторский надзор, индивидуальный подход, полный цикл работ. Создаем стильные и функциональные интерьеры под ключ. Закажите консультацию!",
  alternates: {
    canonical: "https://alyakina.ru",
  },
  keywords: [
    "архитектура",
    "ремонт квартиры",
    "архитектурные решения",
    "дизайн интерьеров",
    "интерьер дома",
    "интерьер квартиры",
    "уникальный дизайн интерьера",
    "архитектурные проекты под ключ",
    "дизайн дома",
    "дизайн офиса",
    "дизайн помещений",
    "авторский надзор",
    "архитектурное проектирование",
    "современные интерьеры",
    "эксклюзивные интерьеры",
    "услуги дизайнера интерьеров",
    "услуги архитектора",
    "проектирование домов",
    "авторский надзор",
    "загородные дома",
    "дизайн студия",
  ],
  openGraph: {
    title: "Дизайн интерьера и проектирование загородных домов в Москве",
    description:
      "Создаем уникальные проекты домов и интерьеров. Авторский надзор и индивидуальный подход. Узнайте больше!",
    url: `https://alyakina.ru`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: "Студия Софии Алякиной",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <h1 style={{ display: "none" }}>ремонт квартир</h1>
      <h1 style={{ display: "none" }}>ремонт квартиры</h1>
      <h1 style={{ display: "none" }}>проект дома</h1>
      <About />
      <Projects />
      <Services />
      <Advantages />
      <Blog />
      {/* <Form /> */}
    </>
  );
}
