/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { ToastContainer } from 'react-toastify';

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Notification;
