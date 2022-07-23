import Investor from './icons/investor.png'
import Developer from './icons/developer.png'
import Community from './icons/community.png'
import CarbonBond from './icons/carbon-bond.png'
import Project from './icons/project.png'
import Navbar from "./components/navbar"
import Button from "./components/Button"
import "./components/styles/navbar.css";

function App() {
  return (
    <div>
      <Navbar />
      <section className="buttondiv">
        <Button logoNumber={"1"} label= "Inversionista" routeTo="/inversion"/>
        <Button logoNumber={"2"} label= "Desarrollador" routeTo="/inversion"/>
        <Button logoNumber={"3"} label= "Comunidad"     routeTo="/inversion"/>
      </section>
    </div>
  )
}

export default App

