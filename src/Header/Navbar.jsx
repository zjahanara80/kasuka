import React from 'react'
import './Navbar.scss'

function NavItem({label}){
    return <li className='header-top__item list-item'>{label}</li>
}

export default function Navbar() {
  const navItems = [
    'خانه',
    'لیست',
    'خدمات',
    'نمونه کار',
    'تیم',
    'تماس'
  ];

  return(
    <ul className="header-top__navbar list">
     {navItems.map((item , index) => (
        item && item !== ''? 
         <NavItem key={index} label={item}></NavItem> 
        : ''
     ))}
    </ul>
  );
}
