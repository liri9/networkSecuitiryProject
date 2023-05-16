import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import OpeningScreen from './pages/openingScreen';
import LoginPage from './pages/loginPage';
import RegisterPage from "./pages/registerPage"
import ChangePasswordPage from "./pages/changePasswordPage"





function NewMenu() {
    return (
      <Router>
            <Routes>
              <Route index element={<OpeningScreen />} />
              <Route path="RegisterPage" element={<RegisterPage />} />
              <Route path="LoginPage" element={<LoginPage />} />
              <Route path="ChangePasswordPage" element={<changePassword />} />
            </Routes>
      </Router>
    );
  }
  export default NewMenu;