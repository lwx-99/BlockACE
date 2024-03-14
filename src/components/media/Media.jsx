import React from 'react'

const CustomerList = [
  {
    logo: "/image/media/forbes.png",
    customerName: "Forbes",
    alt: "Forbes"
  },
  {
    logo: "/image/media/inc.png",
    customerName: "Inc.",
    alt: "Inc."
  },
  {
    logo: "/image/media/yahoofinance.png",
    customerName: "YahooFinance",
    alt: "YahooFinance"
  },
  {
    logo: "/image/media/cointime.svg",
    customerName: "Cointime",
    alt: "Cointime"
  },
  {
    logo: "/image/media/digitalnotice.webp",
    customerName: "DigitalNotice",
    alt: "DigitalNotice"
  },
  {
    logo: "/image/media/coinotaku.png",
    customerName: "coinotaku",
    alt: "coinotaku"
  },
  {
    logo: "/image/media/cointokyo.png",
    customerName: "CoinTokyo",
    alt: "CoinTokyo"
  },
  {
    logo: "/image/media/blocktides.jpg",
    customerName: "blocktides",
    alt: "blocktides"
  },
  {
    logo: "/image/media/sctv.png",
    customerName: "SCTV",
    alt: "SCTV"
  },
  {
    logo: "/image/media/vtc.png",
    customerName: "VTC",
    alt: "VTC"
  },
  {
    logo: "/image/media/thanhnien.png",
    customerName: "thanhnien",
    alt: "thanhnien"
  },
  {
    logo: "/image/media/vnexpress.png",
    customerName: "vnexpress",
    alt: "vnexpress"
  },
  {
    logo: "/image/media/sgtimes2.png",
    customerName: "sgtimes",
    alt: "sgtimes"
  },
  {
    logo: "/image/media/cafebiz.png",
    customerName: "cafebiz",
    alt: "cafebiz"
  },
  {
    logo: "/image/media/bta.webp",
    customerName: "blogtienao",
    alt: "blogtienao"
  },
  {
    logo: "/image/media/coin68.svg",
    customerName: "coin68",
    alt: "coin68"
  },
  
  
  
  

]

function OurCustomer() {
  return (
  <div className="section-container">
    <div className="media-section-container">
      <section className="media-section reveal" id="media-relation">
        <h1 className="section-title">Our Works Seen On</h1>
        <div className="media-container">
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