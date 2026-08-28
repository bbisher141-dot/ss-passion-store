import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Signature Oversized Tee",
    category: "Men",
    price: 49,
    colors: ["Ivory", "Black", "Stone"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    name: "Premium Relaxed Shirt",
    category: "Men",
    price: 75,
    colors: ["White", "Sand", "Black"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    name: "Essential Polo",
    category: "Men",
    price: 65,
    colors: ["Cream", "Charcoal", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image:
      "https://images.unsplash.com/photo-1625910513413-5fc45b7b9e72?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    name: "Tailored Relaxed Trousers",
    category: "Men",
    price: 89,
    colors: ["Black", "Taupe", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    name: "Signature Blazer",
    category: "Men",
    price: 149,
    colors: ["Charcoal", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    name: "Minimal Overshirt",
    category: "Men",
    price: 85,
    colors: ["Stone", "Black", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 7,
    name: "Relaxed Satin Shirt",
    category: "Women",
    price: 79,
    colors: ["Champagne", "Black", "Ivory"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 8,
    name: "Minimal Midi Dress",
    category: "Women",
    price: 109,
    colors: ["Black", "Cream", "Taupe"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 9,
    name: "Wide-Leg Trousers",
    category: "Women",
    price: 95,
    colors: ["Beige", "Black", "Stone"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d4f3e1?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 10,
    name: "Signature Knit Cardigan",
    category: "Women",
    price: 99,
    colors: ["Cream", "Brown", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 11,
    name: "Premium Knit Sweater",
    category: "Unisex",
    price: 95,
    colors: ["Cream", "Charcoal", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 12,
    name: "Straight-Leg Denim",
    category: "Unisex",
    price: 89,
    colors: ["Indigo", "Washed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90",
  },
];

function App() {
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category || product.category === "Unisex"
        );

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[1] || product.sizes[0]);
    setSelectedColor(product.colors[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = () => {
    if (!selectedProduct) return;

    const item = {
      ...selectedProduct,
      size: selectedSize,
      color: selectedColor,
      cartId: `${selectedProduct.id}-${selectedSize}-${selectedColor}`,
    };

    setCart((current) => [...current, item]);
    setCartOpen(true);
    setSelectedProduct(null);
  };

  const removeFromCart = (cartId) => {
    setCart((current) => current.filter((item) => item.cartId !== cartId));
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">

      {/* TOP BAR */}
      <div className="announcement">
        FREE INTERNATIONAL SHIPPING ON ORDERS OVER $150
      </div>

      {/* HEADER */}
      <header className="header">

        <button
          className="mobile-menu"
          onClick={() => document.body.classList.toggle("menu-open")}
        >
          ☰
        </button>

        <a className="logo" href="#">
          <span className="logo-mark">SS</span>
          <span>PASSION</span>
        </a>

        <nav className="nav">
          <button onClick={() => setCategory("Men")}>MEN</button>
          <button onClick={() => setCategory("Women")}>WOMEN</button>
          <button onClick={() => setCategory("All")}>NEW ARRIVALS</button>
          <a href="#collections">COLLECTIONS</a>
          <a href="#journal">JOURNAL</a>
        </nav>

        <div className="header-actions">
          <button>⌕</button>

          <button onClick={() => alert(`${wishlist.length} saved item(s)`)}>
            ♡
          </button>

          <button onClick={() => setCartOpen(true)}>
            BAG ({cart.length})
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">
            SS PASSION — NEW SEASON
          </p>

          <h1>
            WEAR YOUR
            <br />
            PASSION.
          </h1>

          <p className="hero-subtitle">
            Timeless pieces. Modern attitude.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => setCategory("Men")}
            >
              SHOP MEN
            </button>

            <button
              className="secondary-button"
              onClick={() => setCategory("Women")}
            >
              SHOP WOMEN
            </button>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="intro">

        <p className="eyebrow">
          THE SS PASSION EDIT
        </p>

        <h2>
          Modern fashion
          <br />
          with timeless appeal.
        </h2>

        <p className="intro-text">
          Thoughtfully designed essentials for modern life,
          created to move across seasons and generations.
        </p>

      </section>

      {/* PRODUCTS */}
      <section className="collection-section" id="collections">

        <div className="section-heading">

          <div>
            <p className="eyebrow">
              DISCOVER
            </p>

            <h2>
              {category === "All"
                ? "New Arrivals"
                : category}
            </h2>
          </div>

          <div className="category-buttons">
            <button onClick={() => setCategory("All")}>
              ALL
            </button>

            <button onClick={() => setCategory("Men")}>
              MEN
            </button>

            <button onClick={() => setCategory("Women")}>
              WOMEN
            </button>
          </div>

        </div>

        <div className="products">

          {filteredProducts.map((product) => (

            <article
              className="product"
              key={product.id}
            >

              <div
                className="product-image-wrap"
                onClick={() => openProduct(product)}
              >

                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />

                <span className="new-badge">
                  NEW
                </span>

                <button
                  className="wishlist"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                >
                  {wishlist.includes(product.id)
                    ? "♥"
                    : "♡"}
                </button>

                <button
                  className="quick-add"
                  onClick={(event) => {
                    event.stopPropagation();
                    openProduct(product);
                  }}
                >
                  QUICK VIEW
                </button>

              </div>

              <div className="product-info">

                <div>
                  <p className="product-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>
                </div>

                <p className="product-price">
                  ${product.price}.00
                </p>

              </div>

            </article>

          ))}

        </div>
      </section>

      {/* EDITORIAL */}
      <section className="editorial" id="women">

        <div className="editorial-image"></div>

        <div className="editorial-content">

          <p className="eyebrow">
            THE COLLECTION
          </p>

          <h2>
            Made for
            <br />
            every day.
          </h2>

          <p>
            Refined silhouettes, considered fabrics and
            effortless pieces designed to become part
            of your everyday wardrobe.
          </p>

          <button
            className="text-link"
            onClick={() => setCategory("All")}
          >
            EXPLORE COLLECTIONS →
          </button>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="story" id="men">

        <div className="story-content">

          <p className="eyebrow">
            OUR PHILOSOPHY
          </p>

          <h2>
            Style should
            <br />
            feel like you.
          </h2>

          <p>
            SS PASSION exists for modern individuals who
            want fashion to feel personal, effortless and
            timeless.
          </p>

          <p>
            We create pieces designed to move with you
            through different moments, seasons and
            generations.
          </p>

        </div>

      </section>

      {/* TRUST */}
      <section className="trust">

        <div>
          <strong>
            WORLDWIDE SHIPPING
          </strong>

          <span>
            Delivered internationally
          </span>
        </div>

        <div>
          <strong>
            SECURE PAYMENTS
          </strong>

          <span>
            Safe & protected checkout
          </span>
        </div>

        <div>
          <strong>
            EASY RETURNS
          </strong>

          <span>
            Simple return experience
          </span>
        </div>

        <div>
          <strong>
            CUSTOMER SUPPORT
          </strong>

          <span>
            We're here to help
          </span>
        </div>

      </section>

      {/* JOURNAL */}
      <section className="journal" id="journal">

        <div className="section-heading">

          <div>
            <p className="eyebrow">
              FROM THE JOURNAL
            </p>

            <h2>
              Stories & Style
            </h2>
          </div>

          <span className="journal-link">
            EXPLORE →
          </span>

        </div>

        <div className="journal-grid">

          <article>
            <div className="journal-image journal-one"></div>
            <p>STYLE GUIDE</p>
            <h3>
              The New Definition of Everyday Style
            </h3>
          </article>

          <article>
            <div className="journal-image journal-two"></div>
            <p>SS PASSION</p>
            <h3>
              Building a Timeless Wardrobe
            </h3>
          </article>

          <article>
            <div className="journal-image journal-three"></div>
            <p>THE EDIT</p>
            <h3>
              Modern Fashion Without Limits
            </h3>
          </article>

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">

        <p className="eyebrow">
          JOIN SS PASSION
        </p>

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

          <button>
            JOIN
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-brand">

          <div className="footer-logo">
            <span>SS</span>
            PASSION
          </div>

          <p>
            Modern fashion with timeless appeal.
          </p>

        </div>

        <div>
          <h4>SHOP</h4>
          <a href="#collections">Men</a>
          <a href="#collections">Women</a>
          <a href="#collections">New Arrivals</a>
          <a href="#collections">Collections</a>
          <a href="#collections">Sale</a>
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
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

      </footer>

      <div className="copyright">
        © 2026 SS PASSION. ALL RIGHTS RESERVED.
      </div>

      {/* PRODUCT DETAIL */}
      {selectedProduct && (

        <div className="modal-backdrop">

          <div className="product-modal">

            <button
              className="close-modal"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            <div className="modal-info">

              <p className="eyebrow">
                SS PASSION
              </p>

              <h2>
                {selectedProduct.name}
              </h2>

              <p className="modal-price">
                ${selectedProduct.price}.00
              </p>

              <div className="selector">

                <strong>
                  COLOUR
                </strong>

                <div className="options">

                  {selectedProduct.colors.map((color) => (

                    <button
                      key={color}
                      className={
                        selectedColor === color
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setSelectedColor(color)
                      }
                    >
                      {color}
                    </button>

                  ))}

                </div>

              </div>

              <div className="selector">

                <strong>
                  SIZE
                </strong>

                <div className="options">

                  {selectedProduct.sizes.map((size) => (

                    <button
                      key={size}
                      className={
                        selectedSize === size
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setSelectedSize(size)
                      }
                    >
                      {size}
                    </button>

                  ))}

                </div>

              </div>

              <button
                className="add-to-bag"
                onClick={addToCart}
              >
                ADD TO BAG — ${selectedProduct.price}.00
              </button>

              <p className="delivery">
                Worldwide shipping available.
                Free international shipping on
                orders over $150.
              </p>

            </div>

          </div>

        </div>

      )}

      {/* CART */}
      {cartOpen && (

        <div className="cart-backdrop">

          <aside className="cart">

            <div className="cart-header">

              <h2>
                YOUR BAG
              </h2>

              <button
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">
                <p>
                  Your bag is currently empty.
                </p>

                <button
                  onClick={() => setCartOpen(false)}
                >
                  CONTINUE SHOPPING
                </button>
              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.cartId}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div>

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          {item.color} · {item.size}
                        </p>

                        <strong>
                          ${item.price}.00
                        </strong>

                        <button
                          onClick={() =>
                            removeFromCart(item.cartId)
                          }
                        >
                          REMOVE
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="cart-footer">

                  <div className="cart-total">
                    <span>SUBTOTAL</span>
                    <strong>
                      ${total.toFixed(2)}
                    </strong>
                  </div>

                  {total < 150 && (
                    <p className="shipping-progress">
                      You're $
                      {(150 - total).toFixed(2)}
                      {" "}away from FREE international
                      shipping.
                    </p>
                  )}

                  <button
                    className="checkout-button"
                    onClick={() =>
                      alert(
                        "Checkout will be connected to PayPal in the next step."
                      )
                    }
                  >
                    CHECKOUT
                  </button>

                </div>

              </>

            )}

          </aside>

        </div>

      )}

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);
     
