import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =====================================================
   SS PASSION — PRODUCT DATA
   Each colour has its own image.
   ===================================================== */

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
    colorImages: {
      Ivory:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=90",
      Stone:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      White:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=90",
      Sand:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Cream:
        "https://images.unsplash.com/photo-1625910513413-5fc45b7b9e72?auto=format&fit=crop&w=1000&q=90",
      Charcoal:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=1000&q=90",
      Olive:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Black:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=90",
      Taupe:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=90",
      Stone:
        "https://images.unsplash.com/photo-1624378440072-ecaa0b9c0c7a?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Charcoal:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=90",
      Beige:
        "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Stone:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=90",
      Olive:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Champagne:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=90",
      Ivory:
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Black:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=90",
      Cream:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=90",
      Taupe:
        "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Beige:
        "https://images.unsplash.com/photo-1506629905607-d9c297d4f3e1?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=90",
      Stone:
        "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Cream:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=90",
      Brown:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Cream:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=90",
      Charcoal:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=90",
      Brown:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Indigo:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90",
      "Washed Black":
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=1000&q=90",
    },
  },
];

/* =====================================================
   JOURNAL
   ===================================================== */

const stories = [
  {
    id: 1,
    tag: "STYLE GUIDE",
    title: "The New Definition of Everyday Style",
    text:
      "Discover simple ways to build a refined wardrobe that feels modern without following every trend.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    tag: "SS PASSION",
    title: "Building a Timeless Wardrobe",
    text:
      "A thoughtful wardrobe starts with versatile pieces that work together season after season.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    tag: "THE EDIT",
    title: "Modern Fashion Without Limits",
    text:
      "Explore the SS PASSION approach to effortless silhouettes, confident details and personal style.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=90",
  },
];

/* =====================================================
   APP
   ===================================================== */

function App() {
  const [category, setCategory] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  /* =====================================================
     SCROLL
     ===================================================== */

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =====================================================
     FILTER
     ===================================================== */

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" ||
      product.category === category ||
      product.category === "Unisex";

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  /* =====================================================
     OPEN PRODUCT
     ===================================================== */

  const openProduct = (product) => {
    const firstColor = product.colors[0];
    const firstSize = product.sizes[0];

    setSelectedProduct(product);
    setSelectedColor(firstColor);
    setSelectedSize(firstSize);
  };

  /* =====================================================
     CLOSE PRODUCT
     ===================================================== */

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedColor("");
    setSelectedSize("");
  };

  /* =====================================================
     GET CURRENT PRODUCT IMAGE
     
     THIS IS THE IMPORTANT FIX.
     
     The image changes whenever selectedColor changes.
     ===================================================== */

  const getSelectedProductImage = () => {
    if (!selectedProduct) return "";

    return (
      selectedProduct.colorImages?.[selectedColor] ||
      selectedProduct.image
    );
  };

  /* =====================================================
     ADD TO CART
     ===================================================== */

  const addToCart = () => {
    if (!selectedProduct) return;

    if (!selectedColor || !selectedSize) {
      alert("Please select a colour and size.");
      return;
    }

    const selectedImage = getSelectedProductImage();

    const cartId =
      selectedProduct.id +
      "-" +
      selectedSize +
      "-" +
      selectedColor;

    setCart((current) => {
      const existing = current.find(
        (item) => item.cartId === cartId
      );

      if (existing) {
        return current.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...selectedProduct,

          /* Save selected variant */
          size: selectedSize,
          color: selectedColor,

          /* Save the selected colour image */
          image: selectedImage,

          cartId,
          quantity: 1,
        },
      ];
    });

    closeProduct();
    setCartOpen(true);
  };

  /* =====================================================
     QUANTITY
     ===================================================== */

  const updateQuantity = (cartId, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =====================================================
     REMOVE CART
     ===================================================== */

  const removeFromCart = (cartId) => {
    setCart((current) =>
      current.filter((item) => item.cartId !== cartId)
    );
  };

  /* =====================================================
     WISHLIST
     ===================================================== */

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* =====================================================
     TOTALS
     ===================================================== */

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const wishlistProducts = products.filter(
    (product) => wishlist.includes(product.id)
  );

  /* =====================================================
     RENDER
     ===================================================== */

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
          type="button"
          onClick={() => scrollTo("collections")}
        >
          ☰
        </button>

        <button
          className="logo"
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <span className="logo-mark">
            SS
          </span>

          <span>
            PASSION
          </span>
        </button>

        <nav className="nav">

          <button
            type="button"
            onClick={() => {
              setCategory("Men");
              scrollTo("collections");
            }}
          >
            MEN
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("Women");
              scrollTo("collections");
            }}
          >
            WOMEN
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("All");
              scrollTo("collections");
            }}
          >
            NEW ARRIVALS
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("collections")
            }
          >
            COLLECTIONS
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("journal")
            }
          >
            JOURNAL
          </button>

        </nav>

        <div className="header-actions">

          <button
            type="button"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            type="button"
            onClick={() =>
              setWishlistOpen(true)
            }
            aria-label="Wishlist"
          >
            {wishlist.length > 0
              ? "♥"
              : "♡"}
          </button>

          <button
            type="button"
            onClick={() =>
              setCartOpen(true)
            }
          >
            BAG ({totalItems})
          </button>

        </div>

      </header>

      {/* SEARCH */}

      {searchOpen && (
        <div className="search-panel">

          <input
            autoFocus
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setSearchOpen(false);
                scrollTo("collections");
              }
            }}
            placeholder="Search products..."
          />

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSearchOpen(false);
            }}
          >
            ×
          </button>

        </div>
      )}

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
              type="button"
              onClick={() => {
                setCategory("Men");
                scrollTo("collections");
              }}
            >
              SHOP MEN
            </button>

            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                setCategory("Women");
                scrollTo("collections");
              }}
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
          Thoughtfully designed essentials for
          modern life, created to move across
          seasons and generations.
        </p>

      </section>

      {/* COLLECTION */}

      <section
        className="collection-section"
        id="collections"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              DISCOVER
            </p>

            <h2>
              {search
                ? `Search: ${search}`
                : category === "All"
                ? "New Arrivals"
                : category}
            </h2>

          </div>

          <div className="category-buttons">

            <button
              type="button"
              className={
                category === "All"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory("All")
              }
            >
              ALL
            </button>

            <button
              type="button"
              className={
                category === "Men"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory("Men")
              }
            >
              MEN
            </button>

            <button
              type="button"
              className={
                category === "Women"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory("Women")
              }
            >
              WOMEN
            </button>

          </div>

        </div>

        <div className="products">

          {filteredProducts.length === 0 ? (

            <div className="empty-search">

              <h3>
                No products found.
              </h3>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                VIEW ALL PRODUCTS
              </button>

            </div>

          ) : (

            filteredProducts.map(
              (product) => (

                <article
                  className="product"
                  key={product.id}
                >

                  <div
                    className="product-image-wrap"
                    onClick={() =>
                      openProduct(product)
                    }
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
                      type="button"
                      aria-label="Add to wishlist"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleWishlist(
                          product.id
                        );
                      }}
                    >
                      {wishlist.includes(
                        product.id
                      )
                        ? "♥"
                        : "♡"}
                    </button>

                    <button
                      className="quick-add"
                      type="button"
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

              )
            )

          )}

        </div>

      </section>

      {/* EDITORIAL */}

      <section className="editorial">

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
            Refined silhouettes, considered
            fabrics and effortless pieces designed
            to become part of your everyday
            wardrobe.
          </p>

          <button
            className="text-link"
            type="button"
            onClick={() => {
              setCategory("All");
              scrollTo("collections");
            }}
          >
            EXPLORE COLLECTIONS →
          </button>

        </div>

      </section>

      {/* STORY */}

      <section
        className="story"
        id="story"
      >

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
            SS PASSION exists for modern
            individuals who want fashion to feel
            personal, effortless and timeless.
          </p>

          <p>
            We create pieces designed to move
            with you through different moments,
            seasons and generations.
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

      <section
        className="journal"
        id="journal"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              FROM THE JOURNAL
            </p>

            <h2>
              Stories & Style
            </h2>

          </div>

          <button
            className="journal-link"
            type="button"
            onClick={() =>
              scrollTo("journal")
            }
          >
            EXPLORE →
          </button>

        </div>

        <div className="journal-grid">

          {stories.map((story) => (

            <article
              key={story.id}
              onClick={() =>
                setSelectedStory(story)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setSelectedStory(story);
                }
              }}
            >

              <div
                className="journal-image"
                style={{
                  backgroundImage:
                    `url("${story.image}")`,
                }}
              ></div>

              <p>
                {story.tag}
              </p>

              <h3>
                {story.title}
              </h3>

              <span className="read-story">
                READ STORY →
              </span>

            </article>

          ))}

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

        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();

            alert(
              "Welcome to SS PASSION."
            );
          }}
        >

          <input
            type="email"
            required
            placeholder="Your email address"
          />

          <button type="submit">
            JOIN
          </button>

        </form>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-brand">

          <div className="footer-logo">

            <span>
              SS
            </span>

            PASSION

          </div>

          <p>
            Modern fashion with timeless appeal.
          </p>

        </div>

        <div>

          <h4>
            SHOP
          </h4>

          <button
            type="button"
            onClick={() => {
              setCategory("Men");
              scrollTo("collections");
            }}
          >
            Men
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("Women");
              scrollTo("collections");
            }}
          >
            Women
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("All");
              scrollTo("collections");
            }}
          >
            New Arrivals
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("collections")
            }
          >
            Collections
          </button>

        </div>

        <div>

          <h4>
            HELP
          </h4>

          <button
            type="button"
            onClick={() =>
              alert(
                "Shipping information will be available at checkout."
              )
            }
          >
            Shipping
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Our return policy will be available soon."
              )
            }
          >
            Returns
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Size guide coming soon."
              )
            }
          >
            Size Guide
          </button>

          <button
            type="button"
            onClick={() =>
              alert("FAQ coming soon.")
            }
          >
            FAQ
          </button>

        </div>

        <div>

          <h4>
            ABOUT
          </h4>

          <button
            type="button"
            onClick={() =>
              scrollTo("story")
            }
          >
            Our Story
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("journal")
            }
          >
            Journal
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Privacy policy will be published before launch."
              )
            }
          >
            Privacy
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Terms & conditions will be published before launch."
              )
            }
          >
            Terms
          </button>

        </div>

      </footer>

      {/* COPYRIGHT */}

      <div className="copyright">
        © 2026 SS PASSION. ALL RIGHTS RESERVED.
      </div>

      {/* =====================================================
          PRODUCT MODAL
          ===================================================== */}

      {selectedProduct && (

        <div
          className="modal-backdrop"
          onClick={closeProduct}
        >

          <div
            className="product-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-modal"
              type="button"
              onClick={closeProduct}
            >
              ×
            </button>

            {/* PRODUCT IMAGE */}

            <div className="modal-image">

              <img
                src={getSelectedProductImage()}
                alt={`${selectedProduct.name} - ${selectedColor}`}
              />

            </div>

            {/* PRODUCT INFO */}

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

              {/* COLOUR */}

              <div className="selector">

                <strong>
                  COLOUR — {selectedColor}
                </strong>

                <div className="options">

                  {selectedProduct.colors.map(
                    (color) => (

                      <button
                        key={color}
                        type="button"
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

                    )
                  )}

                </div>

              </div>

              {/* SIZE */}

              <div className="selector">

                <strong>
                  SIZE — {selectedSize}
                </strong>

                <div className="options">

                  {selectedProduct.sizes.map(
                    (size) => (

                      <button
                        key={size}
                        type="button"
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

                    )
                  )}

                </div>

              </div>

              {/* ADD TO BAG */}

              <button
                className="add-to-bag"
                type="button"
                onClick={addToCart}
              >
                ADD TO BAG — $
                {selectedProduct.price}.00
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

      {/* =====================================================
          STORY MODAL
          ===================================================== */}

      {selectedStory && (

        <div
          className="modal-backdrop"
          onClick={() =>
            setSelectedStory(null)
          }
        >

          <div
            className="story-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-modal"
              type="button"
              onClick={() =>
                setSelectedStory(null)
              }
            >
              ×
            </button>

            <img
              src={selectedStory.image}
              alt={selectedStory.title}
            />

            <div className="story-modal-content">

              <p className="eyebrow">
                {selectedStory.tag}
              </p>

              <h2>
                {selectedStory.title}
              </h2>

              <p>
                {selectedStory.text}
              </p>

              <button
                className="primary-button"
                type="button"
                onClick={() => {
                  setSelectedStory(null);
                  setCategory("All");
                  scrollTo("collections");
                }}
              >
                SHOP THE EDIT
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          WISHLIST
          ===================================================== */}

      {wishlistOpen && (

        <div
          className="cart-backdrop"
          onClick={() =>
            setWishlistOpen(false)
          }
        >

          <aside
            className="cart"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <h2>
                SAVED ITEMS
              </h2>

              <button
                type="button"
                onClick={() =>
                  setWishlistOpen(false)
                }
              >
                ×
              </button>

            </div>

            {wishlistProducts.length === 0 ? (

              <div className="empty-cart">

                <p>
                  No saved items yet.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setWishlistOpen(false)
                  }
                >
                  CONTINUE SHOPPING
                </button>

              </div>

            ) : (

              <div className="cart-items">

                {wishlistProducts.map(
                  (product) => (

                    <div
                      className="cart-item"
                      key={product.id}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div>

                        <h3>
                          {product.name}
                        </h3>

                        <strong>
                          ${product.price}.00
                        </strong>

                        <button
                          type="button"
                          onClick={() => {
                            setWishlistOpen(false);
                            openProduct(product);
                          }}
                        >
                          VIEW PRODUCT
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            toggleWishlist(
                              product.id
                            )
                          }
                        >
                          REMOVE
                        </button>

                      </div>

                    </div>

                  )
                )}

              </div>

            )}

          </aside>

        </div>

      )}

      {/* =====================================================
          CART
          ===================================================== */}

      {cartOpen && (

        <div
          className="cart-backdrop"
          onClick={() =>
            setCartOpen(false)
          }
        >

          <aside
            className="cart"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <h2>
                YOUR BAG
              </h2>

              <button
                type="button"
                onClick={() =>
                  setCartOpen(false)
                }
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
                  type="button"
                  onClick={() =>
                    setCartOpen(false)
                  }
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
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </strong>

                        <div className="quantity-control">

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.cartId,
                                -1
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.cartId,
                                1
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(
                              item.cartId
                            )
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

                    <span>
                      SUBTOTAL
                    </span>

                    <strong>
                      ${total.toFixed(2)}
                    </strong>

                  </div>

                  {total < 150 && (

                    <p className="shipping-progress">

                      $
                      {(150 - total).toFixed(2)}
                      {" "}
                      away from FREE
                      international shipping.

                    </p>

                  )}

                  <button
                    className="checkout-button"
                    type="button"
                    onClick={() =>
                      alert(
                        "Secure checkout will be connected in the next step."
                      )
                    }
                  >
                    CHECKOUT
                  </button>

                </div>

              </>

            )}
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =====================================================
   SS PASSION — PRODUCT DATA
   Each colour has its own image.
   ===================================================== */

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
    colorImages: {
      Ivory:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=90",
      Stone:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      White:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=90",
      Sand:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Cream:
        "https://images.unsplash.com/photo-1625910513413-5fc45b7b9e72?auto=format&fit=crop&w=1000&q=90",
      Charcoal:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=1000&q=90",
      Olive:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Black:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=90",
      Taupe:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=90",
      Stone:
        "https://images.unsplash.com/photo-1624378440072-ecaa0b9c0c7a?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Charcoal:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=90",
      Beige:
        "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Stone:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=90",
      Olive:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Champagne:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=90",
      Ivory:
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Black:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=90",
      Cream:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=90",
      Taupe:
        "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Beige:
        "https://images.unsplash.com/photo-1506629905607-d9c297d4f3e1?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=90",
      Stone:
        "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Cream:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=90",
      Brown:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=90",
      Black:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Cream:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=90",
      Charcoal:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=90",
      Brown:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
    },
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
    colorImages: {
      Indigo:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90",
      "Washed Black":
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=1000&q=90",
    },
  },
];

/* =====================================================
   JOURNAL
   ===================================================== */

const stories = [
  {
    id: 1,
    tag: "STYLE GUIDE",
    title: "The New Definition of Everyday Style",
    text:
      "Discover simple ways to build a refined wardrobe that feels modern without following every trend.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    tag: "SS PASSION",
    title: "Building a Timeless Wardrobe",
    text:
      "A thoughtful wardrobe starts with versatile pieces that work together season after season.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    tag: "THE EDIT",
    title: "Modern Fashion Without Limits",
    text:
      "Explore the SS PASSION approach to effortless silhouettes, confident details and personal style.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=90",
  },
];

/* =====================================================
   APP
   ===================================================== */

function App() {
  const [category, setCategory] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  /* =====================================================
     SCROLL
     ===================================================== */

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =====================================================
     FILTER
     ===================================================== */

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" ||
      product.category === category ||
      product.category === "Unisex";

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  /* =====================================================
     OPEN PRODUCT
     ===================================================== */

  const openProduct = (product) => {
    const firstColor = product.colors[0];
    const firstSize = product.sizes[0];

    setSelectedProduct(product);
    setSelectedColor(firstColor);
    setSelectedSize(firstSize);
  };

  /* =====================================================
     CLOSE PRODUCT
     ===================================================== */

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedColor("");
    setSelectedSize("");
  };

  /* =====================================================
     GET CURRENT PRODUCT IMAGE
     
     THIS IS THE IMPORTANT FIX.
     
     The image changes whenever selectedColor changes.
     ===================================================== */

  const getSelectedProductImage = () => {
    if (!selectedProduct) return "";

    return (
      selectedProduct.colorImages?.[selectedColor] ||
      selectedProduct.image
    );
  };

  /* =====================================================
     ADD TO CART
     ===================================================== */

  const addToCart = () => {
    if (!selectedProduct) return;

    if (!selectedColor || !selectedSize) {
      alert("Please select a colour and size.");
      return;
    }

    const selectedImage = getSelectedProductImage();

    const cartId =
      selectedProduct.id +
      "-" +
      selectedSize +
      "-" +
      selectedColor;

    setCart((current) => {
      const existing = current.find(
        (item) => item.cartId === cartId
      );

      if (existing) {
        return current.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...selectedProduct,

          /* Save selected variant */
          size: selectedSize,
          color: selectedColor,

          /* Save the selected colour image */
          image: selectedImage,

          cartId,
          quantity: 1,
        },
      ];
    });

    closeProduct();
    setCartOpen(true);
  };

  /* =====================================================
     QUANTITY
     ===================================================== */

  const updateQuantity = (cartId, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =====================================================
     REMOVE CART
     ===================================================== */

  const removeFromCart = (cartId) => {
    setCart((current) =>
      current.filter((item) => item.cartId !== cartId)
    );
  };

  /* =====================================================
     WISHLIST
     ===================================================== */

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* =====================================================
     TOTALS
     ===================================================== */

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const wishlistProducts = products.filter(
    (product) => wishlist.includes(product.id)
  );

  /* =====================================================
     RENDER
     ===================================================== */

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
          type="button"
          onClick={() => scrollTo("collections")}
        >
          ☰
        </button>

        <button
          className="logo"
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <span className="logo-mark">
            SS
          </span>

          <span>
            PASSION
          </span>
        </button>

        <nav className="nav">

          <button
            type="button"
            onClick={() => {
              setCategory("Men");
              scrollTo("collections");
            }}
          >
            MEN
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("Women");
              scrollTo("collections");
            }}
          >
            WOMEN
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("All");
              scrollTo("collections");
            }}
          >
            NEW ARRIVALS
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("collections")
            }
          >
            COLLECTIONS
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("journal")
            }
          >
            JOURNAL
          </button>

        </nav>

        <div className="header-actions">

          <button
            type="button"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            type="button"
            onClick={() =>
              setWishlistOpen(true)
            }
            aria-label="Wishlist"
          >
            {wishlist.length > 0
              ? "♥"
              : "♡"}
          </button>

          <button
            type="button"
            onClick={() =>
              setCartOpen(true)
            }
          >
            BAG ({totalItems})
          </button>

        </div>

      </header>

      {/* SEARCH */}

      {searchOpen && (
        <div className="search-panel">

          <input
            autoFocus
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setSearchOpen(false);
                scrollTo("collections");
              }
            }}
            placeholder="Search products..."
          />

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSearchOpen(false);
            }}
          >
            ×
          </button>

        </div>
      )}

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
              type="button"
              onClick={() => {
                setCategory("Men");
                scrollTo("collections");
              }}
            >
              SHOP MEN
            </button>

            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                setCategory("Women");
                scrollTo("collections");
              }}
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
          Thoughtfully designed essentials for
          modern life, created to move across
          seasons and generations.
        </p>

      </section>

      {/* COLLECTION */}

      <section
        className="collection-section"
        id="collections"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              DISCOVER
            </p>

            <h2>
              {search
                ? `Search: ${search}`
                : category === "All"
                ? "New Arrivals"
                : category}
            </h2>

          </div>

          <div className="category-buttons">

            <button
              type="button"
              className={
                category === "All"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory("All")
              }
            >
              ALL
            </button>

            <button
              type="button"
              className={
                category === "Men"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory("Men")
              }
            >
              MEN
            </button>

            <button
              type="button"
              className={
                category === "Women"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory("Women")
              }
            >
              WOMEN
            </button>

          </div>

        </div>

        <div className="products">

          {filteredProducts.length === 0 ? (

            <div className="empty-search">

              <h3>
                No products found.
              </h3>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                VIEW ALL PRODUCTS
              </button>

            </div>

          ) : (

            filteredProducts.map(
              (product) => (

                <article
                  className="product"
                  key={product.id}
                >

                  <div
                    className="product-image-wrap"
                    onClick={() =>
                      openProduct(product)
                    }
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
                      type="button"
                      aria-label="Add to wishlist"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleWishlist(
                          product.id
                        );
                      }}
                    >
                      {wishlist.includes(
                        product.id
                      )
                        ? "♥"
                        : "♡"}
                    </button>

                    <button
                      className="quick-add"
                      type="button"
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

              )
            )

          )}

        </div>

      </section>

      {/* EDITORIAL */}

      <section className="editorial">

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
            Refined silhouettes, considered
            fabrics and effortless pieces designed
            to become part of your everyday
            wardrobe.
          </p>

          <button
            className="text-link"
            type="button"
            onClick={() => {
              setCategory("All");
              scrollTo("collections");
            }}
          >
            EXPLORE COLLECTIONS →
          </button>

        </div>

      </section>

      {/* STORY */}

      <section
        className="story"
        id="story"
      >

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
            SS PASSION exists for modern
            individuals who want fashion to feel
            personal, effortless and timeless.
          </p>

          <p>
            We create pieces designed to move
            with you through different moments,
            seasons and generations.
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

      <section
        className="journal"
        id="journal"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              FROM THE JOURNAL
            </p>

            <h2>
              Stories & Style
            </h2>

          </div>

          <button
            className="journal-link"
            type="button"
            onClick={() =>
              scrollTo("journal")
            }
          >
            EXPLORE →
          </button>

        </div>

        <div className="journal-grid">

          {stories.map((story) => (

            <article
              key={story.id}
              onClick={() =>
                setSelectedStory(story)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setSelectedStory(story);
                }
              }}
            >

              <div
                className="journal-image"
                style={{
                  backgroundImage:
                    `url("${story.image}")`,
                }}
              ></div>

              <p>
                {story.tag}
              </p>

              <h3>
                {story.title}
              </h3>

              <span className="read-story">
                READ STORY →
              </span>

            </article>

          ))}

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

        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();

            alert(
              "Welcome to SS PASSION."
            );
          }}
        >

          <input
            type="email"
            required
            placeholder="Your email address"
          />

          <button type="submit">
            JOIN
          </button>

        </form>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-brand">

          <div className="footer-logo">

            <span>
              SS
            </span>

            PASSION

          </div>

          <p>
            Modern fashion with timeless appeal.
          </p>

        </div>

        <div>

          <h4>
            SHOP
          </h4>

          <button
            type="button"
            onClick={() => {
              setCategory("Men");
              scrollTo("collections");
            }}
          >
            Men
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("Women");
              scrollTo("collections");
            }}
          >
            Women
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory("All");
              scrollTo("collections");
            }}
          >
            New Arrivals
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("collections")
            }
          >
            Collections
          </button>

        </div>

        <div>

          <h4>
            HELP
          </h4>

          <button
            type="button"
            onClick={() =>
              alert(
                "Shipping information will be available at checkout."
              )
            }
          >
            Shipping
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Our return policy will be available soon."
              )
            }
          >
            Returns
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Size guide coming soon."
              )
            }
          >
            Size Guide
          </button>

          <button
            type="button"
            onClick={() =>
              alert("FAQ coming soon.")
            }
          >
            FAQ
          </button>

        </div>

        <div>

          <h4>
            ABOUT
          </h4>

          <button
            type="button"
            onClick={() =>
              scrollTo("story")
            }
          >
            Our Story
          </button>

          <button
            type="button"
            onClick={() =>
              scrollTo("journal")
            }
          >
            Journal
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Privacy policy will be published before launch."
              )
            }
          >
            Privacy
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Terms & conditions will be published before launch."
              )
            }
          >
            Terms
          </button>

        </div>

      </footer>

      {/* COPYRIGHT */}

      <div className="copyright">
        © 2026 SS PASSION. ALL RIGHTS RESERVED.
      </div>

      {/* =====================================================
          PRODUCT MODAL
          ===================================================== */}

      {selectedProduct && (

        <div
          className="modal-backdrop"
          onClick={closeProduct}
        >

          <div
            className="product-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-modal"
              type="button"
              onClick={closeProduct}
            >
              ×
            </button>

            {/* PRODUCT IMAGE */}

            <div className="modal-image">

              <img
                src={getSelectedProductImage()}
                alt={`${selectedProduct.name} - ${selectedColor}`}
              />

            </div>

            {/* PRODUCT INFO */}

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

              {/* COLOUR */}

              <div className="selector">

                <strong>
                  COLOUR — {selectedColor}
                </strong>

                <div className="options">

                  {selectedProduct.colors.map(
                    (color) => (

                      <button
                        key={color}
                        type="button"
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

                    )
                  )}

                </div>

              </div>

              {/* SIZE */}

              <div className="selector">

                <strong>
                  SIZE — {selectedSize}
                </strong>

                <div className="options">

                  {selectedProduct.sizes.map(
                    (size) => (

                      <button
                        key={size}
                        type="button"
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

                    )
                  )}

                </div>

              </div>

              {/* ADD TO BAG */}

              <button
                className="add-to-bag"
                type="button"
                onClick={addToCart}
              >
                ADD TO BAG — $
                {selectedProduct.price}.00
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

      {/* =====================================================
          STORY MODAL
          ===================================================== */}

      {selectedStory && (

        <div
          className="modal-backdrop"
          onClick={() =>
            setSelectedStory(null)
          }
        >

          <div
            className="story-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-modal"
              type="button"
              onClick={() =>
                setSelectedStory(null)
              }
            >
              ×
            </button>

            <img
              src={selectedStory.image}
              alt={selectedStory.title}
            />

            <div className="story-modal-content">

              <p className="eyebrow">
                {selectedStory.tag}
              </p>

              <h2>
                {selectedStory.title}
              </h2>

              <p>
                {selectedStory.text}
              </p>

              <button
                className="primary-button"
                type="button"
                onClick={() => {
                  setSelectedStory(null);
                  setCategory("All");
                  scrollTo("collections");
                }}
              >
                SHOP THE EDIT
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          WISHLIST
          ===================================================== */}

      {wishlistOpen && (

        <div
          className="cart-backdrop"
          onClick={() =>
            setWishlistOpen(false)
          }
        >

          <aside
            className="cart"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <h2>
                SAVED ITEMS
              </h2>

              <button
                type="button"
                onClick={() =>
                  setWishlistOpen(false)
                }
              >
                ×
              </button>

            </div>

            {wishlistProducts.length === 0 ? (

              <div className="empty-cart">

                <p>
                  No saved items yet.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setWishlistOpen(false)
                  }
                >
                  CONTINUE SHOPPING
                </button>

              </div>

            ) : (

              <div className="cart-items">

                {wishlistProducts.map(
                  (product) => (

                    <div
                      className="cart-item"
                      key={product.id}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div>

                        <h3>
                          {product.name}
                        </h3>

                        <strong>
                          ${product.price}.00
                        </strong>

                        <button
                          type="button"
                          onClick={() => {
                            setWishlistOpen(false);
                            openProduct(product);
                          }}
                        >
                          VIEW PRODUCT
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            toggleWishlist(
                              product.id
                            )
                          }
                        >
                          REMOVE
                        </button>

                      </div>

                    </div>

                  )
                )}

              </div>

            )}

          </aside>

        </div>

      )}

      {/* =====================================================
          CART
          ===================================================== */}

      {cartOpen && (

        <div
          className="cart-backdrop"
          onClick={() =>
            setCartOpen(false)
          }
        >

          <aside
            className="cart"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <h2>
                YOUR BAG
              </h2>

              <button
                type="button"
                onClick={() =>
                  setCartOpen(false)
                }
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
                  type="button"
                  onClick={() =>
                    setCartOpen(false)
                  }
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
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </strong>

                        <div className="quantity-control">

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.cartId,
                                -1
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.cartId,
                                1
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(
                              item.cartId
                            )
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

                    <span>
                      SUBTOTAL
                    </span>

                    <strong>
                      ${total.toFixed(2)}
                    </strong>

                  </div>

                  {total < 150 && (

                    <p className="shipping-progress">

                      $
                      {(150 - total).toFixed(2)}
                      {" "}
                      away from FREE
                      international shipping.

                    </p>

                  )}

                  <button
                    className="checkout-button"
                    type="button"
                    onClick={() =>
                      alert(
                        "Secure checkout will be connected in the next step."
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

/* =====================================================
   ROOT
   ===================================================== */

createRoot(
  document.getElementById("root")
).render(
  <App />
);
          </aside>

        </div>

      )}

    </div>
  );
}

/* =====================================================
   ROOT
   ===================================================== */

createRoot(
  document.getElementById("root")
).render(
  <App />
);
