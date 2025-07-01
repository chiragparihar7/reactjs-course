import './App.css'
import Login from './component/login'
import Profile from './component/Profile'
import { UserContextProvider } from './UserContext1'

function App() {  
  return (
    <UserContextProvider>
      <h1>Chirag Parihar</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
