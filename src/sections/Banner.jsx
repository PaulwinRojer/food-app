import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck,faBagShopping,faLocationDot,faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import food_1 from "../assets/images/food_1.png";

const Banner = () => {
    return (
        <>
            <section id="banner">
                <div className="banner-content">
                    <div className="text-section">
                        <h1>Are You Starving?</h1>
                        <h3>
                            Your favorite food is just a click away! Enjoy amazing meals from
                            local restaurants.
                        </h3>
                        <div className="pickup-box">
                            <div className="button-group">
                                <button
                                    style={{
                                        color: "#FF5349",
                                        fontWeight: "bold",
                                        backgroundColor: "#fbafaa",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTruck} /> Delivery
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faBagShopping} /> Pickup
                                </button>
                            </div>
                            <div className="address-group">
                                <div className="input-wrapper">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        className="input-icon"
                                    />
                                    <input type="text" placeholder="Enter Your Address" />
                                </div>
                                <button>
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className="navbar-icon1"
                                    />{" "}
                                    Find Food
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={food_1} alt="Food" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner