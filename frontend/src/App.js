
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Feed from './pages/feed/Feed'
import Explore from './pages/Explore/Explore';
import Notifications from './pages/Notifications/Notifications';
import Messages from './pages/Messages/Messages';
import BookMarks from './pages/Bookmarks/BookMarks';
import Communities from './pages/Communities/Communities';
import Premium from './pages/Preminum/Premium';
import Profile from './pages/Profile/Profile';
import More from './pages/More/More';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}>
    <Route index element={<Feed/>}></Route>
    </Route>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}>
<Route path='Feed' element={<Feed/>}/>
<Route path='Explore' element={<Explore/>}/>
<Route path='Notifications' element={<Notifications/>}/>
<Route path='Messages' element={<Messages/>}/>
<Route path='BookMarks' element={<BookMarks/>}/>
<Route path='Communities' element={<Communities/>}/>
<Route path='Premium' element={<Premium/>}/>
<Route path='Profile' element={<Profile/>}/>
<Route path='More' element={<More/>}/>
    </Route>
    <Route path='/Login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/page-loading' element={<PageLoading/>} />
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
