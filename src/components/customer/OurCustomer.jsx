import React from 'react'

const CustomerList = [
  {
    logo: "/image/customer/Binance.png",
    customerName: "Binance",
    alt: "Binance"
  },
  {
    logo: "/image/customer/Huobi-logo.png",
    customerName: "Houbi",
    alt: "Houbi"
  },
  {
    logo: "/image/customer/OKX_logo.svg",
    customerName: "OKX",
    alt: "OKX"
  },
  {
    logo: "/image/customer/KUCOIN.svg",
    customerName: "Kucoin",
    alt: "Kucoin"
  },
  {
    logo: "/image/customer/Gateio.svg",
    customerName: "Gateio",
    alt: "Gateio"
  },
  {
    logo: "/image/customer/MEXC Global.svg",
    customerName: "MEXC Global",
    alt: "MEXC Global"
  },
  {
    logo: "/image/customer/bybit-logo.svg",
    customerName: "Bybit",
    alt: "Bybit"
  },
  {
    logo: "/image/customer/Bithumb.png",
    customerName: "Bithumb",
    alt: "Bithumb"
  },
  {
    logo: "/image/customer/Etoro_logo.svg.png",
    customerName: "Etoro",
    alt: "Etoro"
  },
  {
    logo: "/image/customer/BingX.png",
    customerName: "BingX",
    alt: "BingX"
  },
  {
    logo: "/image/customer/NodeCaptial.jpg",
    customerName: "NodeCaptial",
    alt: "NodeCaptial"
  },
  {
    logo: "/image/customer/GenesisCapital.jpg",
    customerName: "GenesisCapital",
    alt: "GenesisCapital"
  },
  {
    logo: "/image/customer/jinse.jpg",
    customerName: "Jinse",
    alt: "Jinse"
  },
  {
    logo: "/image/customer/BNCapital.jpg",
    customerName: "BNCapital",
    alt: "BNCapital"
  },
  {
    logo: "/image/customer/LMT.jpg",
    customerName: "LMT",
    alt: "LMT"
  },
  {
    logo: "/image/customer/BHEX.jpg",
    customerName: "BHEX",
    alt: "BHEX"
  },
  {
    logo: "/image/customer/WBF.jpg",
    customerName: "WBF",
    alt: "WBF"
  },
  {
    logo: "/image/customer/SunriseDragon.png",
    customerName: "SunriseDragon",
    alt: "SunriseDragon"
  },
  {
    logo: "/image/customer/Acent.png",
    customerName: "Acent",
    alt: "Acent"
  },
  {
    logo: "/image/customer/Aluna.png",
    customerName: "Aluna",
    alt: ""
  },
  {
    logo: "/image/customer/Contentos.png",
    customerName: "Contentos",
    alt: ""
  },
  {
    logo: "/image/customer/CrossFi.png",
    customerName: "CrossFi",
    alt: ""
  },
  {
    logo: "/image/customer/dAppstore.png",
    customerName: "dAppstore",
    alt: ""
  },
  {
    logo: "/image/customer/Evrynet.svg",
    customerName: "Evrynet",
    alt: ""
  },
  {
    logo: "/image/customer/Velo.svg",
    customerName: "Velo",
    alt: ""
  },
  {
    logo: "/image/customer/XRUN.png",
    customerName: "XRUN",
    alt: ""
  },
  {
    logo: "/image/customer/YourEarthDAO.svg",
    customerName: "Your Earth DAO",
    alt: ""
  },
  {
    logo: "/image/customer/Gravity.svg",
    customerName: "Gravity",
    alt: "Gravity"
  },

]

function OurCustomer() {
  return (
  <div className="section-container">
    <div className="customer-section-container">
      <section className="customer-section reveal" id="customers">
        <h1 className="section-title">Companies & Clients</h1>
        <div className="customer-container">
            { CustomerList.map( (item) => (
              <figure>
                <img src={item.logo} alt={item.alt}></img>
              </figure>
            ))}
        </div>
      </section>
    </div>
  </div>
  )
}

export default OurCustomer