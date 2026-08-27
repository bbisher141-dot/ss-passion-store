# SS PASSION Real Store Starter

This is a React/Vite e-commerce starter with:
- Premium SS PASSION storefront
- Product catalogue and filters
- Product detail modal with size/color
- Cart stored in browser localStorage
- Wishlist stored in browser localStorage
- Admin product manager (add/edit/delete)
- Demo checkout and PayPal button
- Responsive mobile layout

## Run
1. Install Node.js 20+
2. `npm install`
3. `npm run dev`

## Important
The checkout is NOT a live payment integration. Before taking real orders, connect a secure backend/database and PayPal Checkout using server-side credentials and webhooks. Do not put PayPal secrets in frontend code.

For production, replace localStorage product/order data with a real database and authentication, and configure shipping/tax/currency rules.
