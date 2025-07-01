
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h2>Chirag Parihar</h2>
      <Login />
      <Profile/ >
    </UserContextProvider>
  )
}

export default App
