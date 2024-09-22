// import React, { useState, useEffect } from "react";
import "./Offers.css";
import offersData from "./offersData.json"; // Importing the JSON data

export default function Offers() {
  return (
    <div className="container px-4 Offers_1">
      <div className="square">
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <p className="text">
        Browse offers that fit your needs        </p>
      </div>

      {/* Render Offers dynamically */}
      {offersData.map((offer) => (
        <div className="Offers" key={offer.id}>
          <div className="p-4 rounded-lg bg-card">
            <p  className="postedTime text-muted">{`Posted ${offer.postedTime}`}</p>
            <h2 className="text-lg font-bold text">{offer.title}</h2>
            <p className="text-muted-foreground">{offer.description}</p>
            <div className="flex items-center gap-20 mt-4 ">
              <span className="text-mutedd">
                Category type: <strong>{offer.category}</strong>
              </span>
              <span style={{ color: "#003e7e" }} className="text-muted">
                <i className="fa-solid fa-location-dot"></i> {offer.location}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
