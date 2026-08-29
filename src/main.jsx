import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

/* =========================================================
   SS PASSION
   Premium Fashion Store
   Single-file React application
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    price: 49,
    category: "Unisex",
    type: "T-Shirts",
    badge: "BESTSELLER",
    description:
      "A refined everyday essential with a relaxed silhouette, premium cotton feel and effortless proportions.",
    colors: [
      { name: "Ivory", hex: "#eee8dc" },
      { name: "Black", hex: "#171717" },
      { name: "Stone", hex: "#a59d8e" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 2,
    name: "Signature Blazer",
    price: 129,
    category: "Women",
    type: "Tailoring",
    badge: "SIGNATURE",
    description:
      "Clean tailoring meets modern ease in a versatile blazer designed to move from day to evening.",
    colors: [
      { name: "Sand", hex: "#c8b9a2" },
      { name: "Black", hex: "#171717" },
      { name: "Charcoal", hex: "#474747" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 3,
    name: "Essential Hoodie",
    price: 79,
    category: "Unisex",
    type: "Knitwear",
    badge: "ESSENTIAL",
    description:
      "A substantial everyday hoodie balancing comfort, structure and a quietly premium finish.",
    colors: [
      { name: "Oat", hex: "#d8ccb8" },
      { name: "Black", hex: "#151515" },
      { name: "Grey", hex: "#8b8b88" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 4,
    name: "Linen Relaxed Shirt",
    price: 69,
    category: "Men",
    type: "Shirts",
    badge: "NEW",
    description:
      "Lightweight linen with a relaxed cut for warm days, layered looks and understated summer dressing.",
    colors: [
      { name: "Natural", hex: "#ddd1bb" },
      { name: "White", hex: "#f4f3ef" },
      { name: "Olive", hex: "#73725c" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 5,
    name: "Relaxed Tailored Trouser",
    price: 89,
    category: "Men",
    type: "Trousers",
    badge: "NEW",
    description:
      "A modern relaxed trouser with tailored lines, designed for everyday sophistication.",
    colors: [
      { name: "Taupe", hex: "#9e907b" },
      { name: "Black", hex: "#171717" },
      { name: "Cream", hex: "#e5dccb" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 6,
    name: "Minimal Ribbed Dress",
    price: 99,
    category: "Women",
    type: "Dresses",
    badge: "EDITORIAL",
    description:
      "A clean ribbed silhouette designed around simplicity, movement and modern feminine lines.",
    colors: [
      { name: "Cream", hex: "#e7dfd0" },
      { name: "Black", hex: "#181818" },
      { name: "Mocha", hex: "#766052" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 7,
    name: "Structured Overshirt",
    price: 109,
    category: "Men",
    type: "Outerwear",
    badge: "SIGNATURE",
    description:
      "A structured overshirt combining the utility of outerwear with the polish of modern tailoring.",
    colors: [
      { name: "Stone", hex: "#aaa08f" },
      { name: "Black", hex: "#181818" },
      { name: "Olive", hex: "#65664f" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 8,
    name: "Soft Knit Cardigan",
    price: 95,
    category: "Women",
    type: "Knitwear",
    badge: "NEW",
    description:
      "Soft-touch knitwear with an elevated relaxed shape, ideal for transitional layering.",
    colors: [
      { name: "Ivory", hex: "#e9e0cf" },
      { name: "Camel", hex: "#b49a79" },
      { name: "Black", hex: "#191919" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 9,
    name: "Classic Straight Denim",
    price: 85,
    category: "Unisex",
    type: "Denim",
    badge: "EVERYDAY",
    description:
      "A timeless straight-leg denim profile with a clean finish built for everyday styling.",
    colors: [
      { name: "Indigo", hex: "#293c55" },
      { name: "Washed", hex: "#8290a0" },
      { name: "Black", hex: "#202020" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 10,
    name: "Premium Cotton Polo",
    price: 59,
    category: "Men",
    type: "T-Shirts",
    badge: "ESSENTIAL",
    description:
      "A polished cotton polo with a refined structure that works equally well dressed up or down.",
    colors: [
      { name: "Cream", hex: "#e8dfcf" },
      { name: "Navy", hex: "#273447" },
      { name: "Black", hex: "#181818" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc45f2e9b2b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 11,
    name: "Modern Utility Jacket",
    price: 139,
    category: "Unisex",
    type: "Outerwear",
    badge: "LIMITED",
    description:
      "A modern utility layer with architectural pockets and an understated premium finish.",
    colors: [
      { name: "Sand", hex: "#b8a991" },
      { name: "Olive", hex: "#666951" },
      { name: "Black", hex: "#181818" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: 12,
    name: "Signature Minimal Sneaker",
    price: 119,
    category: "Unisex",
    type: "Footwear",
    badge: "SIGNATURE",
    description:
      "A minimal everyday sneaker designed around clean proportions and versatile styling.",
    colors: [
      { name: "Off White", hex: "#e8e5dc" },
      { name: "Black", hex: "#191919" },
      { name: "Stone", hex: "#a49b8b" },
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85",
    ],
  },
];

const CATEGORIES = ["All", "Men", "Women", "Unisex"];

const STORIES = [
  {
    id: 1,
    title: "The Art of Everyday",
    text: "Why the pieces you wear most should also be the pieces you love most.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Designed Without Noise",
    text: "A closer look at our approach to modern, timeless fashion.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "A New Everyday",
    text: "Building a wardrobe around pieces that work beyond a single season.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
  },
];

/* =========================================================
   GLOBAL STYLES
   Everything needed by the application lives here.
   ========================================================= */

const GLOBAL_CSS = `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #f7f4ee;
    color: #1c1b19;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: #1c1b19;
    color: #f7f4ee;
  }

  .ss-app {
    min-height: 100vh;
    overflow-x: hidden;
    background: #f7f4ee;
  }

  .ss-announcement {
    background: #1d1c1a;
    color: #f7f4ee;
    text-align: center;
    padding: 9px 18px;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .ss-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(247, 244, 238, 0.94);
    border-bottom: 1px solid rgba(28, 27, 25, 0.10);
    backdrop-filter: blur(16px);
  }

  .ss-nav {
    width: min(1400px, calc(100% - 48px));
    min-height: 78px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  .ss-logo {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 25px;
    letter-spacing: 4px;
    white-space: nowrap;
    font-weight: 500;
  }

  .ss-nav-links {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 11px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }

  .ss-nav-links button {
    border: 0;
    background: transparent;
    color: #1c1b19;
    padding: 10px 0;
  }

  .ss-nav-links button:hover {
    opacity: .55;
  }

  .ss-nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ss-icon-btn {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(28, 27, 25, .15);
    border-radius: 50%;
    background: transparent;
    color: #1c1b19;
    display: grid;
    place-items: center;
    font-size: 15px;
    transition: .2s ease;
  }

  .ss-icon-btn:hover {
    background: #1c1b19;
    color: #f7f4ee;
  }

  .ss-bag-wrap {
    position: relative;
  }

  .ss-bag-count {
    position: absolute;
    right: -3px;
    top: -4px;
    min-width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #1c1b19;
    color: #fff;
    font-size: 9px;
    display: grid;
    place-items: center;
    border: 2px solid #f7f4ee;
  }

  .ss-mobile-menu {
    display: none;
  }

  .ss-hero {
    min-height: 720px;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background:
      linear-gradient(90deg, rgba(15,15,14,.58), rgba(15,15,14,.08)),
      url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=90")
      center / cover;
  }

  .ss-hero-content {
    width: min(1400px, calc(100% - 48px));
    margin: auto;
    color: white;
    padding: 110px 0;
  }

  .ss-eyebrow {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .ss-hero-title {
    max-width: 760px;
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(54px, 8vw, 110px);
    line-height: .91;
    font-weight: 400;
    letter-spacing: -4px;
  }

  .ss-hero-copy {
    max-width: 500px;
    margin: 28px 0 35px;
    line-height: 1.8;
    font-size: 15px;
    color: rgba(255,255,255,.85);
  }

  .ss-primary-btn {
    border: 1px solid #1c1b19;
    background: #1c1b19;
    color: #fff;
    padding: 15px 24px;
    min-height: 48px;
    font-size: 10px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    transition: .2s ease;
  }

  .ss-primary-btn:hover {
    background: transparent;
    color: #1c1b19;
  }

  .ss-hero .ss-primary-btn {
    background: #f7f4ee;
    color: #1c1b19;
    border-color: #f7f4ee;
  }

  .ss-hero .ss-primary-btn:hover {
    background: transparent;
    color: #fff;
  }

  .ss-section {
    width: min(1400px, calc(100% - 48px));
    margin: auto;
    padding: 110px 0;
  }

  .ss-section-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 45px;
  }

  .ss-section-kicker {
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 12px;
    opacity: .55;
  }

  .ss-section-title {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(38px, 5vw, 65px);
    line-height: .98;
    font-weight: 400;
    letter-spacing: -2px;
  }

  .ss-section-description {
    max-width: 430px;
    line-height: 1.8;
    color: #69665f;
    font-size: 14px;
  }

  .ss-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 35px;
  }

  .ss-filter-btn {
    border: 1px solid rgba(28,27,25,.16);
    background: transparent;
    padding: 11px 18px;
    font-size: 10px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }

  .ss-filter-btn.active,
  .ss-filter-btn:hover {
    background: #1c1b19;
    color: white;
    border-color: #1c1b19;
  }

  .ss-product-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 22px;
  }

  .ss-product-card {
    min-width: 0;
  }

  .ss-product-image-wrap {
    position: relative;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: #e9e4da;
    cursor: pointer;
  }

  .ss-product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .65s ease;
  }

  .ss-product-image-wrap:hover .ss-product-image {
    transform: scale(1.035);
  }

  .ss-product-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(247,244,238,.93);
    padding: 7px 9px;
    font-size: 8px;
    letter-spacing: 1.4px;
  }

  .ss-wish-small {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 50%;
    background: rgba(247,244,238,.93);
    color: #1c1b19;
    font-size: 17px;
  }

  .ss-product-info {
    padding: 17px 2px 5px;
  }

  .ss-product-category {
    font-size: 9px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    opacity: .48;
  }

  .ss-product-name {
    margin: 8px 0 7px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 19px;
    font-weight: 400;
  }

  .ss-product-price {
    font-size: 13px;
  }

  .ss-color-row {
    display: flex;
    gap: 6px;
    margin-top: 13px;
  }

  .ss-color-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.16);
  }

  .ss-story-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .ss-story-card {
    cursor: pointer;
  }

  .ss-story-image {
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: #e5dfd3;
  }

  .ss-story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .6s ease;
  }

  .ss-story-card:hover img {
    transform: scale(1.04);
  }

  .ss-story-content {
    padding-top: 20px;
  }

  .ss-story-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 26px;
    font-weight: 400;
    margin: 0 0 9px;
  }

  .ss-story-text {
    margin: 0;
    color: #6e6a62;
    font-size: 13px;
    line-height: 1.7;
  }

  .ss-editorial {
    min-height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #e6dfd3;
  }

  .ss-editorial-image {
    min-height: 600px;
    background:
      url("https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1600&q=90")
      center / cover;
  }

  .ss-editorial-content {
    padding: 80px clamp(30px, 7vw, 110px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ss-editorial-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(45px, 5vw, 75px);
    font-weight: 400;
    line-height: .95;
    margin: 0 0 25px;
    letter-spacing: -2px;
  }

  .ss-editorial-content p {
    max-width: 460px;
    line-height: 1.9;
    color: #615e57;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .ss-trust {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(28,27,25,.12);
    border-bottom: 1px solid rgba(28,27,25,.12);
  }

  .ss-trust-item {
    padding: 38px 25px;
    text-align: center;
    border-right: 1px solid rgba(28,27,25,.12);
  }

  .ss-trust-item:last-child {
    border-right: 0;
  }

  .ss-trust-number {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 28px;
    margin-bottom: 9px;
  }

  .ss-trust-label {
    font-size: 9px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    opacity: .55;
  }

  .ss-newsletter {
    background: #1d1c1a;
    color: #f7f4ee;
  }

  .ss-newsletter-inner {
    width: min(900px, calc(100% - 48px));
    margin: auto;
    padding: 110px 0;
    text-align: center;
  }

  .ss-newsletter-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 400;
    line-height: 1;
    margin: 0 0 20px;
  }

  .ss-newsletter-copy {
    max-width: 550px;
    margin: 0 auto 35px;
    color: rgba(247,244,238,.68);
    line-height: 1.8;
    font-size: 14px;
  }

  .ss-newsletter-form {
    display: flex;
    max-width: 560px;
    margin: auto;
    border-bottom: 1px solid rgba(247,244,238,.45);
  }

  .ss-newsletter-input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: white;
    padding: 15px 0;
  }

  .ss-newsletter-input::placeholder {
    color: rgba(247,244,238,.5);
  }

  .ss-newsletter-submit {
    border: 0;
    background: transparent;
    color: white;
    padding: 15px 0 15px 20px;
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }

  .ss-footer {
    background: #f0ece4;
    padding: 70px 0 25px;
  }

  .ss-footer-grid {
    width: min(1400px, calc(100% - 48px));
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 45px;
  }

  .ss-footer-brand {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 28px;
    letter-spacing: 4px;
    margin-bottom: 17px;
  }

  .ss-footer-copy {
    max-width: 340px;
    color: #69665f;
    font-size: 13px;
    line-height: 1.8;
  }

  .ss-footer-title {
    font-size: 9px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    margin-bottom: 17px;
  }

  .ss-footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #69665f;
    font-size: 12px;
  }

  .ss-footer-bottom {
    width: min(1400px, calc(100% - 48px));
    margin: 65px auto 0;
    padding-top: 20px;
    border-top: 1px solid rgba(28,27,25,.12);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: #77736b;
    font-size: 10px;
  }

  .ss-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(0,0,0,.48);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .ss-modal {
    width: min(1100px, 100%);
    max-height: calc(100vh - 40px);
    overflow: auto;
    background: #f7f4ee;
    position: relative;
  }

  .ss-modal-close {
    position: absolute;
    z-index: 3;
    top: 14px;
    right: 14px;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(28,27,25,.15);
    background: rgba(247,244,238,.92);
    border-radius: 50%;
    font-size: 18px;
  }

  .ss-product-modal {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .ss-product-modal-image {
    min-height: 650px;
    background: #e7e1d7;
  }

  .ss-product-modal-image img {
    width: 100%;
    height: 100%;
    min-height: 650px;
    object-fit: cover;
  }

  .ss-product-modal-info {
    padding: 70px 55px;
  }

  .ss-modal-kicker {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: .5;
  }

  .ss-modal-product-title {
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 400;
    font-size: clamp(38px, 4vw, 58px);
    line-height: .98;
    margin: 15px 0;
  }

  .ss-modal-price {
    font-size: 17px;
    margin-bottom: 25px;
  }

  .ss-modal-description {
    color: #68645d;
    line-height: 1.8;
    font-size: 13px;
    margin-bottom: 35px;
  }

  .ss-choice-label {
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 11px;
  }

  .ss-choice-group {
    margin-bottom: 25px;
  }

  .ss-choice-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .ss-choice-btn {
    min-width: 45px;
    height: 40px;
    border: 1px solid rgba(28,27,25,.17);
    background: transparent;
    font-size: 10px;
  }

  .ss-choice-btn.active {
    background: #1c1b19;
    color: white;
    border-color: #1c1b19;
  }

  .ss-modal-colors {
    display: flex;
    gap: 10px;
  }

  .ss-modal-color {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid transparent;
    outline: 1px solid rgba(28,27,25,.2);
    outline-offset: 2px;
  }

  .ss-modal-color.active {
    outline: 2px solid #1c1b19;
  }

  .ss-add-btn {
    width: 100%;
    margin-top: 10px;
    padding: 18px;
    background: #1c1b19;
    color: white;
    border: 1px solid #1c1b19;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .ss-add-btn:hover {
    background: transparent;
    color: #1c1b19;
  }

  .ss-cart-panel {
    margin-left: auto;
    width: min(500px, 100%);
    height: 100%;
    background: #f7f4ee;
    display: flex;
    flex-direction: column;
    animation: ss-slide .25s ease;
  }

  @keyframes ss-slide {
    from {
      transform: translateX(30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .ss-cart-head {
    padding: 25px;
    border-bottom: 1px solid rgba(28,27,25,.12);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ss-cart-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 28px;
  }

  .ss-cart-body {
    flex: 1;
    overflow: auto;
    padding: 20px 25px;
  }

  .ss-cart-empty {
    text-align: center;
    padding: 100px 20px;
    color: #77736c;
  }

  .ss-cart-empty-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 30px;
    color: #1c1b19;
    margin-bottom: 12px;
  }

  .ss-cart-item {
    display: grid;
    grid-template-columns: 85px 1fr auto;
    gap: 14px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(28,27,25,.10);
  }

  .ss-cart-item-image {
    width: 85px;
    height: 105px;
    object-fit: cover;
  }

  .ss-cart-item-name {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 17px;
    margin-bottom: 7px;
  }

  .ss-cart-item-meta {
    color: #77736c;
    font-size: 10px;
    line-height: 1.8;
  }

  .ss-quantity {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(28,27,25,.15);
    margin-top: 12px;
  }

  .ss-quantity button {
    width: 28px;
    height: 28px;
    border: 0;
    background: transparent;
  }

  .ss-quantity span {
    width: 28px;
    text-align: center;
    font-size: 10px;
  }

  .ss-remove {
    border: 0;
    background: transparent;
    font-size: 10px;
    text-decoration: underline;
    opacity: .55;
    margin-top: 10px;
  }

  .ss-cart-item-price {
    font-size: 12px;
  }

  .ss-cart-footer {
    border-top: 1px solid rgba(28,27,25,.12);
    padding: 22px 25px 28px;
  }

  .ss-shipping-message {
    background: #ece6da;
    padding: 13px;
    font-size: 10px;
    line-height: 1.6;
    margin-bottom: 18px;
  }

  .ss-summary-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 12px;
  }

  .ss-summary-total {
    font-size: 15px;
    font-weight: bold;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(28,27,25,.12);
  }

  .ss-checkout {
    width: 100%;
    margin-top: 20px;
    padding: 17px;
    border: 0;
    background: #1c1b19;
    color: white;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .ss-checkout:disabled {
    opacity: .4;
    cursor: not-allowed;
  }

  .ss-search-box {
    width: min(650px, 100%);
    margin: auto;
    background: #f7f4ee;
    padding: 45px;
  }

  .ss-search-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 40px;
    margin-bottom: 25px;
  }

  .ss-search-input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid rgba(28,27,25,.3);
    background: transparent;
    padding: 15px 0;
    outline: 0;
    font-size: 18px;
  }

  .ss-story-modal {
    width: min(900px, 100%);
    background: #f7f4ee;
  }

  .ss-story-modal-image {
    width: 100%;
    height: 380px;
    object-fit: cover;
  }

  .ss-story-modal-content {
    padding: 45px;
  }

  .ss-story-modal-content h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 42px;
    font-weight: 400;
    margin: 0 0 18px;
  }

  .ss-story-modal-content p {
    max-width: 650px;
    color: #68645d;
    line-height: 1.9;
    font-size: 14px;
  }

  .ss-toast {
    position: fixed;
    z-index: 200;
    left: 50%;
    bottom: 25px;
    transform: translateX(-50%);
    background: #1c1b19;
    color: white;
    padding: 13px 20px;
    font-size: 10px;
    letter-spacing: 1px;
    box-shadow: 0 10px 30px rgba(0,0,0,.18);
  }

  @media (max-width: 1000px) {
    .ss-product-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .ss-nav-links {
      gap: 17px;
    }

    .ss-editorial {
      grid-template-columns: 1fr;
    }

    .ss-editorial-image {
      min-height: 500px;
    }

    .ss-footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 760px) {
    .ss-announcement {
      font-size: 8px;
      letter-spacing: 1.4px;
    }

    .ss-nav {
      width: min(100% - 28px, 1400px);
      min-height: 65px;
    }

    .ss-logo {
      font-size: 21px;
    }

    .ss-nav-links {
      display: none;
    }

    .ss-mobile-menu {
      display: grid;
    }

    .ss-nav-actions {
      gap: 5px;
    }

    .ss-icon-btn {
      width: 36px;
      height: 36px;
    }

    .ss-hero {
      min-height: 650px;
    }

    .ss-hero-content,
    .ss-section {
      width: min(100% - 28px, 1400px);
    }

    .ss-hero-title {
      letter-spacing: -2px;
    }

    .ss-section {
      padding: 75px 0;
    }

    .ss-section-head {
      display: block;
      margin-bottom: 30px;
    }

    .ss-section-description {
      margin-top: 20px;
    }

    .ss-product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px 10px;
    }

    .ss-product-name {
      font-size: 16px;
    }

    .ss-story-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .ss-trust {
      grid-template-columns: 1fr 1fr;
    }

    .ss-trust-item:nth-child(2) {
      border-right: 0;
    }

    .ss-trust-item {
      border-bottom: 1px solid rgba(28,27,25,.12);
    }

    .ss-trust-item:nth-child(3),
    .ss-trust-item:nth-child(4) {
      border-bottom: 0;
    }

    .ss-footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 35px 20px;
    }

    .ss-footer-brand-area {
      grid-column: 1 / -1;
    }

    .ss-footer-bottom {
      display: block;
      line-height: 1.8;
    }

    .ss-footer-bottom span {
      display: block;
      margin-bottom: 5px;
    }

    .ss-product-modal {
      grid-template-columns: 1fr;
    }

    .ss-product-modal-image {
      min-height: 420px;
    }

    .ss-product-modal-image img {
      min-height: 420px;
    }

    .ss-product-modal-info {
      padding: 40px 25px 30px;
    }

    .ss-modal-product-title {
      font-size: 42px;
    }

    .ss-overlay {
      padding: 0;
    }

    .ss-modal {
      max-height: 100vh;
      height: 100%;
    }

    .ss-cart-panel {
      width: 100%;
    }

    .ss-search-box {
      padding: 30px 22px;
    }

    .ss-story-modal-image {
      height: 280px;
    }

    .ss-story-modal-content {
      padding: 30px 22px;
    }

    .ss-newsletter-inner {
      width: min(100% - 28px, 900px);
      padding: 80px 0;
    }
  }

  @media (max-width: 430px) {
    .ss-product-grid {
      gap: 22px 9px;
    }

    .ss-product-badge {
      top: 8px;
      left: 8px;
      font-size: 7px;
    }

    .ss-wish-small {
      top: 7px;
      right: 7px;
      width: 32px;
      height: 32px;
    }

    .ss-product-info {
      padding-top: 12px;
    }

    .ss-color-row {
      margin-top: 9px;
    }
  }
`;

/* =========================================================
   SMALL REUSABLE COMPONENTS
   ========================================================= */

function IconButton({ label, onClick, children, className = "" }) {
  return (
    <button
      type="button"
      className={`ss-icon-btn ${className}`}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenProduct,
}) {
  return (
    <article className="ss-product-card">
      <div
        className="ss-product-image-wrap"
        onClick={() => onOpenProduct(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onOpenProduct(product);
          }
        }}
      >
        <img
          className="ss-product-image"
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
        />

        {product.badge && (
          <span className="ss-product-badge">{product.badge}</span>
        )}

        <button
          type="button"
          className="ss-wish-small"
          aria-label={
            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          onClick={(event) => {
            event.stopPropagation();
            onToggleWishlist(product.id);
          }}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="ss-product-info">
        <div className="ss-product-category">
          {product.category} · {product.type}
        </div>

        <h3 className="ss-product-name">{product.name}</h3>

        <div className="ss-product-price">${product.price}</div>

        <div className="ss-color-row" aria-label="Available colors">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="ss-color-dot"
              title={color.name}
              style={{ background: color.hex }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function ProductModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
    setImageIndex(0);
  }, [product]);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor.name);
  };

  return (
    <div
      className="ss-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="ss-modal">
        <button
          type="button"
          className="ss-modal-close"
          aria-label="Close product"
          onClick={onClose}
        >
         
