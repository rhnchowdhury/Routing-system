import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Blog from "./Components/Blogs/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Homes/Home";
import Header from "./Components/Headers/Header";
import AllBlog from "./Components/AllBlogs/AllBlog";
import Error from "./Components/Errors/Error";
import User from "./Components/Users/User";
import DashBoard from "./Components/DashBoard/DashBoard";
import { useState } from "react";
import Protected from "./Components/Protected/Protected";

function App() {
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div style={{ marginTop: "5px" }}>
          {isLogIn ? (
            <button onClick={() => setIsLogIn(!isLogIn)}>Log Out</button>
          ) : (
            <button onClick={() => setIsLogIn(!isLogIn)}>Log In</button>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:title" element={<AllBlog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<Error />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route
            path="/add"
            element={
              <Protected isLogIn={isLogIn}>
                <DashBoard></DashBoard>
              </Protected>
            }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
