import { useState } from 'react';
import './App.css'
import React from 'react';
import Product from './component/Product';
import Header from './component/header';
import { UserProvider } from './Provider/UserProvider';



function App() {
  return (
    <UserProvider>
      <div className='App'>
        <h2>Practica de UseContext</h2>
      <Header />
        <Product />
      </div>
      </UserProvider>
  )
}

export default App;
