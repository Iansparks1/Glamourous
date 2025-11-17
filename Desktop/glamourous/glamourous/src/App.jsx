
import { useState, useEffect } from 'react'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Features from './components/features.jsx'
import Section2 from './components/section2.jsx'
import Section3 from './components/section3.jsx'
import AllProducts from './components/allproducts.jsx'
import Testimonials from './components/testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/footer.jsx'
import AuthModal from './components/AuthModal.jsx'

import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [route, setRoute] = useState(window.location.hash || '');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <>
      <Header />

      {route === '#/account' ? (
        // render simple account page
        <main>
          <div style={{ padding: '3rem 1rem' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
              <h1>Successfully logged in</h1>
              <p>{JSON.parse(localStorage.getItem('user'))?.name || JSON.parse(localStorage.getItem('user'))?.email || ''}</p>
              <p><a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>Back to home</a></p>
            </div>
          </div>
        </main>
      ) : (
        <>
          <Hero />
          <Features />
          <Section2 />
          <Section3 />
          <AllProducts />
          <Testimonials />
          <CTA />
          <Footer />
        </>
      )}

      {/* Auth modals shown by hash */}
      {route === '#/login' && <AuthModal mode="login" />}
      {route === '#/register' && <AuthModal mode="register" />}
    </>
  )
}

export default App
