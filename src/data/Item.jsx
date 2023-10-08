// src/data/Item.jsx
import camera from "../assets/camera.jpg";
import handphone from "../assets/handphone.jpg";
import keyboard from "../assets/keyboard.jpg";
import laptop from "../assets/laptop.jpg";
import monitor from "../assets/monitor.jpg";
import mouse from "../assets/mouse.jpg";

const items = [
  {
    id: 1,
    barang: "Camera",
    img: camera,
    harga: 300000,
    quantity: 1,
  },
  {
    id: 2,
    barang: "Handphone",
    img: handphone,
    harga: 500000,
    quantity: 1,
  },
  {
    id: 3,
    barang: "Keyboard",
    img: keyboard,
    harga: 100000,
    quantity: 1,
  },
  {
    id: 4,
    barang: "Laptop",
    img: laptop,
    harga: 1500000,
    quantity: 1,
  },
  {
    id: 5,
    barang: "Monitor",
    img: monitor,
    harga: 700000,
    quantity: 1,
  },
  {
    id: 6,
    barang: "Mouse",
    img: mouse,
    harga: 80000,
    quantity: 1,
  },
];

export default items;