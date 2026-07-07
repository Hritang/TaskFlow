import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(

    <StrictMode>

        <App />

        <Toaster
            position="top-right"
            toastOptions={{
                duration: 2500,
                style: {
                    borderRadius: "10px",
                    background: "#1f2937",
                    color: "#fff"
                }
            }}
        />

    </StrictMode>

);