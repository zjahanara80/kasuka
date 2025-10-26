import React from "react";
import "./OptionBox.scss";

function GetOptionsItem ({icon, label}) {
  return (  
    <li className="header-bottom__item option-item">
      <i className={`${icon} header-bottom__icon option-item__icon`}></i>
      <span className="icon header-bottom__label option-item__label">
        {label}
       </span>
    </li>
  );
};

export default function OptionBox() {
  const optionLists = [
   {icon : 'ri-database-2-line' , label : 'اطلاعات ذخیره شده'},
   {icon : 'ri-paint-brush-line' , label : 'عملکرد های پایانی'},
   {icon : 'ri-calendar-todo-line' , label : 'نمونه کارها'},
   {icon : 'ri-calendar-todo-line' , label : 'نمودار کیفی'},
   {icon : 'ri-store-line' , label : 'متن نمایشی'}
  ];

  return (
   <ul className="header-bottom option">
    {
      optionLists.map(item => (
        <GetOptionsItem label={item.label} icon={item.icon}></GetOptionsItem>
      ))
    }
  </ul>)
}
