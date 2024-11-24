import { faLocationDot, faBowlFood, faMoneyCheckDollar, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Define the steps array with the details of each card
const steps = [
  {
    id: 1,
    icon: faLocationDot,
    heading: 'Select Location',
    text: 'Choose the location where your food will be delivered',
  },
  {
    id: 2,
    icon: faBowlFood,
    heading: 'Select Food',
    text: 'Choose your favorite food from the menu',
  },
  {
    id: 3,
    icon: faMoneyCheckDollar,
    heading: 'Make Payment',
    text: 'Secure payment options for your order',
  },
  {
    id: 4,
    icon: faHouseChimneyWindow,
    heading: 'Delivery',
    text: 'Your food will be delivered to your door',
  },
];

const Howitworks = () => {
  return (
    <>
      <section id="how_it_works">
        <div className="how-it-works-container">
          <h1 className="how-it-works-heading">How does it work</h1>
          <div className="how-it-works-cards">
            {steps.map((step) => (
              <div key={step.id} className="how-it-works-card">
                <FontAwesomeIcon icon={step.icon} className="how-it-works-icon" />
                <h4 className="how-it-works-card-heading">{step.heading}</h4>
                <p className="how-it-works-card-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitworks;
