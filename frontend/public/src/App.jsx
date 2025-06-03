import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import  Home  from "./pages/Home";
import Admin from "./pages/Admin";

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
            path="/admin"
            element={
                <>
                <SignedIn><Admin /> </SignedIn>
                <SignedOut> <RedirectToSignIn /> </SignedOut>
                </>
            }
            />
        </Routes> 
        </BrowserRouter>
    );
}