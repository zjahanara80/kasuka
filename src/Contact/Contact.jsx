import React from "react";
import { SectionLabel, SectionTitle } from "../shared/SharedComponents";
import './Contact.scss'

const InfoRender = (props) => {
    const {icon , title , text} = props
    console.log(icon);
    
    return (
        <div className="info__wrapper">
            <i className={`${icon} info__wrapper-icon`}></i>
            <div className="info__wrapper-content">
                <span className="info__wrapper-content__title">{title}</span>
                <span className="info__wrapper-content__text">{text}</span>
            </div>
        </div>
    )
}

const InputRender = ({cls , type , placeholder}) => {
  return (
    <input type={type} className={`contact-datails__userContact-${cls}`} placeholder={placeholder}/>
  )
}

export default function Contact() {
    const infos = [
        {icon : "bi bi-geo-alt list_address" , title : "مکان" , text : "ایران، اراک"},
        {icon : "bi bi-envelope list_address" , title : "ایمیل" , text : "zeynabjahanara80@gmail.com"},
        {icon : "bi bi-phone list_address" , title : "تلفن" , text : "09389241147"},
    ]

  return (
    <div className="contact">
      <SectionLabel>تماس با ما</SectionLabel>
      <SectionTitle>با ما تماس بگیرید</SectionTitle>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3097335.9708434367!2d55.01826608346393!3d32.90583456998817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1759491592744!5m2!1sfa!2s"
          width="100%"
          height="100%"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-datails">
        <div className="contact-datails__infos">
            {infos.map(item => {
                return (
                    <InfoRender {...item}></InfoRender>
                )
            })}
        </div>
        <div className="contact-datails__userContact">
            <InputRender type="text" cls="name"  placeholder="نام"/>
            <InputRender type="text" cls="email" placeholder="ایمیل"/>
            <InputRender type="text" cls="subject" placeholder="عنوان"/>
            <textarea className="contact-datails__userContact-message" placeholder="پیام"></textarea>
            <div className="contact-datails__userContact-btn__wrapper">
             <button className="contact-datails__userContact-btn">ارسال پیام</button>
            </div>
        </div>
      </div>
    </div>
  );
}
