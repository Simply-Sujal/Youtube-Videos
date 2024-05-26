import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchingApiofProducts = () => {
    const [products, setProducts] = useState([]);

    const getProductDetails = async () => {
        try {
            const resp = await axios("https://dummyjson.com/products");
            setProducts(resp.data.products);
        } catch (error) {
            console.log("Error while fetching api", error);
        }
    };

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Products Detail</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <p className="text-gray-900 font-bold mb-2">${product.price}</p>
                            <p className="text-yellow-500 mb-2">Rating: {product.rating}</p>
                            <p className="text-gray-600">Brand: {product.brand}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchingApiofProducts;
