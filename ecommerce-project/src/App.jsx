import {Routes, Route} from 'react-router'
import {HomePage} from './pages/HomePage.jsx';
import {CheckoutPage} from "./pages/CheckoutPage.jsx";
import {OrdersPage} from "./pages/OrdersPage.jsx";
import './App.css'
import {TrackingPage} from "./pages/TrackingPage.jsx";
import {NotFound} from "./pages/not_found/NotFound.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get('/api/cart-items?expand=product')
            .then(response => {
                console.log(response.data);
                setCart(response.data);
            })
    }, [])

    return (
        <Routes>
            <Route index element={<HomePage cart={cart}/>}/>
            <Route path="/checkout" element={<CheckoutPage cart={cart}/>}/>
            <Route path="/orders" element={<OrdersPage cart={cart}/>}/>
            <Route path="/tracking" element={<TrackingPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
