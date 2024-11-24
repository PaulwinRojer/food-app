import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import food1 from "../assets/images/food1.jpeg";
import food2 from "../assets/images/food2.jpeg";
import food8 from "../assets/images/food8.jpeg";
 

const SpecialMenu = () => {
    return (
        <>
            <section id="special-menu">
                <div className="special-menu-container">
                    {/* First Box - Content Left, Image Right */}
                    <div className="special-menu-box">
                        <div className="special-menu-content">
                            <h1>
                                Best Deals <span>Crispy Sandwiches</span>
                            </h1>
                            <p>
                                Enjoy the large size of sandwiches. Complete perfect slice of
                                sandwiches.
                            </p>
                            <button className="order-button">
                                Proceed to Order
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        <div className="special-menu-image">
                            <img src={food1} alt="Crispy Sandwich" />
                        </div>
                    </div>

                    {/* Second Box - Image Left, Content Right */}
                    <div className="special-menu-box reverse-layout">
                        <div className="special-menu-image">
                            <img src={food2} alt="Fried Chicken" />
                        </div>
                        <div className="special-menu-content">
                            <h1>
                                Celebrate Parties with <span>Fried Chicken</span>
                            </h1>
                            <p>
                                Get the best fried chicken smeared with a lip-smacking lemon
                                chili flavor. Check out best deals for fried chicken.
                            </p>
                            <button className="order-button">
                                Proceed to Order
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>

                    <div className="special-menu-box" style={{marginBottom:"0px"}}>
                        <div className="special-menu-content">
                            <h1>
                                Best Deals <span>Crispy Sandwiches</span>
                            </h1>
                            <p>
                                Enjoy the large size of sandwiches. Complete perfect slice of
                                sandwiches.
                            </p>
                            <button className="order-button">
                                Proceed to Order
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        <div className="special-menu-image">
                            <img src={food8} alt="Crispy Sandwich" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialMenu