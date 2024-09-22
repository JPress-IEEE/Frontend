// import React from 'react'
import { useState, useEffect } from 'react';
import data from './data.json'; // استيراد البيانات من ملف JSON
import "./Service_Provider.css"
export default function Service_Provider() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    setProviders(data); // تحميل البيانات من ملف JSON
  }, []);

  return (
    <div className="container mt-5">
      <div className="square">
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <p className="text">Choose a Service Provider</p>
      </div>

      <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-4 Service_Provider">
        {providers.map((provider) => (
          <div key={provider.id} className="p-4 rounded-lg shadow-lg bg-card">
            <img className="w-24 h-24 mx-auto rounded-full" src={provider.profilePic} alt={`Profile picture of ${provider.name}`} />
            <h2 className="text-lg font-semibold text-center text-primary">{provider.name}</h2>
            <p className="text-center text-muted-foreground">{provider.role}</p>
            <div className="flex justify-center my-2">
              {[...Array(4)].map((_, i) => (
                <span key={i} className={i < provider.rating ? "text-yellow-500" : "text-zinc-300"}>⭐</span>
              ))}
            </div>
            <p  className="text-center text-muted pr">{provider.description}</p>
            <button className="w-full p-2 mt-4 rounded bg-secondary text-secondary-foreground hover:bg-secondary/80">
              View profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
