import {Route, Routes} from "react-router-dom";
import Layout from "./pages/nav/nav.jsx";
import Home from "./pages/home/home.jsx";
import Search from "./pages/search/search.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/sign-up/signUp.jsx";
import Profile from "./pages/profile/profile.jsx";
import Creat from "./pages/create/creat.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="create" element={<Creat/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Route>
        </Routes>
    );
}

export default App;
