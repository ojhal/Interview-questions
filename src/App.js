
import './App.css';
import Login from './components/Login';
import Profile  from './components/Profile';
import UserContextProvider from './context/UserContxetProvider';

function App() {
  return (
   <UserContextProvider>
    <h1>Using Context API</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  );
}

export default App;
