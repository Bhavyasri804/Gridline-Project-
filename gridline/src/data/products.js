// src/data/products.js
// Mock data for the Gridline shop (Lab 1).
// Shaped like the FakeStore API (id, title, price, description, category, rating { rate, count })
// so Lab 2 can swap in a real API without changing the components.
// "icon" is only for Lab 1: it picks the line illustration in <Icon />. A real API returns an image URL instead.

export const categories = ["All", "Electronics", "Clothing", "Accessories", "Home"];

export const products = [
  { id: 1, title: "Wireless Headphones", category: "Electronics", price: 59.99, description: "Over-ear headphones with 30 hours of battery life.", rating: { rate: 4.5, count: 210 }, icon: "headphones" },
  { id: 2, title: "Mechanical Keyboard", category: "Electronics", price: 89.00, description: "Compact keyboard with tactile switches and backlight.", rating: { rate: 4.7, count: 340 }, icon: "keyboard" },
  { id: 3, title: "Smart Watch", category: "Electronics", price: 129.50, description: "Tracks steps, heart rate and sleep with a 5-day battery.", rating: { rate: 4.2, count: 185 }, icon: "watch" },
  { id: 4, title: "Bluetooth Speaker", category: "Electronics", price: 45.00, description: "Portable water-resistant speaker with 12 hours of playback.", rating: { rate: 4.4, count: 260 }, icon: "speaker" },
  { id: 5, title: "Classic Denim Jacket", category: "Clothing", price: 74.99, description: "Medium-weight denim jacket with a regular fit.", rating: { rate: 4.3, count: 120 }, icon: "shirt" },
  { id: 6, title: "Cotton T-Shirt", category: "Clothing", price: 19.99, description: "Soft everyday t-shirt in 100% cotton.", rating: { rate: 4.1, count: 410 }, icon: "shirt" },
  { id: 7, title: "Running Shoes", category: "Clothing", price: 99.00, description: "Lightweight shoes with cushioned soles for daily runs.", rating: { rate: 4.6, count: 295 }, icon: "shoes" },
  { id: 8, title: "Leather Backpack", category: "Accessories", price: 84.50, description: "Everyday backpack with a padded laptop compartment.", rating: { rate: 4.5, count: 150 }, icon: "backpack" },
  { id: 9, title: "Sunglasses", category: "Accessories", price: 34.00, description: "UV400 polarised sunglasses with a lightweight frame.", rating: { rate: 4.0, count: 95 }, icon: "glasses" },
  { id: 10, title: "Steel Water Bottle", category: "Home", price: 24.99, description: "Insulated bottle that keeps drinks cold for 24 hours.", rating: { rate: 4.8, count: 530 }, icon: "bottle" },
  { id: 11, title: "Ceramic Coffee Mug", category: "Home", price: 12.50, description: "350 ml mug that is dishwasher and microwave safe.", rating: { rate: 4.2, count: 205 }, icon: "mug" },
  { id: 12, title: "Desk Lamp", category: "Home", price: 39.99, description: "LED lamp with three brightness levels and a USB port.", rating: { rate: 4.4, count: 175 }, icon: "lamp" },
];
