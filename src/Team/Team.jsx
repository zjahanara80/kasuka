import React from "react";
import {
  SectionLabel,
  SectionTitle,
  ImageCreator,
} from "../shared/SharedComponents";
import "./Team.scss";

class IconRender extends React.Component {
  render() {
    return <i className={`${this.props.icon} box-icon`}></i>;
  }
}

//use ref
class BoxCreator extends React.Component {
  constructor(props) {
    super(props);
    this.iconsWrapperRef = React.createRef();
  }

  handleMouseEnter = (event) => {
    if(this.iconsWrapperRef.current) {
        this.iconsWrapperRef.current.style.display = 'flex'
        this.iconsWrapperRef.current.className += ' icons-display-style'
    }
  };
  handleMouseLeave = (event) => {
    if(this.iconsWrapperRef.current) {
        this.iconsWrapperRef.current.style.display = 'none'
    }
  }

  render() {
    return (
      <div className="box">
        <div className="box-img__wrapper" onMouseEnter={this.handleMouseEnter} 
         onMouseLeave={this.handleMouseLeave}>
          <ImageCreator src={this.props.img} className="box-img"></ImageCreator>
          <div className="icons-wrapper" ref={this.iconsWrapperRef} style={{display : 'none'}}>
            <IconRender icon="bi bi-linkedin"></IconRender>
            <IconRender icon="bi bi-facebook"></IconRender>
            <IconRender icon="bi bi-instagram"></IconRender>
            <IconRender icon="bi bi-telegram"></IconRender>
          </div>
        </div>
        <span className="box-name">{this.props.name}</span>
        <span className="box-role">{this.props.role}</span>
      </div>
    );
  }
}

const Team = () => {
  const boxInfos = [
    { name: "والتر وایت", role: "مدیر ارشد اجرایی", img: "/kasuka/imgs/team-1.jpg" },
    { name: "سارا جونسون", role: "مدیر تولید", img: "/kasuka/imgs/team-2.jpg" },
    { name: "ویلیام اندرسون", role: "CTO", img: "/kasuka/imgs/team-3.jpg" },
    { name: "آماندا جپسون", role: "حسابدار", img: "/kasuka/imgs/team-4.jpg" },
  ];
  return (
    <div className="team">
      <SectionLabel>تیم</SectionLabel>
      <SectionTitle>تیم مارا بررسی کنید</SectionTitle>
      <div className="box-wrapper">
        <BoxCreator {...boxInfos[0]}></BoxCreator>
        <BoxCreator {...boxInfos[1]}></BoxCreator>
        <BoxCreator {...boxInfos[2]}></BoxCreator>
        <BoxCreator {...boxInfos[3]}></BoxCreator>
      </div>
    </div>
  );
};

export default Team;
