import React from 'react'
import Carousel from 'react-multi-carousel'
import food1 from "../assets/images/food1.jpeg";
import food2 from "../assets/images/food2.jpeg";
import food3 from "../assets/images/food3.jpeg";
import food4 from "../assets/images/food4.jpeg";
import food5 from "../assets/images/food5.jpeg";
import food6 from "../assets/images/food6.jpeg";
import food7 from "../assets/images/food7.jpeg";
import food8 from "../assets/images/food8.jpeg";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.avif";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.avif";
import logo5 from "../assets/images/logo5.avif";
import logo6 from "../assets/images/logo6.png";
import logo8 from "../assets/images/logo8.jpg";
import logo9 from "../assets/images/logo9.avif";

const SearchFoods = () => {

    const restaurants = [
        {
            img: food1,
            discount: "10% off",
            logo: logo2,
            name: "Foodworld",
            rating: 48,
            dish: "Greys Vage",
            status: "Opens Tomorrow",
        },
        {
            img: food2,
            discount: "15% off",
            logo: logo3,
            name: "Foodhub",
            rating: 35,
            dish: "Spicy Delight",
            status: "8 Days Remaining",
        },
        {
            img: food3,
            discount: "25% off",
            logo: logo4,
            name: "Eatopia",
            rating: 60,
            dish: "Tangy Treat",
            status: "7 Days Remaining",
        },
        {
            img: food4,
            discount: "20% off",
            logo: logo5,
            name: "Taste Haven",
            rating: 50,
            dish: "Sizzler Special",
            status: "8 Days Remaining",
        },
        {
            img: food5,
            discount: "20% off",
            logo: logo6,
            name: "Taste Haven",
            rating: 50,
            dish: "Sizzler Special",
            status: "8 Days Remaining",
        },
        {
            img: food6,
            discount: "20% off",
            logo: logo,
            name: "Taste Haven",
            rating: 50,
            dish: "Sizzler Special",
            status: "8 Days Remaining",
        },
        {
            img: food7,
            discount: "20% off",
            logo: logo8,
            name: "Taste Haven",
            rating: 50,
            dish: "Sizzler Special",
            status: "8 Days Remaining",
        },
        {
            img: food8,
            discount: "20% off",
            logo: logo9,
            name: "Taste Haven",
            rating: 50,
            dish: "Sizzler Special",
            status: "8 Days Remaining",
        },
        // Add more restaurants here
    ];

    const responsive_circle = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
      
      const CustomLeftArrow = ({ onClick }) => (
        <button className="custom-arrow left-arrow" onClick={onClick}>
          &#10094;
        </button>
      );
    
      const CustomRightArrow = ({ onClick }) => (
        <button className="custom-arrow right-arrow" onClick={onClick}>
          &#10095;
        </button>
      );
      
    return (
        <>
            <section id="search-by-food">
                <div className="search-by-food-container">
                    <h1 className="search-by-food-title">Search by Food</h1>
                    <Carousel
                        responsive={responsive_circle}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all 0.5s"
                        transitionDuration={500}
                        containerclassName="carousel-container"
                        itemclassName="carousel-item"
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                    >
                        {restaurants.map((food, index) => (
                            <div className="food-item" key={index}>
                                <img src={food.img} alt={food.name} className="food-image" />
                                <h5 className="food-name">{food.name}</h5>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default SearchFoods