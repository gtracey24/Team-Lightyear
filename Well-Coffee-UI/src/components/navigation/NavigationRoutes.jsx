import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DisplayOrderForm from '../orderForm/OrderFormPage';
import ManageEmployees from '../pages/ManageEmployees';
import DailyReport from '../pages/DailyReport';
import Tutorial from '../pages/Tutorial';
import AccountPage from '../pages/AccountPage';
import LogoutPage from '../pages/LogoutPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import AmazonSearchHome from '../amazonAPI/ItemSearch/AmazonSearchHome';

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/order" element={<DisplayOrderForm />} />
        <Route path="/manage" element={<ManageEmployees />} />
        <Route path="/report" element={<DailyReport />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/amazon" element={<AmazonSearchHome />} />
      </Routes>
    </>
  )
}

export default NavigationRoutes