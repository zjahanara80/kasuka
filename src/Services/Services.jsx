import React from "react";
import {SectionLabel , SectionTitle} from "./../shared/SharedComponents";
import './Services.scss'

class IconRender extends React.Component {
  render() {
    console.log(this.props);
    return <i className={`${this.props.icon} services-box__icon`} alt="icon"></i>;
  }
}

const BoxCreator = (props) => {
  console.log(props);
  const { icon, title, text} = props;
  return (
    <div className="services-box">
      <IconRender icon={icon} />
      <span className="services-box__title"> {title} </span>
      <p className="services-box__text"> {text} </p>
    </div>
  );
};

const Services = () => {
  const boxInfos = [
    { icon : 'bx bx-tachometer' , title : "درد های بزرگ" , text : "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
    {icon : 'bx bx-file' , title : "اما همانطور که مشاهده می کنید" , text : "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
    {icon : 'bx bxl-dribbble' , title : "لورم اپیسوم" , text : "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"},
  ];

  return (
    <div className="services">
      <SectionLabel className={"services-mark"}>خدمات</SectionLabel>
      <SectionTitle className={"services-title"}> خدمات ما را بررسی کنید</SectionTitle>
      <div className="services-boxs">
        {boxInfos.map((item , index) => (
        <BoxCreator {...item} key={index}/>
        ))}
      </div>
    </div>
  );
};

BoxCreator.defaultProps = {
    icon : 'bx error',
    title : "ست نشده",
    text : "ست نشده",
}

export default Services