import React from 'react';
import food1 from "../assets/images/food1.jpeg";
import food2 from "../assets/images/food2.jpeg";
import food3 from "../assets/images/food3.jpeg";
import food4 from "../assets/images/food4.jpeg";

// Define the products array with details
const products = [
    {
        id: 1,
        image: food1,
        discount: 15,
        name: 'Greys Vage',
        daysRemaining: 6,
    },
    {
        id: 2,
        image: food2,
        discount: 10,
        name: 'Greys Vage',
        daysRemaining: 8,
    },
    {
        id: 3,
        image: food3,
        discount: 25,
        name: 'Greys Vage',
        daysRemaining: 7,
    },
    {
        id: 4,
        image: food4,
        discount: 20,
        name: 'Greys Vage',
        daysRemaining: 8,
    },
];

const Products = () => {
    return (
        <section id="products">
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <button className="discount-button">
                            <span className="large-number">{product.discount}</span>
                            <span className="text-small">
                                % <br /> Off
                            </span>
                        </button>
                        <h4>{product.name}</h4>
                        <button className="days">{product.daysRemaining} Days Remaining</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
