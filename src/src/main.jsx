import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    name: "Essential Oversized Tee",
    price: "$49.00",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Signature Blazer",
    price: "$129.00",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Essential Hoodie",
    price: "$79.00",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Linen Relaxed Shirt",
    price: "$69.00",
    image:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  return (
    <div className="app">
      <div className="announcement">
        FREE INTERNATIONAL SHIPPING ON ORDERS OVER $150
      </div>

      <header className="header">
        <div className="logo">SS PASSION</div>

        <nav>
          <a href="#men">MEN</a>
          <a href="#women">WOMEN</a>
          <a href="#new">NEW ARRIVALS</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#journal">JOURNAL</a>
        </nav>

        <div className="actions">
          <button>Search</button>
          <button>♡</button>
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
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div
                className="product-image"
                style={{ backgroundImage: `url("${product.image}")` }}
              />

              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          ))}
        </section>

        <section className="story">
          <p>OUR PHILOSOPHY</p>

          <h2>Style should feel like you.</h2>

          <p>
            Considered everyday pieces created for modern life, designed to
            move across generations and seasons.
          </p>
        </section>

        <section className="newsletter">
          <p>JOIN SS PASSION</p>
          <h2>Be first to discover new drops.</h2>

          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>JOIN</button>
          </div>
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
          <p>Sale</p>
        </div>

        <div>
          <h4>HELP</h4>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Size Guide</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>FOLLOW</h4>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Pinterest</p>
          <p>YouTube</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
