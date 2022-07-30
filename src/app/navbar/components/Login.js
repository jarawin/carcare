import React from 'react';

function Login() {
  return (
    <button
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
    >
      <a href="/login">Fast Login</a>
    </button>
  );
}

export default Login;
