import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile';
import Requirement from './Components/Requirement';
import Biding from './Components/Biding';
import EditProfile from './Components/EditProfile';
import Sidebar from './Components/Sidebar';
import AddRequirement from './Components/AddRequirement';
import AddBiding from './Components/AddBiding';
import ViewBiding from './Components/ViewBiding';


function App() {
  return (
   <>
  <BrowserRouter>
  <Sidebar/>
<Routes>
  <Route path='/' exact element={<Profile/>}/>
  <Route path='/requirement' exact element={<Requirement/>}/>
  <Route path='/biding' exact element={<Biding/>}/>
  <Route path='/editprofile/:id' exact element={<EditProfile/>}/>
  <Route path='/addrequirement' exact element={<AddRequirement/>}/>
  <Route path='/addbiding' exact element={<AddBiding/>}/>
  <Route path='/viewbiding/:id' exact element={<ViewBiding/>}/>

</Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
