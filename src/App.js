import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import Details from "./modules/Details";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Signin from "./modules/Auth/pages/Signin";
import Signup from "./modules/Auth/pages/Signup";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
import AdminMovie from "./modules/AdminMovie/AdminMovie";
import TicketMovie from "./modules/TicketMovie";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {" "}
            <Route index element={<Home />} />
            <Route path="movies/:movieId" element={<Details />} />
            {/* <Route
              path="tickets/:showtimeId"
              element={
                <ProtectedRoute>
                  <div>Ticket Page</div>
                </ProtectedRoute>
              }
            /> */}
            <Route element={<ProtectedRoute />}>
              <Route path="tickets/:showtimeId" element={<TicketMovie />} />
            </Route>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* Admin */}
          {/* <Route element={<AdminProtectedMovieRoute />} />> */}
          <Route path="/admin" /*element={<div>Đây là AdminLayout</div>}*/>
            <Route path="movies" element={<AdminMovie />} />
          </Route>
          {/* <Route /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
