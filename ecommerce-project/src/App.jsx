import {Routes, Route} from 'react-router'
import {HomePage} from './pages/HomePage.jsx';
import {CheckoutPage} from "./pages/CheckoutPage.jsx";
import {OrdersPage} from "./pages/OrdersPage.jsx";
import './App.css'
import {TrackingPage} from "./pages/TrackingPage.jsx";
import {NotFound} from "./pages/not_found/NotFound.jsx";

function App() {

    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/orders" element={<OrdersPage/>}/>
            <Route path="/tracking" element={<TrackingPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
