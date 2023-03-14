import freeCodeCampLogo from "../assets/img/freecodecamp-logo.png";

function FreeCodeCampLogo () {
    return (
        <div className="container-freecodecamp-logo">
            <img 
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de freeCodeCamp" />
      </div>
    )
}

export default FreeCodeCampLogo;