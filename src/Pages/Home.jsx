import React, { useState, useEffect } from "react";
import "./Home.css";
import house from "../assets/house.png";
import dream__img from "../assets/dream__img.png";

// vector imglar
import Vector_1 from "../assets/Vector1.png";
import Vector_2 from "../assets/service.svg";
import Vector_3 from "../assets/Vector3.png";
import Vector_4 from "../assets/Vector4.png";

//  3 ta yangi rasm
import house1 from "../assets/image1.png";
import house2 from "../assets/image2.png";
import house3 from "../assets/image3.png";


//  3 ta yangi rasmlar
import shanba_1 from "../assets/shanba1.png";
import shanba_2 from "../assets/shanba2.png";
import shanba_3 from "../assets/shanba3.png";


//  3 ta yangi rasmlar imglar
import img_1 from "../assets/hhhhh.png";
import img_2 from "../assets/kata.png";
import img_3 from "../assets/tor.png";


//  2 ta yangi rasmlar imglar
import yonm from "../assets/yonm.png";
import yonm1 from "../assets/yonm1.png";




const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://698c128c21a248a27360636a.mockapi.io/house")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setLoading(false);
      });
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // 🔥 rasm array
  const images = [house1, house2, house3];

  return (
 
    <>
      <section className="hero">
        <div className="box">
          <div className="boxx">
            <h1>
              Find Your <br /> Dream Home
            </h1>
            <p className="text">
              Explore our curated selection of exquisite <br /> properties
              meticulously tailored to your <br /> unique dream home vision
            </p>
            <div className="btn-text">
              <button className="btn-1">Sign up</button>
            </div>
          </div>

          <div className="box-1">
            <img className="box1-img" src={house} alt="Box 1" />
          </div>
        </div>
      </section>
    
      <section className="features">
        <div className="feature ">
          <input type="text" name="search" id="search" placeholder="Location" />
          <input type="text" name="location" id="location" placeholder="Type" />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price Range"
          />
          <button className="features-btn">Sign up</button>
        </div>
      </section>
      <section className="dream">
        <div className="dream__box">
          <img src={dream__img} alt="" className="dream__img" />
          <div className="dream__info">
            <h2 className="dream__title">
              We Help You To Find Your Dream Home
            </h2>
            <p className="dream__text">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality
            </p>
            <div className="text-lar">
              <div className="dream__extraInfo">
                <h2 className="extra_title">8K+</h2>
                <p className="extra__text">Houses Available</p>
              </div>
              <div className="dream__extraInfo">
                <h2 className="extra_title">6K+</h2>
                <p className="extra__text">Houses Sold</p>
              </div>
              <div className="dream__extraInfo">
                <h2 className="extra_title">2K+</h2>
                <p className="extra__text">Trusted Agents</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="Wyh-text"> Why Choose Us</h2>
      <p className="Elevating">
        Elevating Your Home Buying Experience with Expertise, Integrity, and
        Unmatched Personalized Service
      </p>
      <section className="unbox">
        <div className="unbox-ing">
          <div className="unbox-extrainfo">
            <div className="boxes">
              {" "}
              <img src={Vector_1} alt="" />
            </div>
            <h2 className="unbox-text">Expert Guidance</h2>
            <p className="unbox-p">
              Benefit from our team's seasoned expertise for a smooth buying
              experience
            </p>
          </div>

          <div className="unbox-extrainfo">
            <div className="boxes">
              {" "}
              <img src={Vector_2} alt="" />
            </div>
            <h2 className="unbox-text">Personalized Service</h2>
            <p className="unbox-p">
              Our services adapt to your unique needs, making your journey stress-free
            </p>
          </div>

          <div className="unbox-extrainfo">
            <div className="boxes">
              {" "}
              <img src={Vector_3} alt="" />
            </div>
            <h2 className="unbox-text">Transparent Process</h2>
            <p className="unbox-p">
              Stay informed with our clear and honest approach to buying your home
            </p>
          </div>

          <div className="unbox-extrainfo">
            <div className="boxes">
              {" "}
              <img src={Vector_4} alt="" />
            </div>
            <h2 className="unbox-text">Exceptional Support</h2>
            <p className="unbox-p">Providing peace of mind with our responsive and attentive customer service</p>
          </div>
        </div>
      </section>
      <h2 className="Wyh-text">Our Popular Residences</h2>
      <section className="data-api">
  {loading ? (
    <div className="loading">Yuklanmoqda...</div>
  ) : (
    <div className="properties-grid">
      {properties.slice(0, 3).map((property, index) => {
        
        const images = [house1, house2, house3];

        return (
          <div key={property.id} className="property-card">
            <div className="property-image">
              <img
                src={images[index]}
                alt={`House ${index + 1}`}
              />
            </div>

            <div className="property-info">
              <div className="property-location">
                <span>{property.city}</span>
              </div>

              <div className="property-details">
                <div className="detail">
                  <span>{property.rooms} Rooms</span>
                </div>

                <div className="detail">
                  <span>{property.area}</span>
                </div>
              </div>

              <div className="property-footer">
                <button className="property-btn">Sign up</button>
                <div className="property-price">
                  {formatPrice(property.price)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )}
</section>

<section className="mars">
  <h2 className="Wyh-mars">What People Say <br /> About Dwello</h2>
  <div className="parents">
          <div className="pe">
            <img className="sadadadd" src={shanba_1} alt="" />
            <img className="adadsd" src={img_1} alt="" />
            <h2 className="sddsds">Sarah Nguyen</h2>
            <h2 className="dsdsada">San Francisco</h2>
            <p className="sdsddsd">
              Dwello truly cares about their clients. <br /> They listened to my
              needs and <br /> preferences and helped me find the <br /> perfect
              home in the Bay Area. Their <br /> professionalism and attention
              to detail <br /> are unmatched.
            </p>
          </div>
          <div className="pe">
            <img className="sadadadd" src={shanba_2} alt="" />
            <img className="adadsd" src={img_2} alt="" />
            <h2 className="sddsds">Michael Rodriguez</h2>
            <h2 className="dsdsada">San Diego</h2>
            <p className="sdsddsd">
              I had a fantastic experience working <br /> with Dwello. Their
              expertise and <br /> personalized service exceeded my <br />{" "}
              expectations. I found my dream home <br /> quickly and smoothly.
              Highly <br /> recommended!
            </p>
          </div>
          <div className="pe">
            <img className="sadadadd" src={shanba_3} alt="" />
            <img className="adadsd" src={img_3} alt="" />
            <h2 className="sddsds">Emily Johnson</h2>
            <h2 className="dsdsada">Los Angeles</h2>
            <p className="sdsddsd">
              Dwello made my dream of owning a <br /> home a reality! Their team
              provided <br /> exceptional support and guided me <br /> through
              every step of the process. I <br /> couldn't be happier with my
              new home!
            </p>
          </div>
        </div>
        <div className="naan">
          <img className="adadsd" src={yonm} alt="" />
          <img className="adadsd" src={yonm1} alt="" />
        </div>
</section>
    </>
  );
};

export default Home;