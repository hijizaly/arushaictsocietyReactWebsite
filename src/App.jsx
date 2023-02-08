import {Routes, Route} from 'react-router-dom';
// import Public from "./components/Public";
import Public from "./components/Public2";
import DashLayout from "./components/dashComponents/DashLayout";
import Layout from "./components/Layout";
import UserDashProfile from "./features/users/userDashProfile";
import UsersList from "./features/users/UsersList";
import SkillsList from "./features/skills/SkillsList";
import PrivateRoute from "./features/auth/PrivateRoute";

function App (){
    // console.log(decodedToken?.exp* 1000<Date.now());

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Public />}/>
                {/*<Route path="login" element={<Public />}/>*/}

                {/*<PrivateRoute>*/}
                <Route path="dash" element={<PrivateRoute/>}>

                    {/*<Route path="dash" element={<DashLayout />}>*/}
                        <Route index element={<UserDashProfile />}/>
                        {/*<Route path="notes">*/}
                        {/*    <Route index element={<NotesList/>}/>*/}
                        {/*</Route>*/}
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
