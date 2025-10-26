import './Header.scss';
import React from 'react';
import Navbar from './Navbar';
import OptionBox from './OptionBox';
import { ImageCreator } from '../shared/SharedComponents';

export default function Header() {
  return (
    <header className='header'>
        <div className='header-top'>
            <div className='header-top__logo'>
                <ImageCreator src="/imgs/logo.png" className='header-top__logo-img'/>
                <span className='header-top__logo-text'>KASUKA</span>
            </div>
            <Navbar />
            <button className="header-top__btn">
                شروع
            </button>
        </div>

        <div className="header-center">
          <p className='header-center__p'>
            راه حل های قدرتمند
            <br/> دیجیتال با 
            <br/>
            <span className='header-center__p-colored'>kasuka</span>
          </p>
          <span className='header-center-desc'>
            ما تیمی از بازاریابان با استعداد دیجیتال هستیم
          </span>
        </div>

        <OptionBox />
    </header>
  )
}
