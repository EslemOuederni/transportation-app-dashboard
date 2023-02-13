import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/Navbar";
import Protected from "./Components/Protected";
import Header from "./Components/Header";
import ProfilePage from "./Pages/ProfilePage";
import TicketsPage from "./Pages/TicketsPage";
import TransportPage from "./Pages/TransportPage";
import AddVehicule from "./Pages/AddVehicule";
import TripsPage from "./Pages/TripsPage";
import AddTrip from "./Pages/AddTrip";
import ResetPwdPage from "./Pages/ResetPwdPage";
import EditProfilePage from "./Pages/EditProfilePage";
import AdminPage from "./Pages/AdminPage";

const LoginContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/resetPwd/:id" element={<ResetPwdPage />} />
    </Routes>
  );
};
const DefaultContainer = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Protected>
              <HomePage />
            </Protected>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/users/admins" element={<AdminPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/transport/addVehicule" element={<AddVehicule />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/trips/addTrip" element={<AddTrip />} />
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
