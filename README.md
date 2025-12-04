# BrewBox - Premium Beverage Subscription Ecommerce

![BrewBox](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![License](https://img.shields.io/badge/license-MIT-green)

**Live Demo:** [https://marsblars.github.io/brewbox/](https://marsblars.github.io/brewbox/)

A modern, responsive ecommerce website for BrewBox - a premium beverage subscription service offering curated boxes of teas, coffees, and specialty drinks from around the world.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

---

## 🎯 About

BrewBox is a subscription-based beverage service that delivers curated boxes of premium teas, coffees, and specialty drinks. This ecommerce website provides customers with an intuitive shopping experience to explore products, customize subscriptions, and manage their cart.

The project was designed to address the needs of various personas:
- **Coffee Enthusiasts** seeking high-quality, single-origin beans
- **Tea Lovers** exploring global tea varieties
- **Health-Conscious Consumers** looking for herbal and wellness drinks
- **Gift Givers** wanting convenient, customizable gift options
- **Explorers** eager to discover new international flavors

---

## ✨ Features

### Shopping Experience
- 🛒 **Fully Functional Shopping Cart**
  - Add, remove, and update product quantities
  - Real-time total calculation
  - LocalStorage persistence (cart survives page refresh)
  - Slide-in cart panel with smooth animations

### Product Catalog
- 📦 **16 Premium Products** across 4 categories
  - Coffee (Ethiopian, Colombian, Sumatra, Guatemala)
  - Tea (Jasmine, English Breakfast, Chamomile, Sencha, Chai)
  - Specialty Drinks (Matcha, Turmeric Latte, Cold Brew)
  - Subscription Boxes (Coffee, Tea, Wellness, Ultimate)

- 🔍 **Advanced Filtering & Search**
  - Category-based filtering
  - Real-time search functionality
  - Combined search + category filters

### Product Details
- Detailed product pages with:
  - Origin country and brewing instructions
  - Caffeine levels and flavor profiles
  - High-quality product imagery
  - Quantity selection before adding to cart

### Design
- 🎨 **Modern Premium Aesthetics**
  - Glassmorphism effects
  - Vibrant gradient backgrounds
  - Smooth micro-animations
  - Responsive typography using `clamp()`

- 📱 **Fully Responsive**
  - Mobile-first design
  - Optimized for tablets and desktops
  - Touch-friendly interface

### Additional Features
- 🎁 Subscription information with FAQ section
- ⚡ Fast page loads with Vite
- 🔄 React Router for smooth navigation
- 💾 State management with React Context API

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 7
- **Routing:** React Router DOM v7
- **Styling:** Vanilla CSS with custom design system
- **State Management:** React Context API
- **Deployment:** GitHub Pages
- **Fonts:** Google Fonts (Inter, Playfair Display)

---

## 📸 Screenshots

### Homepage
Beautiful hero section with featured products and how-it-works guide.

### Product Catalog
Category filtering, search, and responsive product grid.

### Shopping Cart
Slide-in cart panel with quantity controls and real-time totals.

### Product Details
Comprehensive product information with flavor profiles and brewing tips.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marsblars/brewbox.git
   cd brewbox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
brewbox-app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Footer.jsx   # Site footer
│   │   ├── Hero.jsx     # Homepage hero section
│   │   ├── Cart.jsx     # Shopping cart panel
│   │   └── ProductCard.jsx  # Product display card
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Homepage
│   │   ├── Products.jsx # Product catalog
│   │   ├── ProductDetail.jsx  # Product details
│   │   └── Subscriptions.jsx  # Subscription info
│   ├── context/
│   │   └── CartContext.jsx  # Cart state management
│   ├── data/
│   │   └── products.js  # Product data
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & design system
├── package.json
├── vite.config.js
└── README.md
```

---

## 💡 Usage

### Shopping Cart
- Click "Add to Cart" on any product card or detail page
- Cart icon in header shows item count
- Click cart icon to open cart panel
- Adjust quantities with +/- buttons
- Remove items with trash icon

### Product Browsing
- Use category filters on Products page
- Search by product name or description
- Click product cards to view full details

### Navigation
- **Home:** Featured products and how-it-works
- **Products:** Full product catalog with filters
- **Subscriptions:** Subscription plans and FAQ
- **About:** Company information (footer)

---

## 🌐 Deployment

This project is configured for GitHub Pages deployment.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the production version
2. Create/update the `gh-pages` branch
3. Deploy to GitHub Pages

**Live URL:** https://marsblars.github.io/brewbox/

### Custom Domain (Optional)

To use a custom domain:
1. Create a `CNAME` file in the `public/` folder
2. Add your domain (e.g., `brewbox.com`)
3. Configure DNS settings with your domain provider
4. Redeploy: `npm run deploy`

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

---

## 🎨 Design System

### Color Palette
- Primary Purple: `#8B5CF6`
- Primary Blue: `#3B82F6`
- Primary Teal: `#14B8A6`
- Accent Pink: `#EC4899`

### Typography
- Display: Playfair Display (headings, prices)
- Body: Inter (UI, content)

### Key Design Features
- Glassmorphism with backdrop blur
- Gradient backgrounds and text
- Smooth micro-animations
- Responsive grid layouts
- Mobile-first approach

---

## 📝 Product Data

The site features 16 carefully curated products:

**Coffee (4 products)**
- Ethiopian Yirgacheffe, Colombian Dark Roast, Sumatra Mandheling, Guatemala Antigua

**Tea (5 products)**
- Jasmine Dragon Pearls, English Breakfast, Chamomile Lavender, Sencha Green, Chai Spice

**Specialty (3 products)**
- Ceremonial Matcha, Golden Turmeric Latte Mix, Cold Brew Concentrate

**Subscriptions (4 products)**
- Monthly Coffee Discovery, Tea Enthusiast Box, Wellness & Herbal Box, Ultimate BrewBox

---

## 🤝 Contributing

This is a portfolio/demonstration project. Feel free to fork and adapt for your own use!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from inline SVG
- Fonts from [Google Fonts](https://fonts.google.com)
- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)

---

## 📧 Contact

**Developer:** marsblars  
**Repository:** [https://github.com/marsblars/brewbox](https://github.com/marsblars/brewbox)  
**Live Demo:** [https://marsblars.github.io/brewbox/](https://marsblars.github.io/brewbox/)

---

**Built with ❤️ and ☕**
