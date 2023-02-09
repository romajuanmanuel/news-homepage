import React from "react";
import "../styles/Footer.css";
import retro from "../img/image-retro-pcs.jpg";
import laptop from "../img/image-top-laptops.jpg";
import gaming from "../img/image-gaming-growth.jpg";

function Footer() {
  return (
    <div className="cards">
      <article>
        <img src={retro} alt="" />
        <div>
          <span>01</span>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>

      <article>
        <img src={laptop} alt="" />
        <div>
          <span>02</span>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </article>

      <article>
        <img src={gaming} alt="" />
        <div>
          <span>03</span>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </div>
  );
}

export default Footer;
