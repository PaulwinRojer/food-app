import React from "react";
import "../../styles/Home.css"; 
import Banner from "../../sections/Banner";
import Products from "../../sections/Products";
import Howitworks from "../../sections/Howitworks";
import PopularItems from "../../sections/PopularItems";
import FeaturedRestaurants from "../../sections/FeaturedRestaurants";
import SearchFoods from "../../sections/SearchFoods";
import InstallApp from "../../sections/InstallApp";
import SpecialMenu from "../../sections/SpecialMenu";
import ReadyToOrder from "../../sections/ReadyToOrder";
const Home = () => { 
  return (
    <>
      <Banner />
      <Products />
      <Howitworks />
      <PopularItems />
      <FeaturedRestaurants />
      <SearchFoods />
      <InstallApp />
      <SpecialMenu />
      <ReadyToOrder /> 
    </>
  );
};

export default Home;
