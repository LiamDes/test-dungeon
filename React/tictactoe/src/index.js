import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

import App from "./App"

// Lines 1-5 brings all the necessary pieces together:

// 1- React
// 2- React’s library to talk to web browsers (React DOM)
// 3- the styles for your components
// 4- the component you created in App.js.
// 5- The remainder of the file brings all the pieces together 
// and injects the final product into index.html in the public folder.

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)