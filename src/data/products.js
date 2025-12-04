// Product data for BrewBox
export const products = [
  // Coffee Products
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and floral with notes of jasmine, bergamot, and blueberry. A delicate, complex coffee perfect for pour-over brewing.",
    price: 24.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    originCountry: "Ethiopia",
    caffeineLevel: "high",
    brewingTip: "Pour over at 200°F for 3-4 minutes",
    roastLevel: "Light",
    flavorProfile: ["Floral", "Citrus", "Berry"],
    format: "Whole Beans - 12oz"
  },
  {
    id: 2,
    name: "Colombian Dark Roast",
    description: "Bold and rich with chocolate and caramel notes. A classic dark roast that makes an exceptional espresso or French press coffee.",
    price: 22.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop",
    originCountry: "Colombia",
    caffeineLevel: "high",
    brewingTip: "Espresso or French press, 195°F",
    roastLevel: "Dark",
    flavorProfile: ["Chocolate", "Caramel", "Nutty"],
    format: "Whole Beans - 12oz"
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Earthy and full-bodied with herbal notes and a syrupy texture. Perfect for those who love bold, complex flavors.",
    price: 26.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=500&fit=crop",
    originCountry: "Indonesia",
    caffeineLevel: "high",
    brewingTip: "French press or cold brew recommended",
    roastLevel: "Medium-Dark",
    flavorProfile: ["Earthy", "Herbal", "Spicy"],
    format: "Whole Beans - 12oz"
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    description: "Balanced and smooth with cocoa, citrus, and floral notes. An all-day drinking coffee with remarkable clarity.",
    price: 23.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop",
    originCountry: "Guatemala",
    caffeineLevel: "medium",
    brewingTip: "Drip or pour over at 200°F",
    roastLevel: "Medium",
    flavorProfile: ["Cocoa", "Citrus", "Floral"],
    format: "Ground - 12oz"
  },

  // Tea Products
  {
    id: 5,
    name: "Jasmine Dragon Pearls",
    description: "Hand-rolled green tea pearls scented with fresh jasmine blossoms. Delicate, aromatic, and utterly luxurious.",
    price: 18.99,
    category: "tea",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&h=500&fit=crop",
    originCountry: "China",
    caffeineLevel: "low",
    brewingTip: "Steep at 175°F for 2-3 minutes",
    teaType: "Green Tea",
    flavorProfile: ["Jasmine", "Sweet", "Floral"],
    format: "Loose Leaf - 4oz"
  },
  {
    id: 6,
    name: "English Breakfast",
    description: "A robust blend of Assam, Ceylon, and Kenyan black teas. Malty, full-bodied, and perfect with milk and honey.",
    price: 14.99,
    category: "tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&h=500&fit=crop",
    originCountry: "Blend",
    caffeineLevel: "medium",
    brewingTip: "Steep at 200°F for 3-5 minutes",
    teaType: "Black Tea",
    flavorProfile: ["Malty", "Robust", "Bold"],
    format: "Tea Bags - 20 count"
  },
  {
    id: 7,
    name: "Chamomile Lavender",
    description: "Soothing herbal blend of chamomile flowers and lavender buds. Naturally caffeine-free for peaceful evenings.",
    price: 15.99,
    category: "tea",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500&h=500&fit=crop",
    originCountry: "USA",
    caffeineLevel: "none",
    brewingTip: "Steep at 212°F for 5-7 minutes",
    teaType: "Herbal Tea",
    flavorProfile: ["Floral", "Calming", "Sweet"],
    format: "Loose Leaf - 3oz"
  },
  {
    id: 8,
    name: "Sencha Green Tea",
    description: "Premium Japanese green tea with a fresh, grassy flavor and sweet umami notes. Rich in antioxidants.",
    price: 16.99,
    category: "tea",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&h=500&fit=crop",
    originCountry: "Japan",
    caffeineLevel: "low",
    brewingTip: "Steep at 160°F for 1-2 minutes",
    teaType: "Green Tea",
    flavorProfile: ["Grassy", "Umami", "Fresh"],
    format: "Loose Leaf - 4oz"
  },
  {
    id: 9,
    name: "Chai Spice Blend",
    description: "Robust Assam tea blended with cinnamon, cardamom, ginger, and cloves. Bold, warming, and aromatic.",
    price: 17.99,
    category: "tea",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=500&fit=crop",
    originCountry: "India",
    caffeineLevel: "medium",
    brewingTip: "Simmer with milk and sweetener for 5 minutes",
    teaType: "Spiced Black Tea",
    flavorProfile: ["Spicy", "Warm", "Sweet"],
    format: "Loose Leaf - 5oz"
  },

  // Specialty Drinks
  {
    id: 10,
    name: "Ceremonial Matcha",
    description: "Premium grade matcha from Uji, Japan. Vibrant green, smooth, and perfect for traditional tea ceremonies or lattes.",
    price: 32.99,
    category: "specialty",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&h=500&fit=crop",
    originCountry: "Japan",
    caffeineLevel: "medium",
    brewingTip: "Whisk with 175°F water until frothy",
    specialtyType: "Matcha",
    flavorProfile: ["Umami", "Creamy", "Green"],
    format: "Powder - 30g"
  },
  {
    id: 11,
    name: "Golden Turmeric Latte Mix",
    description: "Wellness blend with turmeric, ginger, cinnamon, and black pepper. Anti-inflammatory and deliciously comforting.",
    price: 19.99,
    category: "specialty",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop",
    originCountry: "USA",
    caffeineLevel: "none",
    brewingTip: "Mix with warm milk or milk alternative",
    specialtyType: "Wellness Drink",
    flavorProfile: ["Spicy", "Earthy", "Sweet"],
    format: "Powder - 8oz"
  },
  {
    id: 12,
    name: "Cold Brew Concentrate",
    description: "Smooth, low-acid coffee concentrate made from 100% Arabica beans. Perfect for iced coffee year-round.",
    price: 21.99,
    category: "specialty",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&h=500&fit=crop",
    originCountry: "Blend",
    caffeineLevel: "high",
    brewingTip: "Mix 1:1 with water or milk over ice",
    specialtyType: "Ready-to-Drink",
    flavorProfile: ["Smooth", "Chocolate", "Low-acid"],
    format: "Liquid - 32oz"
  },

  // Subscription Boxes
  {
    id: 13,
    name: "Monthly Coffee Discovery",
    description: "Explore 3 different single-origin coffees each month. Curated by our expert tasters for maximum variety and quality.",
    price: 49.99,
    category: "subscription",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=500&fit=crop",
    subscriptionType: "Monthly",
    caffeineLevel: "high",
    contents: "3 x 12oz bags of coffee (whole beans or ground)",
    customizable: true,
    flavorProfile: ["Varies", "Curated Selection"],
    format: "Subscription Box"
  },
  {
    id: 14,
    name: "Tea Enthusiast Box",
    description: "A monthly selection of 5 premium loose leaf teas from around the world. Perfect for expanding your tea horizons.",
    price: 39.99,
    category: "subscription",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop",
    subscriptionType: "Monthly",
    caffeineLevel: "varies",
    contents: "5 different teas (2oz each) + brewing guide",
    customizable: true,
    flavorProfile: ["Varies", "Global Selection"],
    format: "Subscription Box"
  },
  {
    id: 15,
    name: "Wellness & Herbal Box",
    description: "Monthly delivery of caffeine-free herbal teas and wellness drinks. Focus on relaxation, immunity, and natural energy.",
    price: 34.99,
    category: "subscription",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    subscriptionType: "Monthly",
    caffeineLevel: "none",
    contents: "4 herbal blends + 1 specialty wellness drink",
    customizable: true,
    flavorProfile: ["Herbal", "Soothing", "Natural"],
    format: "Subscription Box"
  },
  {
    id: 16,
    name: "Ultimate BrewBox",
    description: "The complete experience! Monthly selection of 2 coffees, 3 teas, and 1 specialty drink. Perfect for beverage lovers.",
    price: 64.99,
    category: "subscription",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=500&fit=crop",
    subscriptionType: "Monthly",
    caffeineLevel: "varies",
    contents: "2 coffees (12oz each) + 3 teas (2oz each) + 1 specialty item",
    customizable: true,
    flavorProfile: ["Complete", "Diverse", "Premium"],
    format: "Subscription Box"
  }
];

// Category helper
export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'coffee', name: 'Coffee', count: products.filter(p => p.category === 'coffee').length },
  { id: 'tea', name: 'Tea', count: products.filter(p => p.category === 'tea').length },
  { id: 'specialty', name: 'Specialty', count: products.filter(p => p.category === 'specialty').length },
  { id: 'subscription', name: 'Subscriptions', count: products.filter(p => p.category === 'subscription').length },
];

// Get products by category
export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Get featured products (for homepage)
export const getFeaturedProducts = () => {
  return products.filter(p => [1, 5, 10, 13].includes(p.id));
};
