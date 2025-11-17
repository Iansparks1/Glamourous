import { useState } from 'react';

function AuthModal({ mode = 'login' }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'register') {
      if (!form.name || !form.email || !form.password) {
        setError('Please fill in all fields');
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // store user (demo only)
      localStorage.setItem('user', JSON.stringify({ name: form.name, email: form.email }));
      // navigate to success/account page
      window.location.hash = '#/account';
    } else {
      if (!form.email || !form.password) {
        setError('Please enter email and password');
        return;
      }
      // demo login: accept any credentials
      localStorage.setItem('user', JSON.stringify({ email: form.email }));
      window.location.hash = '#/account';
    }
  };

  return (
    <div className="auth-modal" role="dialog" aria-modal="true">
      <div className="auth-content">
        <button className="close-btn" onClick={() => { window.location.hash = ''; }}>&times;</button>
        <h2>{mode === 'register' ? 'Register' : 'Login'}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div className="form-group">
              <input name="name" value={form.name} onChange={onChange} placeholder="Full name" />
            </div>
          )}
          <div className="form-group">
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" />
          </div>
          <div className="form-group">
            <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" />
          </div>
          {mode === 'register' && (
            <div className="form-group">
              <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={onChange} placeholder="Confirm password" />
            </div>
          )}
          <button className="auth-btn" type="submit">{mode === 'register' ? 'Create account' : 'Login'}</button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
