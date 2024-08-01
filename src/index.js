import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from './routes/Root';
import Error from './routes/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux';

import RestaurantProfile from './routes/RestaurantProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />

        {/* {RestaurantData.map((i) => (<Route key={i.rota} path={`${i.rota}`} element={<RestaurantProfile />} />))} */}
        <Route path="/restaurant/:id" element={<RestaurantProfile />} />

        {/* No match route: */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
