import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage.jsx';
import Signin from './components/Signin';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import ServicesPage from './components/Pages/ServicesPage.jsx';
import ResourcesPage from './components/Pages/ResourcesPage.jsx';
import EssayServicePage from './components/Pages/services/EssayServicePage.jsx';
import ServiceOverview from './components/Pages/services/ServicesOverview.jsx';
import ResearchPaperServicePage from './components/Pages/services/ResearchPaperServicePage.jsx';
import FeaturedTutorsPage from './components/FeaturedTutors/FeaturedTutors.jsx';
// import OrderPage from './components/Pages/OrderPage'; // Adjust if it's in a different folder

import ChatButton from './components/Chatbutton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/services" element={<ServicesPage />}>
              <Route index element={<ServiceOverview />} />
              <Route path="essays" element={<EssayServicePage />} />
              <Route path="research-papers" element={<ResearchPaperServicePage />} />
            </Route>
             <Route path='/Signin' Component={Signin}></Route>
             <Route path='/Signup' Component={Signup}></Route>
            
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/tutors" element={<FeaturedTutorsPage />} />
            {/* <Route path="/order" element={<OrderPage />} /> */}
          </Routes>
          <ChatButton />
        </main>
      </div>
    </Router>
  );
}

export default App;
