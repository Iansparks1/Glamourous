# Glamourous — Fashion Ecommerce Platform

A modern, responsive ecommerce website built with **React** and **Vite**, showcasing a curated collection of clothing and fashion items with a sleek user interface and engaging customer experience.

![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646cff?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📸 Features

### 🎯 Core Functionality
- **Hero Section** — Engaging landing page with featured messaging and call-to-action
- **Product Showcase** — Browse 8+ curated clothing items with detailed product cards
- **Smart Navigation** — Intuitive menu and smooth scrolling between sections
- **Responsive Design** — Mobile-first approach, adapts beautifully to all screen sizes
- **User Authentication** — Secure login and registration with localStorage demo

### 🔐 Authentication System
- Login and Register modals with form validation
- User session management via localStorage
- Personalized greeting after login
- Logout functionality with session clear
- Hash-based routing for seamless navigation

### 🎨 Design & UX
- **Modern Aesthetic** — Clean, professional design with teal accent colors (#0b6b63)
- **Smooth Interactions** — Hover effects, transitions, and visual feedback
- **Grid Layouts** — Responsive CSS Grid for product displays
- **Typography** — Carefully chosen font sizes and weights for readability
- **Color Scheme** — Cohesive palette: whites, dark grays, and teal accents

### 📱 Sections Included
1. **Header** — Sticky navigation with auth controls
2. **Hero** — Centered messaging with background imagery
3. **Features** — Product benefits and highlights
4. **Section 2** — New in-store collection showcase
5. **Section 3** — About/company information
6. **All Products** — 4-column grid of featured items
7. **Testimonials** — Customer reviews and ratings
8. **CTA** — Call-to-action email signup section
9. **Footer** — Social links, company info, legal links

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ and **npm** (or yarn)
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/glamourous.git
cd glamourous/glamourous

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173/` by default.

### Build for Production

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
glamourous/
├── src/
│   ├── components/
│   │   ├── header.jsx           # Top navigation + auth controls
│   │   ├── hero.jsx             # Hero section with CTA
│   │   ├── features.jsx         # Feature highlights
│   │   ├── section2.jsx         # New collection carousel
│   │   ├── section3.jsx         # About/company info
│   │   ├── allproducts.jsx      # Product grid (4 columns)
│   │   ├── testimonials.jsx     # Customer reviews
│   │   ├── CTA.jsx              # Email signup CTA
│   │   ├── footer.jsx           # Footer with links
│   │   ├── AuthModal.jsx        # Login/register form modal
│   │   └── Account.jsx          # User account success page
│   ├── assets/                  # Images, SVGs, icons
│   ├── App.jsx                  # Main app router + layout
│   ├── App.css                  # Global styles & responsive design
│   ├── main.jsx                 # React entry point
│   └── index.css                # Base CSS reset
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── index.html                  # HTML template
├── README.md                   # This file
└── .gitignore                  # Git ignore rules
```

---

## 🔧 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI component library |
| **Vite** | Fast build tool & dev server |
| **JavaScript (ES6+)** | Core language |
| **CSS3** | Styling (Grid, Flexbox, animations) |
| **HTML5** | Semantic markup |
| **localStorage** | Client-side session storage (demo) |

---

## 🎯 Key Features in Detail

### Authentication
- **Login Modal** — Email + password form with validation
- **Register Modal** — Full name, email, password confirmation
- **Session Management** — User data stored in localStorage
- **Protected Routes** — Account page visible only when logged in
- **Hash-based Navigation** — `#/login`, `#/register`, `#/account` routes

### Product Display
- **Responsive Grid** — 4 columns (desktop), 3 (tablet), 2 (mobile), 1 (small phones)
- **Product Cards** — Image showcase with add-to-cart button
- **Pricing Display** — Current and original price with strikethrough
- **Hover Effects** — Interactive feedback on product interactions

### Styling
- **1440px Max Width** — Optimal content container for readability
- **Consistent Spacing** — Unified padding and margin scale
- **Modern Colors** — Teal (#0b6b63) primary, white (#fff) backgrounds
- **Responsive Typography** — Font sizes scale with viewport

---

## 📝 Usage

### View the Website
1. Start the dev server: `npm run dev`
2. Open `http://localhost:5173/` in your browser
3. Explore different sections by scrolling
4. Test authentication by clicking "Login" or "Register"

### Test Authentication
- **Register**: Click "Register" → Fill form → Submit → See success page
- **Login**: Click "Login" → Enter any email/password → Submit → See success page
- **Logout**: After logging in, click "Logout" to clear session

### Customize Products
Edit `src/components/allproducts.jsx` to:
- Update product names and prices
- Change product images
- Modify product descriptions

---

## 🎨 Customization

### Change Colors
Update the color variables in `src/App.css`:
```css
/* Primary color */
--primary: #0b6b63;

/* Update existing rules like: */
.auth-button.primary { background: #0b6b63; }
```

### Modify Hero Section
Edit `src/components/hero.jsx` to change:
- Title and subtitle text
- Background image
- Call-to-action button text

### Add More Products
Update the `products` array in `src/components/allproducts.jsx`:
```jsx
const products = [
  { id: 1, name: "Your Product", price: "$99.99", image: productImage },
  // Add more...
];
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Drag & drop the `dist/` folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js`:
```js
export default {
  base: '/glamourous/',
  // ...
}
```

Then build and push to `gh-pages` branch.

---

## 🐛 Known Issues & Limitations

- **Authentication**: Uses localStorage (demo only) — replace with real backend for production
- **Double Extensions**: Some image files have `.jpg.jpg` extensions (harmless but can be cleaned up)
- **No Backend**: Product data is hardcoded — connect to a real API for dynamic content
- **No Payment Integration**: Add Stripe, PayPal, or similar for real transactions

---

## 🛣️ Future Enhancements

- [ ] Real backend authentication (Node.js/Express + JWT)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Payment processing (Stripe/PayPal)
- [ ] Product search and filtering
- [ ] Shopping cart & checkout flow
- [ ] Order history & user profile
- [ ] Product reviews & ratings
- [ ] Wishlist functionality
- [ ] Dark mode toggle
- [ ] Multi-language support

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**  
[GitHub](https://github.com/YOUR_USERNAME) | [LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 💬 Support

Have questions or found a bug? 
- Open an [Issue](https://github.com/YOUR_USERNAME/glamourous/issues)
- Check existing documentation and FAQs

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Built with ❤️ by [Your Name]**

⭐ If you found this helpful, please star the repository!
