import './App.css';
import { useState } from 'react';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import {Routes, Route} from 'react-router-dom'
import OrderHistoryPage from '../OrderHistroyPage/OrderHistroyPage';
import NavBar from '../../components/NavBar';

export default function App() {
  const [user, setUser]= useState(null);
  return (
    <main className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
      </>
        :
        <AuthPage />
      }
    </main>
  );
}

