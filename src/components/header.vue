<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <a>Stock Trader</a>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link to="/portofolio" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Portofolio</a>
        </router-link>
        <router-link to="/stocks" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav mr-auto ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a href="#" class="dropdown-item">Save Data</a>
            </li>
            <li>
              <a href="#" class="dropdown-item">Load data</a>
            </li>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>



