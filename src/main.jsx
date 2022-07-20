import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import { Home } from './home';

import { ImgExample } from './img/img-example';
import { ImgExampleOrderFixed } from './img/img-example-order-fixed';

import { PictureExample } from './picture/picture-example';
import { PictureExampleInnerHTMLFixed } from './picture/picture-example-inner-html-fixed';
import { PictureExampleLazyFixed } from './picture/picture-example-lazy-fixed';

import './index.css';

const Router =
  import.meta.env.VITE_REACT_APP_ROUTER === 'hash' ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <NavLink
        to="/"
        className="back-button"
        style={({ isActive }) => (isActive ? { display: 'none' } : {})}
      >
        Back
      </NavLink>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/img-example" element={<ImgExample />} />
        <Route
          path="/img-example-order-fixed"
          element={<ImgExampleOrderFixed />}
        />

        <Route path="/picture-example" element={<PictureExample />} />
        <Route
          path="/picture-example-inner-html-fixed"
          element={<PictureExampleInnerHTMLFixed />}
        />
        <Route
          path="/picture-example-lazy-fixed"
          element={<PictureExampleLazyFixed />}
        />
      </Routes>
      <a href="https://github.com/krydima/test-picture">GitHub Repo</a>
    </Router>
  </React.StrictMode>,
);
