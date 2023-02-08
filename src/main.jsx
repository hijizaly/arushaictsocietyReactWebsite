import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";

import {store} from "./app/store";
import {Provider} from "react-redux";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import {membersApi} from "./features/users/usersApiSlice2";

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <ApiProvider api={membersApi}>
          <React.StrictMode>
              <BrowserRouter>
                  <Routes>
                      <Route path="/*" element={<App/>}/>
                  </Routes>
              </BrowserRouter>
          </React.StrictMode>
        </ApiProvider>
    </Provider>

        )
