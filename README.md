## Glamourous — Fashion Ecommerce Platform
A modern, responsive ecommerce website built with React and Vite, showcasing a curated collection of clothing and fashion items with a sleek user interface and engaging customer experience.

## Features
## Core Functionality
Hero Section — Engaging landing page with featured messaging and call-to-action
Product Showcase — Browse 8+ curated clothing items with detailed product cards
Smart Navigation — Intuitive menu and smooth scrolling between sections
Responsive Design — Mobile-first approach, adapts beautifully to all screen sizes
User Authentication — Secure login and registration with localStorage demo 

## Authentication System
Login and Register modals with form validation
User session management via localStorage
Personalized greeting after login
Logout functionality with session clear
Hash-based routing for seamless navigation

## Sections Included
Header — Sticky navigation with auth controls
Hero — Centered messaging with background imagery
Features — Product benefits and highlights
Section 2 — New in-store collection showcase
Section 3 — About/company information
All Products — 4-column grid of featured items
Testimonials — Customer reviews and ratings
CTA — Call-to-action email signup section
Footer — Social links, company info, legal links
Quick Start
Prerequisites
Node.js 16+ and npm (or yarn)
Git for version control
Installation
# Install dependencies
npm install

# Start the development server
npm run dev
Build for Production
npm run build
Optimized files will be generated in the dist/ folder.

Preview Production Build
npm run preview
## Key Features in Detail
## Authentication

.Login Modal — Email + password form with validation

.Register Modal — Full name, email, password confirmation

.Session Management — User data stored in localStorage

.Protected Routes — Account page visible only when logged in

.Hash-based Navigation — #/login, #/register, #/account routes
Product Display

.Responsive Grid — 4 columns (desktop), 3 (tablet), 2 (mobile), 1 (small phones)

.Product Cards — Image showcase with add-to-cart button

.Pricing Display — Current and original price with strikethrough

.Hover Effects — Interactive feedback on product interactions
Styling

.1440px Max Width — Optimal content container for readability

.Consistent Spacing — Unified padding and margin scale

.Modern Colors — Teal (#0b6b63) primary, white (#fff) backgrounds

.Responsive Typography — Font sizes scale with viewport
Usage

## View the Website
Start the dev server: npm run dev
Open http://localhost:5173/ in your browser
Explore different sections by scrolling
Test authentication by clicking "Login" or "Register"
Test Authentication
Register: Click "Register" → Fill form → Submit → See success page
Login: Click "Login" → Enter any email/password → Submit → See success page
Logout: After logging in, click "Logout" to clear session
Customize Products
Edit src/components/allproducts.jsx to:

Update product names and prices

Change product images

Modify product descriptions

React Documentation

Vite Guide

CSS Tricks

MDN Web Docs

Built by [Iansparks1]

⭐ If you found this helpful, please star the repository!
