import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import food1 from "../assets/images/food1.jpeg";
import food2 from "../assets/images/food2.jpeg";
import food3 from "../assets/images/food3.jpeg";
import food4 from "../assets/images/food4.jpeg";
import food5 from "../assets/images/food5.jpeg";
import food6 from "../assets/images/food6.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const PopularItems = () => {

    const items = [
        { img: food1, title: "Greys Vage", area: "Area", amount: "$4.00" },
        { img: food2, title: "Greys Vage", area: "Area", amount: "$1.00" },
        { img: food3, title: "Greys Vage", area: "Area", amount: "$2.00" },
        { img: food4, title: "Greys Vage", area: "Area", amount: "$4.00" },
        { img: food5, title: "Greys Vage", area: "Area", amount: "$4.00" },
        { img: food6, title: "Greys Vage", area: "Area", amount: "$4.00" },
    ];

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

    return (
        <>
            <section id="popular-items">
                <div className="popular-items-container">
                    <h1 className="popular-items-heading">Popular Items</h1>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        containerclassName="popular-items-carousel"
                    >
                        {items.map((item, index) => (
                            <div key={index} className="popular-item-card">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="popular-item-image"
                                />
                                <div className="popular-item-content">
                                    <h4 className="popular-item-title">{item.title}</h4>
                                    <h4 className="popular-item-area">
                                        {" "}
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className="popular-icon"
                                        />
                                        {item.area}
                                    </h4>
                                    <h4 className="popular-item-amount">{item.amount}</h4>
                                    <button className="popular-item-days">Order Now</button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default PopularItems