import { useState } from "react";
import { SectionLabel, SectionTitle } from "./../shared/SharedComponents";
import "./Portfolio.scss";

const MenuCreator = ({ className, title, onClick }) => {
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
};

const ImageCreator = ({ src }) => {

  return (
    <div className="imgWrapper">
     <img src={src} alt="image" className="Images-item" />
     <div className="overlay"></div>
    </div>
  );
};
const Portfolio = () => {
  const portfolioInfos = [
    {
      title: "همه",
      images: [
        "/kasuka/imgs/portfolio-1.jpg",
        "/kasuka/imgs/portfolio-2.jpg",
        "/kasuka/imgs/portfolio-3.jpg",
        "/kasuka/imgs/portfolio-4.jpg",
        "/kasuka/imgs/portfolio-5.jpg",
        "/kasuka/imgs/portfolio-6.jpg",
        "/kasuka/imgs/portfolio-7.jpg ",
        "/kasuka/imgs/portfolio-8.jpg",
        "/kasuka/imgs/portfolio-9.jpg",
      ],
    },
    {
      title: "برنامه",
      images: [
        "/kasuka/imgs/portfolio-1.jpg",
        "/kasuka/imgs/portfolio-2.jpg",
        "/kasuka/imgs/portfolio-3.jpg",
      ],
    },
    {
      title: "محصول",
      images: [
        "/kasuka/imgs/portfolio-4.jpg",
        "/kasuka/imgs/portfolio-5.jpg",
        "/kasuka/imgs/portfolio-6.jpg",
      ],
    },
    {
      title: "اینترنت",
      images: [
        "/kasuka/imgs/portfolio-7.jpg",
        "/kasuka/imgs/portfolio-8.jpg",
        "/kasuka/imgs/portfolio-9.jpg",
      ],
    },
  ];

  //برای تغییر عکس ها
  const [activeImages, setActiveImages] = useState(portfolioInfos[0].images);

  //برای گرفتن کلاس هر منو
  const [activeMenu, setActiveMenu] = useState(portfolioInfos[0].title);

  return (
    <div className="portfolio">
      <SectionLabel className={"portfolio-label"}>نمونه کارها</SectionLabel>
      <SectionTitle className={"portfolio-title"}>
        نمونه کار های ما را بررسی کنید
      </SectionTitle>

      <ul className="portfolio-menu">
        {portfolioInfos.map((item, index) => {
          return (
            <MenuCreator
              className={`portfolio-menu__item ${
                activeMenu === item.title ? "active-menu" : ""
              }`}
              title={item.title}
              key={index}
              onClick={() => {
                setActiveImages(item.images);
                setActiveMenu(item.title);
              }}
            />
          );
        })}
      </ul>

      <div className="portfolio-images">
        {activeImages.map((img, index) => {
          return <ImageCreator key={index} src={img} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
