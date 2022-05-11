import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../components/login/LoginPage';
import { NotFoundPage } from '../components/notFound/NotFoundPage';
import { ResetPasswordPage } from '../components/password/ResetPasswordPage';
import { SetNewPasswordPage } from '../components/password/SetNewPasswordPage';
import { ProfilePage } from '../components/profile/ProfilePage';
import { RegistrationPage } from '../components/registration/RegistrationPage';
import { TestPage } from '../components/test/TestPage';
import { NavigationBar } from '../components/routes/NavigationBar';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/login/*" element={<LoginPage />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/registration/*" element={<RegistrationPage />} />
        <Route path="/test/*" element={<TestPage />} />
        <Route path="/reset_password/*" element={<ResetPasswordPage />} />
        <Route path="/set_new_password/*" element={<SetNewPasswordPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
