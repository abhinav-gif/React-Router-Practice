import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import SharedProductLayout from "./pages/SharedProductLayout";
import { useState } from "react";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* nesting routes */}
          <Route path="/" element={<SharedLayout />}>
            {/* place common elements in shared layout */}
            <Route index element={<Home />} />
            {/* index represents the path of parent route ,use outlet component in shared layout to display the children route elements*/}
            <Route path="about" element={<About />} />
            <Route path="products" element={<SharedProductLayout />} >
              <Route index element={<Products />}></Route>
              <Route path=":productId" element={<SingleProduct />} />
              {/* : is used to send params in url useParams hook is used to retrieve them  */}
            </Route>
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="dashboard" element={
              <ProtectedRoute user={user}>
                {/* protectedRoute is rendered first as it is parent of dashboard 
                  if user does not exist we navigate to home route and prevent dashboard to render
                */}
                <Dashboard user={user} />
              </ProtectedRoute>

            } />
            {/* Alternative approach 
                <>
                  {!user&&<Navigate to="/">}
                  <Dashboard user={user} />
                </>  
                */}
            <Route path="*" element={<Error />} />
            {/* star represents all those pages and order matters in routes if none of the above page is found then last route is triggered with star path*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
