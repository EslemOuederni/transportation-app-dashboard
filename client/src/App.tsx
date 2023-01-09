import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Protected from "./Components/Protected";
const LoginContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
const DefaultContainer = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <Protected>
              <DefaultContainer />
            </Protected>
          }
        />
        <Route path="/auth/*" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
