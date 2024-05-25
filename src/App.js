import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useRoutes } from "react-router-dom";

import NoPage from "./pages/NoPage.jsx"
import RouterApp from "./routers";
import Contact from "./pages/frontend/Contact.jsx";
import ProductBrand from "./pages/frontend/ProductBrand.jsx";
import LayoutSite from "./layouts/LayoutSite/index.jsx";
import LayoutAdmin from "./layouts/LayoutAdmin/index.jsx";
function App() {
    let element = useRoutes([
      {
        path: "/",
        element: <LayoutSite />,
        children: RouterApp.RouterSite,
      },
      {
        path: "admin",
        element: <LayoutAdmin />,
        children: RouterApp.RouterAdmin,
      },
      {
         path: "*",
        element: <NoPage /> 
      },
        ]);
    
    return element;
    
  };

export default App;