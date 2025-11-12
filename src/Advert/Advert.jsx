import React , {Component} from "react";
import './Advert.scss';

//class component use
class AdvertItem extends Component {
    render() {
        return (
            <li className="advert-left__item">
                <i className={`${this.props.icon} advert-left__item-icon`}></i>
                <div className="advert-left__item-txt">
                    <span className="advert-left__item-txt-title">{this.props.title}</span>
                    <span className="advert-left__item-txt-text">{this.props.text}</span>
                </div>
            </li>
        )
    }
}

class Advert extends Component {
    render (){
      const adverts = [
        {icon : 'bx bx-receipt',title : 'تبلیغ سختی است' , text : "نتایج هر یک در اهداف اشتغال حاصل میشود"},
        {icon : 'bx bx-cube-alt',title : 'کدام یکی از اینهاست' , text : "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"},
        {icon : 'bx bx-images',title : 'یا کور شده است' , text : "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"},
        {icon : 'bx bx-shield',title : 'حقیقت مبارک' , text : "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"},
      ]
    return (
        <div className="advert">
            <img src="/kasuka/imgs/features.jpg" alt="" className="advert-right"/>
            <ul className="advert-left">
                {
                    adverts.map(adv => {
                        return (
                            <AdvertItem icon={adv.icon} title={adv.title} text={adv.text} />
                        )
                    })
                }
            </ul>
        </div>
    )
  }
}

export default Advert