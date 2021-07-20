import React from "react";

function NavBar() {

  const links = ["home", "about", "projects"];

  let linkLis = links.map(link => {
    return <a href={`#`+link} key={link}>{link}</a>;
  })

  return (
  <nav>
      {linkLis}
  </nav>
  )
}

export default NavBar;
