import PropTypes from "prop-types"
import Investor from '../icons/investor.png'
import Developer from '../icons/developer.png'
import Community from '../icons/community.png'
import CarbonBond from '../icons/carbon-bond.png'
import Project from '../icons/project.png'

function Button({ label, backgroundColor = "red", size = "md", handleClick, logoNumber, routeTo}) {
  let scale = 1
  let logoNumbervariable = "2"
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor: "#FBE7A3",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: '5px',
    fontSize: '20px',
  }
  //style: 'bold'
  switch(logoNumber){
    case "1":
      logoNumbervariable=Investor
      break;
    case "2":
      logoNumbervariable=Developer
      break;
    case "3":
      logoNumbervariable=Community
      break;
    case "4":
      logoNumbervariable=CarbonBond
      break;
    case "5":
      logoNumbervariable=Project
      break;
    default:
      logoNumbervariable=Investor
      break;

  }



  return (
    <a href={routeTo}>
      <button onClick={handleClick} style={style}>
        <img src={logoNumbervariable} height = {100} width={100}/>
        <br />
        {label}
      </button>
    </a>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  logoNumber: PropTypes.string,
  routeTo: PropTypes.string
}

export default Button