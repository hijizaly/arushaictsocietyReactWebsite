import {Routes, Route} from 'react-router-dom';
// import Public from "./components/Public";
import Public from "./components/Public2";
import DashLayout from "./components/dashComponents/DashLayout";
import Layout from "./components/Layout";
import UserDashProfile from "./features/users/userDashProfile";
import UsersList from "./features/users/UsersList";
import SkillsList from "./features/skills/SkillsList";
import PrivateRoute from "./features/auth/PrivateRoute";
import MembersList from "./features/users/membersList";
import AboutUsPage from "./components/landPageComponents/AboutUsPage";
import {HelpCenter} from "@mui/icons-material";
import HelpCenterPages from "./components/landPageComponents/HelpCenterPage";
import PartnersPages from "./components/landPageComponents/partnersPages";

function App (){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Public />}/>
                <Route path="aboutUs" element={<AboutUsPage />}/>
                <Route path="allMembers" element={<MembersList/>}/>
                <Route path="helpCenter" element={<HelpCenterPages/>}/>
                <Route path="partners" element={<PartnersPages/>}/>


                {/*<PrivateRoute>*/}
                <Route path="dash" element={<PrivateRoute/>}>

                    {/*<Route path="dash" element={<DashLayout />}>*/}
                        <Route index element={<UserDashProfile />}/>
                        <Route path="users">
                            <Route index element={<UsersList/>}/>
                        </Route>
                        <Route path="skills">
                            <Route index element={<SkillsList/>}/>
                        </Route>
                    {/*</Route>/!*endOfDash*!/*/}

                </Route>

                {/*</PrivateRoute>*/}


                <Route path="admin" element={<DashLayout/>}>

                </Route>
            </Route>
        </Routes>
    );
}

export default App
