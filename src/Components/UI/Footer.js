import React from "react";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <p>
        <small>©{currentYear} Created by Alam</small>
      </p>
    </footer>
  );
}

export default Footer;
