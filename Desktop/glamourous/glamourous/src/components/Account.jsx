import React from 'react';

function Account() {
  const user = JSON.parse(localStorage.getItem('user')) || null;

  return (
    <main style={{ padding: '3rem 1rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h1>Successfully logged in</h1>
        {user && (
          <p style={{ color: '#444' }}>
            Welcome back{user.name ? `, ${user.name}` : ''}! Your email: {user.email || '—'}
          </p>
        )}
        <p style={{ marginTop: '1.25rem' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>
            Back to home
          </a>
        </p>
      </div>
    </main>
  );
}

export default Account;
