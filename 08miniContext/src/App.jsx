import './App.css'
import Login from './component/login'
import Profile from './component/Profile'
import UserContextProvider from './Context/userContextProvider'
function App() {  
  return (
    <userContextProvider>
      <h1>Chirag Parihar</h1>
      <Login />
      <Profile />
    </userContextProvider>
  )
}

export default App
