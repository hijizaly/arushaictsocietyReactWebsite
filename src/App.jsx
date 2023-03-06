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
import AdminLoginPage from "./features/admin/adminLogin";
import AdminDash from "./features/admin/adminDash";
import SkillsManager from "./features/skills/skillsManager";
import ContentsManager from "./features/contents/contentsManager";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Public/>}/>
                <Route path="aboutUs" element={<AboutUsPage/>}/>
                <Route path="allMembers" element={<MembersList/>}/>
                <Route path="helpCenter" element={<HelpCenterPages/>}/>
                <Route path="partners" element={<PartnersPages/>}/>
                <Route path="administrator" element={<AdminLoginPage/>}/>


                {/*<PrivateRoute>*/}
                <Route path="dash" element={<PrivateRoute/>}>

                    {/*<Route path="dash" element={<DashLayout />}>*/}
                    <Route index element={<UserDashProfile/>}/>
                    <Route path="users">
                        <Route index element={<UsersList/>}/>
                    </Route>
                    <Route path="skills">
                        <Route index element={<SkillsList/>}/>
                    </Route>
                    {/*</Route>/!*endOfDash*!/*/}

                </Route>


                <Route path="admin-dash" element={<PrivateRoute/>}>

                    <Route index element={<AdminDash/>}/>
                    <Route path="skillsManager">
                        <Route index element={<SkillsManager/>}/>
                    </Route>
                    <Route path="membersManager">
                        <Route index element={<UsersList/>} />
                    </Route>
                    <Route path="contentsManager">
                        <Route index element={<ContentsManager/>}/>
                    </Route>

                </Route>

                {/*</PrivateRoute>*/}


                {/*<Route path="admin" element={<DashLayout/>}>*/}

                {/*</Route>*/}
            </Route>
        </Routes>
    );
}

export default App
