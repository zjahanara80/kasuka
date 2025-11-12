import React from "react";
import { ImageCreator , SectionTitle} from "./../shared/SharedComponents";
import "./Counts.scss";

function CountBox (props) {
    return (
        <div className="count-left__counts-box">
            <div className="count-left__counts-box__title">
                <i className={`${props.icon} count-left__counts-box__title-icon`}></i>
                <SectionTitle className="count-left__counts-box__title-number">{props.count}</SectionTitle>
            </div>
            <p className="count-left__counts-box__text">
             {props.text}
            </p>
        </div>
    )
}

export default function Counts() {
  const countsData = [
    {
      icon: "bi bi-emoji-smile",
      count: "۵۷",
      text: "مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.",
    },
    {
      icon: "bi bi-journal-richtext",
      count: "۵۷",
      text: "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد",
    },
    {
      icon: "bi bi-clock",
      count: "۸۹",
      text: "سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد",
    },
    {
      icon: "bi bi-award",
      count: "۲۶",
      text: "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند",
    },

  ];
  return (
    <section className="count">
      <ImageCreator
        className="count-img"
        alt="count-image"
        src="/kasuka/imgs/counts-img.jpg"
      />
      <div className="count-left">
      <SectionTitle className="count-left__title">
        شایسته ترین لذت را به هر حال ارائه می دهد
      </SectionTitle>
      <p className="count-left__text">
        خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
      </p>
      <div className="count-left__counts">
        {countsData.map(data => (
           <CountBox {...data}></CountBox> 
        ))}
      </div>
      </div>
    </section>
  );
}
