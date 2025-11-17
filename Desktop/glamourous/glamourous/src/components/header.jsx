import { useState, useEffect } from 'react';

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    const onHash = () => setUser(JSON.parse(localStorage.getItem('user')) || null);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="auth-buttons">
          {user ? (
            <>
              <span className="auth-greeting">Hi, {user.name || user.email}</span>
              <button className="auth-button" onClick={() => { localStorage.removeItem('user'); setUser(null); window.location.hash = ''; }}>Logout</button>
            </>
          ) : (
            <>
              <button className="auth-button" onClick={() => { window.location.hash = '#/login'; }}>Login</button>
              <button className="auth-button primary" onClick={() => { window.location.hash = '#/register'; }}>Register</button>
            </>
          )}
        </div>
       
      </div>
    </header>
  );
}

export default Header;
