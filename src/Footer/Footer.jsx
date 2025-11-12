import React from "react";
import "./Footer.scss";
import { ImageCreator } from "../shared/SharedComponents";

const BoxRender = ({ className, children }) => {
  return <div className={`footer-top__box ${className}`}>{children}</div>;
};

const AddressItemRender = ({ children }) => {
  return <span>{children}</span>;
};

const SocialIconsRender = ({ className }) => {
  return <i className={className}></i>;
};

const LinkRender = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

const BoxTitleRender = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

const ListCreator = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export default function Footer() {
  const addressInfos = [
    "اراک، میدان شورا",
    "تلفن : 09389241147",
    "ایمیل : zeynabjahanara80@gmail.com",
  ];
  const socialIcons = [
    "bx bxl-facebook",
    "bx bxl-linkedin",
    "bx bxl-instagram",
    "bx bxl-telegram",
  ];
  const allLinks = ["خانه", "درباره ما", "خدمات", "سیاست حریم خصوصی"];
  const allServices = ["طراحی سایت", "توسعه وب", "طراحی لوگو", "تحقیقات"];

  return (
    <div className="footer">
      <div className="footer-top">
        <BoxRender className={"box-one"}>
          <div className="logo">
            <div className="logo-text">KASUKA</div>
            <ImageCreator src={"/kasuka/imgs/logo.png"} className={"logo-img"} />
          </div>
          <div className="address">
            {addressInfos.map((address) => {
              return <AddressItemRender>{address}</AddressItemRender>;
            })}
          </div>
          <div className="socials">
            {socialIcons.map((icon) => {
              return <SocialIconsRender className={`socials-icon ${icon}`} />;
            })}
          </div>
        </BoxRender>

        <BoxRender className={"box-two"}>
          <BoxTitleRender className={"box-title"}>لینک های مفید</BoxTitleRender>
          <ListCreator className={"box-list box-two__list"}>
            {allLinks.map((link) => {
              return (
                <LinkRender>
                  <i className="bx bx-chevron-left box-list__icon"></i>{link}
                </LinkRender>
              )
            })}
          </ListCreator>
        </BoxRender>

        <BoxRender className={"box-three"}>
          <BoxTitleRender className={"box-title"}>خدمات ما</BoxTitleRender>
          <ListCreator className={"box-list box-three__list"}>
            {allServices.map((link) => {
              return (
                <LinkRender>
                  <i className="bx bx-chevron-left box-list__icon"></i>{link}
                </LinkRender>
              )
            })}
          </ListCreator>
        </BoxRender>

        <BoxRender className={"box-four"}>
          <BoxTitleRender className={"box-title"}>خبرنامه ما</BoxTitleRender>
          <span className="box-four__text">با ما در ارتباط باشید</span>
          <div className="box-four__contact">
            <input type="text" className="box-four__input"/>
            <button className="box-four__btn">ارسال</button>
          </div>
        </BoxRender>
      </div>
      <div className="footer-bottom">
         طراحی شده توسط <span className="developer-name">  زینب جهان آرا </span>
      </div>
    </div>
  );
}
