'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  image: string;
  isHighlighted: boolean;
  type: 'donut' | 'drink';
  price: number;
}

const ProductDisplay: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'donut' | 'drink'>('donut');
  const [products, setProducts] = useState<Product[]>([
    // Donuts
    { name: 'Avocado Spread', image: '/fooditems/AvacadoSpread.jpeg', isHighlighted: false, type: 'donut', price: 0.95 },
  { name: 'Baked Apple Croissant', image: '/fooditems/BakedAppleCroissant.jpeg', isHighlighted: false, type: 'donut', price: 3.75 },
  { name: 'Banana Walnut And Pelican Loaf', image: '/fooditems/BananaWalnutAndPelcanLoaf.jpg', isHighlighted: false, type: 'donut', price: 3.25 },
  { name: 'Chocolate Croissant', image: '/fooditems/ChocolateCroissant.jpg', isHighlighted: false, type: 'donut', price: 3.45 },
  { name: 'Cinnamon Coffee Cake', image: '/fooditems/CinammonCoffeeCake.jpeg', isHighlighted: false, type: 'donut', price: 3.95 },
  { name: 'Glazed Doughnut', image: '/fooditems/GlazedDoughnut.jpeg', isHighlighted: false, type: 'donut', price: 1.95 },
  { name: 'Ham and Swiss Croissant', image: '/fooditems/HamAndSwissCroissant.jpg', isHighlighted: false, type: 'donut', price: 4.75 },
  { name: 'Iced Lemon Loaf', image: '/fooditems/IcedLemonLoaf.jpeg', isHighlighted: false, type: 'donut', price: 3.25 },
  { name: 'Plain Bagel', image: '/fooditems/PlainBagel.jpg', isHighlighted: false, type: 'donut', price: 2.25 },
  { name: 'Vanilla Bean Custard Danish', image: '/fooditems/VanillaBeanCustardDanish.jpg', isHighlighted: false, type: 'donut', price: 3.75 },

  // Drink Items
  { name: 'Caramel Apple Spice', image: '/drinkitems/CaramelAppleSpice.jpeg', isHighlighted: false, type: 'drink', price: 3.75 },
  { name: 'Caramel Brulee Creme Frappuccino', image: '/drinkitems/CaramelBruleeCremeFrappucino.jpeg', isHighlighted: false, type: 'drink', price: 4.95 },
  { name: 'Chestnut Praline Creme Frappuccino', image: '/drinkitems/ChestnutPralineCremeFrappuccino.jpeg', isHighlighted: false, type: 'drink', price: 4.95 },
  { name: 'Dragon Drink', image: '/drinkitems/DragonDrink.jpeg', isHighlighted: false, type: 'drink', price: 4.75 },
  { name: 'Lemonade Starbucks', image: '/drinkitems/LemonadeStarbucks.jpg', isHighlighted: false, type: 'drink', price: 2.95 },
  { name: 'Mango Dragonfruit Refresher', image: '/drinkitems/MangoDragonfruitRefresher.jpeg', isHighlighted: false, type: 'drink', price: 3.75 },
  { name: 'Midnight Drink', image: '/drinkitems/MidnightDrink.jpeg', isHighlighted: false, type: 'drink', price: 4.45 },
  { name: 'Peppermint Hot Chocolate', image: '/drinkitems/PeppermintHotChocolate.jpeg', isHighlighted: false, type: 'drink', price: 3.95 },
  { name: 'Strawberry Acai Lemonade Refresher', image: '/drinkitems/StrawberryAcaiLemonadeRefreshers.jpg', isHighlighted: false, type: 'drink', price: 3.75 },
  { name: 'White Hot Chocolate', image: '/drinkitems/WhiteHotChocolate.jpeg', isHighlighted: false, type: 'drink', price: 3.95 }
    ]);

  useEffect(() => {
    const handleProductHighlight = (event: CustomEvent<{ productName: string; action: 'show' | 'hide' }>) => {
      const { productName, action } = event.detail;
      
      // Find the product and switch category if needed
      const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
      if (product && action === 'show') {
        setActiveCategory(product.type);  
      }

      setProducts(prevProducts => 
        prevProducts.map(product => ({
          ...product,
          isHighlighted: product.name.toLowerCase() === productName.toLowerCase() ? action === 'show' : false
        }))
      );
    };


    window.addEventListener('productHighlight', handleProductHighlight as EventListener);
    return () => {
      window.removeEventListener('productHighlight', handleProductHighlight as EventListener);
    };
  }, [products]);


  const filteredProducts = products.filter(product => product.type === activeCategory);

  return (
    <div>
      {/* Menu Header */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Menu</h2>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveCategory('donut')}
          className={`px-6 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            activeCategory === 'donut'
              ? 'bg-yellow-400 text-white'
              : 'text-gray-600 hover:text-gray-900 bg-gray-100'
          }`}
        >
          Donuts
        </button>
        <button
          onClick={() => setActiveCategory('drink')}
          className={`px-6 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            activeCategory === 'drink'
              ? 'bg-yellow-400 text-white'
              : 'text-gray-600 hover:text-gray-900 bg-gray-100'
          }`}
        >
          Drinks
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {filteredProducts.map((product, index) => (
        <div
          key={index}
          className={`relative transition-all duration-300 ease-in-out transform ${
            product.isHighlighted 
             ? "scale-170 z-20 bg-transparent border-6 border-green-400 ring-2 ring-green-800 ring-offset-0 shadow-[0_0_15px_#4ade80,0_0_15px_#4ade80,0_0_30px_#4ade80] animate-pulse-slow"
              : "scale-100 hover:scale-105 bg-transparent border border-gray-600 hover:border-green-400 hover:shadow-[0_0_5px_#4ade80]"
          }`}
          style={{ width: '150px', height: '250px' }}
        >
          <div className="shadow-md overflow-hidden h-full flex flex-col" style={{backgroundColor: "#1F3832"}}>
            {/* Product Image */}
            <div className="relative h-40 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
                priority={index < 5}
              />
            </div>

            {/* Product Details */}
            <div className="p-3 text-center text-white flex-grow flex flex-col justify-between">
              <h4 className="text-sm font-medium mb-1">
                {product.name}
              </h4>
             
              <p className="text-sm mt-1">
                ${product.price.toFixed(2)}
              </p>

              {/* Order Button */}
              <button
               
                className="mt-3 w-full bg-gray-200 text-blue-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    </div>
  );
};

export default ProductDisplay;
