import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    name: "Essential Oversized Tee",
    price: "$49.00",
    category: "MEN",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "Signature Blazer",
    price: "$129.00",
    category: "WOMEN",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "Essential Hoodie",
    price: "$79.00",
    category: "MEN",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "Linen Relaxed Shirt",
    price: "$69.00",
    category: "WOMEN",
    image:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=90",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (name) => {
    setWishlist((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  return (
    <div className="app">

      {/* ANNOUNCEMENT */}
      <div className="announcement">
        FREE INTERNATIONAL SHIPPING ON ORDERS OVER $150
      </div>

      {/* HEADER */}
      <header className="header">

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <a href="#" className="logo">
          <span className="logo-mark">SS</span>
          <span>PASSION</span>
        </a>

        <nav className={menuOpen ? "nav mobile-open" : "nav"}>
          <a href="#men">MEN</a>
          <a href="#women">WOMEN</a>
          <a href="#new">NEW ARRIVALS</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#journal">JOURNAL</a>
        </nav>

        <div className="header-actions">
          <button aria-label="Search">⌕</button>

          <button
            aria-label="Wishlist"
            onClick={() => alert(`Wishlist: ${wishlist.length} item(s)`)}
          >
            ♡
          </button>

          <button
            className="bag"
            onClick={() => alert(`Your bag has ${cartCount} item(s).`)}
          >
            BAG ({cartCount})
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>

        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="eyebrow">SS PASSION — NEW SEASON</p>

            <h1>
              WEAR YOUR
              <br />
              PASSION.
            </h1>

            <p className="hero-subtitle">
              Timeless pieces. Modern attitude.
            </p>

            <div className="hero-buttons">
              <a href="#men" className="primary-button">
                SHOP MEN
              </a>

              <a href="#women" className="secondary-button">
                SHOP WOMEN
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro">
          <p className="eyebrow">THE SS PASSION EDIT</p>

          <h2>
            Modern fashion
            <br />
            with timeless appeal.
          </h2>

          <p className="intro-text">
            Thoughtfully designed essentials for people who believe
            personal style should never have an expiration date.
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="collection-section" id="new">

          <div className="section-heading">
            <div>
              <p className="eyebrow">DISCOVER</p>
              <h2>New Arrivals</h2>
            </div>

            <a href="#collections">VIEW ALL →</a>
          </div>

          <div className="products">

            {products.map((product) => (
              <article className="product" key={product.name}>

                <div className="product-image-wrap">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <span className="new-badge">NEW</span>

                  <button
                    className="wishlist"
                    onClick={() => toggleWishlist(product.name)}
                    aria-label="Add to wishlist"
                  >
                    {wishlist.includes(product.name) ? "♥" : "♡"}
                  </button>

                  <button
                    className="quick-add"
                    onClick={() => setCartCount(cartCount + 1)}
                  >
                    QUICK ADD
                  </button>
                </div>

                <div className="product-info">
                  <div>
                    <p className="product-category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>
                  </div>

                  <p className="product-price">
                    {product.price}
                  </p>
                </div>

              </article>
            ))}

          </div>
        </section>

        {/* COLLECTION BANNER */}
        <section className="editorial">

          <div className="editorial-image"></div>

          <div className="editorial-content">
            <p className="eyebrow">THE COLLECTION</p>

            <h2>
              Made for
              <br />
              every day.
            </h2>

            <p>
              Refined silhouettes, considered fabrics and effortless
              pieces designed to become part of your everyday wardrobe.
            </p>

            <a href="#collections" className="text-link">
              EXPLORE COLLECTIONS →
            </a>
          </div>

        </section>

        {/* PHILOSOPHY */}
        <section className="story">

          <div className="story-content">
            <p className="eyebrow">OUR PHILOSOPHY</p>

            <h2>
              Style should
              <br />
              feel like you.
            </h2>

            <p>
              SS PASSION exists for modern individuals who want
              fashion to feel personal, effortless and timeless.
              We create pieces designed to move with you through
              different moments, seasons and generations.
            </p>

            <a href="#journal" className="text-link">
              OUR STORY →
            </a>
          </div>

        </section>

        {/* TRUST */}
        <section className="trust">

          <div>
            <strong>WORLDWIDE SHIPPING</strong>
            <span>Delivered internationally</span>
          </div>

          <div>
            <strong>SECURE PAYMENTS</strong>
            <span>Safe & protected checkout</span>
          </div>

          <div>
            <strong>EASY RETURNS</strong>
            <span>Simple return experience</span>
          </div>

          <div>
            <strong>SUPPORT</strong>
            <span>We're here to help</span>
          </div>

        </section>

        {/* JOURNAL */}
        <section className="journal" id="journal">

          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM THE JOURNAL</p>
              <h2>Stories & Style</h2>
            </div>

            <a href="#journal">VIEW JOURNAL →</a>
          </div>

          <div className="journal-grid">

            <article>
              <div className="journal-image journal-one"></div>
              <p>STYLE GUIDE</p>
              <h3>The New Definition of Everyday Style</h3>
            </article>

            <article>
              <div className="journal-image journal-two"></div>
              <p>SS PASSION</p>
              <h3>Building a Timeless Wardrobe</h3>
            </article>

            <article>
              <div className="journal-image journal-three"></div>
              <p>EDIT</p>
              <h3>Modern Fashion Without Limits</h3>
            </article>

          </div>

        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">

          <p className="eyebrow">JOIN SS PASSION</p>

          <h2>
            Be the first to discover
            <br />
            new drops & stories.
          </h2>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
            />

            <button>JOIN</button>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          <div className="footer-logo">
            <span>SS</span> PASSION
          </div>

          <p>
            Modern fashion with timeless appeal.
          </p>
        </div>

        <div>
          <h4>SHOP</h4>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#new">New Arrivals</a>
          <a href="#collections">Collections</a>
          <a href="#sale">Sale</a>
        </div>

        <div>
          <h4>HELP</h4>
          <a href="#contact">Contact</a>
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
          <a href="#size">Size Guide</a>
          <a href="#faq">FAQ</a>
        </div>

        <div>
          <h4>ABOUT</h4>
          <a href="#story">Our Story</a>
          <a href="#journal">Journal</a>
          <a href="#careers">Careers</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

      </footer>

      <div className="copyright">
        © 2026 SS PASSION. ALL RIGHTS RESERVED.
      </div>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
