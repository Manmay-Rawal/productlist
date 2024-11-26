import React from 'react';

const Total = ({ items }) => {
    if (!items || items.length === 0) {
        return <p className="text">Total Price: $0.00</p>;
    }

    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }

    return (
        <div>
            <p className="text">Total Price: ${total.toFixed(2)}</p>
        </div>
    );
};

export default Total;




