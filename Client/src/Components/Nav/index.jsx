import business from "../../Public/images/Nav/business-model.png"

export default function Nav() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-brand">
            <a className="navbar-item" href="/home">
              <img src={business}></img>
            </a>
            <a className="navbar-item">
              <strong>Supply Sage System</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}