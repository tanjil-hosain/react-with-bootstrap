import React from 'react'

export default function Nav() {
  return (
<>
<nav classname="navbar navbar-expand-sm bg-dark navbar-dark">
  <div classname="container-fluid">
    <ul classname="navbar-nav">
      <li classname="nav-item">
        <a classname="nav-link active" href="#">Active</a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link" href="#">Link</a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link" href="#">Link</a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>


</>
  )
}
