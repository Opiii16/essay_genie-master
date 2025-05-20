import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage.jsx';
import Signin from './components/Signin';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesPage from './components/Pages/ServicesPage.jsx';
import ResourcesPage from './components/Pages/ResourcesPage.jsx';
import EssayServicePage from './components/Pages/services/EssayServicePage.jsx';
import ServiceOverview from './components/Pages/services/ServicesOverview.jsx';
import ResearchPaperServicePage from './components/Pages/services/ResearchPaperServicePage.jsx';
import FeaturedTutorsPage from './components/FeaturedTutors/FeaturedTutors.jsx';
import ChatButton from './components/Chatbutton';
import './App.css';

// Payment pages
import AccountSetting from './components/AccountSetting/AccountSetting';
import Profile from './components/Profile/Profile';
import MakePayment from './components/Makepayment/Makepayment';
import BookMeeting from './components/BookMeeting/BookMeeting';
import AboutUs from './components/AboutUs/AboutUs';


import PaymentSuccess from './components/Makepayment/PaymentSuccess';
import MyOrders from './components/Makepayment/MyOrders';  // Add import for the new MyOrders page
import WhatsAppButton from './components/Whatsapp/Whatsapp.jsx';
import TidioChat from './components/TidioChat/TidioChat.jsx';
import OceanSection from './components/OceanSection/OceanSection.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <WhatsAppButton />
       
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="services" element={<ServicesPage />}>
              <Route index element={<ServiceOverview />} />
              <Route path="essays" element={<EssayServicePage />} />
              <Route path="research-papers" element={<ResearchPaperServicePage />} />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account-setting" element={<AccountSetting />} />
            <Route path="/ocean-section" element={<OceanSection/>} />
            <Route path="/whatsapp" element={<WhatsAppButton />} />
            <Route path="/tidiochat" element={<TidioChat />} />





            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/tutors" element={<FeaturedTutorsPage />} />
            <Route path="/book-meeting" element={<BookMeeting />} />
            <Route path="/about-us" element={<AboutUs />} />

            {/* Payment routes */}
            <Route path="/make-payment" element={<MakePayment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/my-orders" element={<MyOrders />} />  {/* Add route for MyOrders */}
          </Routes>

          <ChatButton />
        </main>
      </div>
    </Router>
  );
}

export default App;
