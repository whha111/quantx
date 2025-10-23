import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <input type="email" placeholder="Email" className="border p-2 mb-2 w-full" />
        <input type="password" placeholder="Password" className="border p-2 mb-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
