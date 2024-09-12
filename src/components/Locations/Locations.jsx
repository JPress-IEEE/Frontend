import React from 'react';
import { Link } from 'react-router-dom';
import "./Locations.css"
const Locations = () => {

  return (
<>
  {/* Locations Section Starts */}
  <div className="locationsec">
    <div className="container">
      <div className="locsec-wrap flexrow">
        <div className="lswrap-desc">
          <div className="fancytitle">
            <h2>Our Locations</h2>
          </div>
          <div className="cmseditor">
            <p>
              Partnered with the major car hire companies, Faster Rent A Car is
              your one-stop-solution to find a cheap car rental facility
              anywhere in Dubai.
            </p>
          </div>
        </div>
        <div
          className="lswrap-map bgimagelazyload"
          data-src="/img"
        >
          <ul>
            <li className='li-none'>
              <a href="rent-a-car-al-barsha/">
                <span className="blinkcircle" />
                Al Barsha
              </a>
            </li>
            <li className='li-none'>
              <a href="rent-a-car-dubai-mall/">
                <span className="blinkcircle" />
                Dubai Mall
              </a>
            </li>
            <li className='li-none'>
              <a href="rent-a-car-mall-of-emirates/">
                <span className="blinkcircle" />
                Mall of Emirates
              </a>
            </li>
            <li>
              <a href="rent-a-car-business-bay/">
                <span className="blinkcircle" />
                Business Bay
              </a>
            </li>
            <li>
              <a href="rent-a-car-dubai-marina/">
                <span className="blinkcircle" />
                Dubai Marina
              </a>
            </li>
            <li>
              <a href="rent-a-car-international-city/">
                <span className="blinkcircle" />
                International City
              </a>
            </li>
            <li>
              <a href="rent-a-car-shaikh-zayed-road/">
                <span className="blinkcircle" />
                Shaikh Zayed Road
              </a>
            </li>
            <li>
              <a href="rent-a-car-palm-jumeriah/">
                <span className="blinkcircle" />
                Palm Jumeriah
              </a>
            </li>
            <li>
              <a href="rent-a-car-dubai-airport/">
                <span className="blinkcircle" />
                Dubai Airport
              </a>
            </li>
            <li className='li-none'>
              <a href="rent-a-car-jumeirah-lake-towers/">
                <span className="blinkcircle" />
                Jumeirah Lake Towers
              </a>
            </li>
            <li className='li-none'>
              <a href="rent-a-car-al-quoz/">
                <span className="blinkcircle" />
                Al Quoz
              </a>
            </li>
            <li className='li-none'>
              <a href="rent-a-car-deira/">
                <span className="blinkcircle" />
                Deira Dubai
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Location Section Ends */}
</>

  );
}

export default Locations;
