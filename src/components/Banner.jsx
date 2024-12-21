import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
            <div className="carousel w-full mt-10 ">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/M1pq3jh/Adobe-Stock-609108111-Preview.jpg"
      className="w-full h-[500px] " />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://sportswarehouse.asia/wp-content/uploads/2023/01/shop-online-sporting-store-980x323.jpg"
      className="w-full h-[500px]" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/Df47FMp/v2-dgiko-vfl2j.jpg"
      className="w-full h-[500px]" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/d7KQcpk/toko-3-1-scaled.jpg"
      className="w-full h-[500px]" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 absolute -mt-10 py-2">
  <a href="#item1" className="btn btn-xs "></a>
  <a href="#item2" className="btn btn-xs"></a>
  <a href="#item3" className="btn btn-xs"></a>
  <a href="#item4" className="btn btn-xs"></a>
</div>
        </div>
        </div>
    );
};

export default Banner;