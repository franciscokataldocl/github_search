import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { SearchProvider } from "./components/context/searchContext";
import GlobalStyle from './components/styles/GlobalStyle';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SingleUser from './components/single/SingleUser';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchProvider>
      <BrowserRouter basename="/github_search">
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/:id" element={<SingleUser/>}></Route>
          <Route path="*" replace element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>
);
