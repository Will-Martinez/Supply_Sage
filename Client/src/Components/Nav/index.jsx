export default function Nav() {
    return (
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Menu
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="/products">
            Products
          </a>
          <a class="navbar-item" href="/home">
            Home
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}