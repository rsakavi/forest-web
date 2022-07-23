import Navbar from "./components/navbar"
import Button from "./components/Button"

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="titulo">Productos para Inversionistas </div>
      <section className="buttondiv">
        <Button logoNumber={"4"} label= "Bonos" routeTo="/mapa-bonos"/>
        <Button logoNumber={"5"} label= "Proyectos" routeTo="/mapa-bonos"/>
      </section>
    </div>
  )
}

export default Profile

