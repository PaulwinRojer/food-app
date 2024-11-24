import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
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
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FeaturedRestaurants = () => {

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

  return (
    <>
      <section id="restaurants">
        <div className="restaurant-container">
          <h1 className="restaurant-title">Featured Restaurants</h1>
          <div className="restaurant-grid">
            {restaurants.map((restaurant, index) => (
              <div className="restaurant-card" key={index}>
                <img
                  src={restaurant.img}
                  alt={restaurant.dish}
                  className="restaurant-image"
                />
                {/* <button className="restaurant-discount">{restaurant.discount}</button> */}
                <div className="restaurant-info">
                  <img
                    src={restaurant.logo}
                    alt="Logo"
                    className="restaurant-logo"
                  />
                  <div>
                    <h1 className="restaurant-name">{restaurant.name}</h1>
                    <p
                      className="restaurant-rating"
                      style={{ color: "rgba(246, 174, 14, 255)" }}
                    >
                      <FontAwesomeIcon icon={faStar} /> {restaurant.rating}
                    </p>
                  </div>
                </div>
                {/* <h4 className="restaurant-dish">{restaurant.dish}</h4> */}
                <button className="restaurant-status">
                  {restaurant.status}
                </button>
              </div>
            ))}
          </div>
          <div className="button-view">
            <button>View All</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedRestaurants