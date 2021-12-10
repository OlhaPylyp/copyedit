import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./clients.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./notebook.jpeg";
import img2 from "./meduza.jpg";

// export default class DemoCarousel extends Component {
//   render() {
//     return (
//       <Carousel>
//         <img src={img1} alt="book" />
//         <img src={img2} alt="book" />
//         <div>
//           {" "}
//           <img src={img2} alt="book" />
//         </div>
//         <div>
//           <img src={img1} alt="book" />
//         </div>
//       </Carousel>
//     );
//   }
// }
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className={styles.img} src={img2} alt="gfg" />
          </div>
          <div>
            <img className={styles.img} src={img2} alt="gfg" />
          </div>
          <div>
            <img className={styles.img} src={img2} alt="gfg" />
          </div>
          <div>
            <img className={styles.img} src={img2} alt="gfg" />
          </div>
          <div>
            <img className={styles.img} src={img2} alt="gfg" />
          </div>
        </Slider>
      </div>
    );
  }
}
