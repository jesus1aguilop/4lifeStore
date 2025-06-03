import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Home from "./pages/admin/Home";
import Admin from "./pages/admin/Admin";
import Tienda from "./pages/Tienda";

export default function App() {
    return (
        <BrowserRouter>
            <nav className="flex gap-4 p-4 bg-gray-200">
                <Link to="/">Inicio</Link>
                <Link to="/tienda">Tienda</Link>
                <Link to="/admin">Admin</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route
                    path="/admin"
                    element={
                        <>
                            <SignedIn>
                                <Admin />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}