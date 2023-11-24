import business from "../../Public/images/Nav/business-model.png"

export default function Nav() {
  return (
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-brand">
            <a class="navbar-item" href="/home">
              <img src={business}></img>
            </a>
            <a class="navbar-item">
              <strong>Supply Sage System</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}