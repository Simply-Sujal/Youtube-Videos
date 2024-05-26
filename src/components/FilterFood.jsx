import React, { useState } from 'react'

const data = [
    { id: 1, category: 'fruit', name: 'Apple', description: 'A sweet red fruit', image: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg' },
    { id: 2, category: 'vegetable', name: 'Carrot', description: 'A crunchy orange vegetable', image: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg' },
    { id: 3, category: 'fruit', name: 'Banana', description: 'A soft yellow fruit', image: 'https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg' },
    { id: 4, category: 'vegetable', name: 'Broccoli', description: 'A green vegetable rich in vitamins', image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1155&h=1528' },
    { id: 5, category: 'fruit', name: 'Orange', description: 'A juicy orange fruit', image: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg' },
    { id: 6, category: 'vegetable', name: 'Spinach', description: 'A leafy green vegetable', image: 'https://149880802.v2.pressablecdn.com/wp-content/uploads/53155733592_ce292a7118_c1.jpg' },
    { id: 7, category: 'fruit', name: 'Strawberry', description: 'A red fruit with seeds on the outside', image: 'https://clv.h-cdn.co/assets/15/22/2560x1728/gallery-1432664914-strawberry-facts1.jpg' },
    { id: 8, category: 'vegetable', name: 'Pepper', description: 'A spicy green vegetable', image: 'https://assets.clevelandclinic.org/transform/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg' },
];

const FilterFood = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredData = filter === 'all' ? data : data.filter(item => item.category === filter);

    return (
        <div className="p-4">
            <h1 className='text-center text-4xl text-blue-500 font-bold p-8'>Filter Functionality</h1>
            <div className="mb-4 flex justify-center space-x-4">
                <button onClick={() => handleFilterChange('all')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    All
                </button>
                <button onClick={() => handleFilterChange('fruit')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fruits
                </button>
                <button onClick={() => handleFilterChange('vegetable')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Vegetables
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredData.map(item => (
                    <div key={item.id} className="p-4 border rounded-lg shadow-lg">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded" />
                        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <span className="text-gray-500 italic">{item.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterFood;