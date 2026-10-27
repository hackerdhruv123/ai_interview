import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import AppLayout from "./layouts/AppLayout";

// Route Protection
import ProtectedRoute from "./components/layout/ProtectedRoute";

// Public Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Result from "./pages/Result";
// Protected Pages
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import CareerCoach from "./pages/CareerCoach";
import History from "./pages/History";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import QuestionScreen from "./pages/QuestionScreen";

function App() {
    return (
     

            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Landing />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />
<Route
path="/result"
element={<Result />}
/>
                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />

                {/* Protected Routes */}

                <Route element={<ProtectedRoute />}>

                    <Route element={<AppLayout />}>

                        <Route
                            path="/home"
                            element={<Home />}
                        />

                        

<Route
  path="/analytics"
  element={<Analytics />}
/>
                        <Route
                            path="/interview"
                            element={<Interview />}
                        />
                        <Route
                        path="/question-screen"
                          element={<QuestionScreen />}
                            />
    
                        <Route
                            path="/resume-analyzer"
                            element={<ResumeAnalyzer />}
                        />

                        <Route
                            path="/career-coach"
                          
                            element={<CareerCoach />}
                        />
                                                <Route
                            path="/history"
                            element={<History />}
                        />

                        <Route
                            path="/pricing"
                            element={<Pricing />}
                        />

                        <Route
                            path="/profile"
                            element={<Profile />}
                        />
                    <Route
                            path="/settings"
                            element={<Settings />}
                        />

                    </Route>

                </Route>

            </Routes>

        
    );
}

export default App;