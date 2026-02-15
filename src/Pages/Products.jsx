import React, { useEffect, useState } from "react";
import "./Products.css";

import uf from "../assets/house.png";

// ✅ 9 ta rasm import qilamiz
import shanba_1 from "../assets/image1.png";
import shanba_2 from "../assets/image2.png";
import shanba_3 from "../assets/image3.png";
import shanba_4 from "../assets/image1.png";
import shanba_5 from "../assets/image2.png";
import shanba_6 from "../assets/image3.png";
import shanba_7 from "../assets/image1.png";
import shanba_8 from "../assets/image2.png";
import shanba_9 from "../assets/image3.png";

const Product = () => {
  const [uylar, setUylar] = useState([]);
  const [xonalar, setXonalar] = useState({});
  const [loading, setLoading] = useState(true);

  const rasmlar = [
    shanba_1,
    shanba_2,
    shanba_3,
    shanba_4,
    shanba_5,
    shanba_6,
    shanba_7,
    shanba_8,
    shanba_9
  ];

  const locationlar = [
    "San Francisco, California",
    "Beverly Hills, California",
    "Palo Alto, California",
    "San Francisco, California",
    "Beverly Hills, California",
    "Palo Alto, California",
    "San Francisco, California",
    "Beverly Hills, California",
    "Palo Alto, California"
  ];

  const sizeLar = [
    3500,
    1603,
    5000,
    3500,
    1603,
    5000,
    3500,
    1603,
    5000
  ];

  useEffect(() => {
    setLoading(true);
    
    fetch("https://698c128c21a248a27360636a.mockapi.io/house")
      .then((res) => res.json())
      .then((data) => {
        const faqat9ta = data.slice(0, 9);
        setUylar(faqat9ta);

        const xonaBoshlanish = {};
        faqat9ta.forEach((item) => {
          xonaBoshlanish[item.id] = item.rooms || 0;
        });

        setXonalar(xonaBoshlanish);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API xatolik:", err);
        setLoading(false);
      });
  }, []);

  const xonaQosh = (id) => {
    setXonalar((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const xonaReset = (id) => {
    const uy = uylar.find((item) => item.id === id);
    setXonalar((prev) => ({
      ...prev,
      [id]: uy?.rooms || 0,
    }));
  };

  const narxHisoblash = (uy) => {
    const qoshimchaXonalar = (xonalar[uy.id] ?? 0) - (uy.rooms || 0);
    const xonaNarxi = 5000;
    return uy.price + (qoshimchaXonalar * xonaNarxi);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <header className="product-bosh">
        <img src={uf} className="product-logo" alt="logo" />
      </header>

      <section className="product-bolim">
        <h2 className="product-sarlavha">The Best Cities</h2>

        {/*  BIRINCHI 3 TA KARTOCHKA */}
        <div className="product-grid">
          {uylar.slice(0, 3).map((uy, index) => (
            <div className="product-card" key={uy.id}>
              <img
                src={rasmlar[index]}
                alt={`house ${index + 1}`}
                className="product-card-img"
              />

              <div className="product-card-info">
                <h3 className="product-location">
                  <span className="location-icon">📍</span>
                  {locationlar[index]}
                </h3>

                <p className="product-detail">
                  🏠 {xonalar[uy.id] ?? 0} Rooms • 📏 {sizeLar[index].toLocaleString()} sq ft
                </p>

                <h4 className="product-price">${narxHisoblash(uy).toLocaleString()}</h4>

                <div className="product-btn-box">
                  <button className="product-btn" onClick={() => xonaQosh(uy.id)}>
                    Add Room
                  </button>

                  <button className="product-btn reset-btn" onClick={() => xonaReset(uy.id)}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ IKKINCHI SARLAVHA */}
        <h2 className="product-subtitle">California houses</h2>

        {/* ✅ 4-6 KARTOCHKALAR */}
        <div className="product-grid">
          {uylar.slice(3, 6).map((uy, index) => {
            const realIndex = index + 3;
            return (
              <div className="product-card" key={uy.id}>
                <img
                  src={rasmlar[realIndex]}
                  alt={`house ${realIndex + 1}`}
                  className="product-card-img"
                />

                <div className="product-card-info">
                  <h3 className="product-location">
                    <span className="location-icon">📍</span>
                    {locationlar[realIndex]}
                  </h3>

                  <p className="product-detail">
                    🏠 {xonalar[uy.id] ?? 0} Rooms • 📏 {sizeLar[realIndex].toLocaleString()} sq ft
                  </p>

                  <h4 className="product-price">${narxHisoblash(uy).toLocaleString()}</h4>

                  <div className="product-btn-box">
                    <button className="product-btn" onClick={() => xonaQosh(uy.id)}>
                      Add Room
                    </button>

                    <button className="product-btn reset-btn" onClick={() => xonaReset(uy.id)}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ UCHINCHI SARLAVHA */}
        <h2 className="product-subtitle">Miami houses</h2>

        {/* ✅ 7-9 KARTOCHKALAR */}
        <div className="product-grid">
          {uylar.slice(6, 9).map((uy, index) => {
            const realIndex = index + 6;
            return (
              <div className="product-card" key={uy.id}>
                <img
                  src={rasmlar[realIndex]}
                  alt={`house ${realIndex + 1}`}
                  className="product-card-img"
                />

                <div className="product-card-info">
                  <h3 className="product-location">
                    <span className="location-icon">📍</span>
                    {locationlar[realIndex]}
                  </h3>

                  <p className="product-detail">
                    🏠 {xonalar[uy.id] ?? 0} Rooms • 📏 {sizeLar[realIndex].toLocaleString()} sq ft
                  </p>

                  <h4 className="product-price">${narxHisoblash(uy).toLocaleString()}</h4>

                  <div className="product-btn-box">
                    <button className="product-btn" onClick={() => xonaQosh(uy.id)}>
                      Add Room
                    </button>

                    <button className="product-btn reset-btn" onClick={() => xonaReset(uy.id)}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;