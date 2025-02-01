import './App.css'
import UserCard from './components/UserCard'
import userimg from "../src/assets/userimg.png"
import userimg2 from "../src/assets/userimg2.png"
import userimg3 from "../src/assets/userimg3.png"


function App() {

  return (
    <div className="container">
      <UserCard name="Manish Balai" desc="Description of Manish Balai" image={userimg} style={{"border-radius":"8px"}}/>
      <UserCard name="Raj Mistry" desc="Description of Raj Mistry" image={userimg2} style={{"border-radius":"8px"}}/>
      <UserCard name="Namra Panchal" desc="Description of Namra Panchal" image={userimg3} style={{"border-radius":"8px"}}/>
    </div>
  )
}

export default App
