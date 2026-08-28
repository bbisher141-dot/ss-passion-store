import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">SS PASSION</div>

        <nav>
          <a href="#men">MEN</a>
          <a href="#women">WOMEN</a>
          <a href="#new">NEW ARRIVALS</a>
          <a href="#collections">COLLECTIONS</a>
        </nav>

        <div className="actions">
          <button>Search</button>
          <button>Bag (0)</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p>SS PASSION</p>
            <h1>
              WEAR YOUR
              <br />
              PASSION.
            </h1>
            <span>Timeless pieces. Modern attitude.</span>

            <div className="buttons">
              <button>SHOP MEN</button>
              <button>SHOP WOMEN</button>
            </div>
          </div>
        </section>

        <section className="intro">
          <p>THE SS PASSION EDIT</p>
          <h2>Modern fashion with timeless appeal.</h2>
        </section>

        <section className="products">
          <div className="product">
            <div className="product-image image-one"></div>
            <h3>Essential Oversized Tee</h3>
            <p>$49.00</p>
          </div>

          <div className="product">
            <div className="product-image image-two"></div>
            <h3>Signature Blazer</h3>
            <p>$129.00</p>
          </div>

          <div className="product">
            <div className="product-image image-three"></div>
            <h3>Essential Hoodie</h3>
            <p>$79.00</p>
          </div>

          <div className="product">
            <div className="product-image image-four"></div>
            <h3>Linen Relaxed Shirt</h3>
            <p>$69.00</p>
          </div>
        </section>

        <section className="story">
          <p>OUR PHILOSOPHY</p>
          <h2>Style should feel like you.</h2>
          <p>
            Considered everyday pieces created for modern life,
            designed to move across generations and seasons.
          </p>
        </section>
      </main>

      <footer>
        <div>
          <h3>SS PASSION</h3>
          <p>Wear your passion.</p>
        </div>

        <div>
          <h4>SHOP</h4>
          <p>Men</p>
          <p>Women</p>
          <p>New Arrivals</p>
          <p>Collections</p>
        </div>

        <div>
          <h4>HELP</h4>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Size Guide</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>JOIN SS PASSION</h4>
          <p>Discover new drops and collections.</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
