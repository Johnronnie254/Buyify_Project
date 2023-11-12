import React from "react";

function AboutUs() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <p>
            Welcome to Buyify, your go-to online marketplace for all your needs.
            Our mission is to provide a seamless and enjoyable shopping
            experience for our customers.
          </p>
          <p>
            At Buyify, we believe in offering a diverse range of high-quality
            products at affordable prices. Whether you're looking for
            electronics, fashion, home goods, or more, we've got you covered.
          </p>
          <p>
            Our dedicated team is committed to ensuring your satisfaction. If
            you have any questions or concerns, feel free to reach out to our
            customer support team. Happy shopping!
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="path-to-your-image.jpg"
            alt="About Us Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
