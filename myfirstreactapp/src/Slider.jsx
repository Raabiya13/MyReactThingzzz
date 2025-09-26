import React, { useState, useEffect } from "react";

const images = [
  "https://tse2.mm.bing.net/th/id/OIP.NgDm-u1CCBOVpYwA3XYtqwAAAA?pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th/id/OIP.YuLiGwfY3x1Qr4uAHW81MAHaHa?pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th/id/OIP.Fu-mCWYEfhX5CScHcGAl1wHaHa?pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th/id/OIP.6EcDuFuUzCcmq6HaGMJQTQHaHa?pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th/id/OIP.RGPDSWWuJRdrAhYErXxz2QHaHa?pid=Api&P=0&h=180",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3s interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
}
