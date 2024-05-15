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
  /*{
    logo: "/image/media/blocktides.jpg",
    customerName: "blocktides",
    alt: "blocktides"
  },*/
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
    logo: "/image/media/htv.png",
    customerName: "HTV",
    alt: "HTV"
  },
  {
    logo: "/image/media/vov.jpg",
    customerName: "VOV",
    alt: "VOV"
  },
  {
    logo: "/image/media/VITV_logo.webp",
    customerName: "VITV",
    alt: "VITV"
  },
  {
    logo: "/image/media/fbnc.png",
    customerName: "fbnc",
    alt: "fbnc"
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
    logo: "/image/media/vietnamnet.jpg",
    customerName: "vietnamnet",
    alt: "vietnamnet"
  },
  {
    logo: "/image/media/cafebiz.png",
    customerName: "cafebiz",
    alt: "cafebiz"
  },
  {
    logo: "/image/media/cafef.png",
    customerName: "CafeF",
    alt: "CafeF"
  },
  {
    logo: "/image/media/dantriinternational.png",
    customerName: "DantriInternational",
    alt: "DantriInternational"
  },
  {
    logo: "/image/media/doanhnghiephoinhap.jpg",
    customerName: "doanhnghiephoinhap",
    alt: "doanhnghiephoinhap"
  },
  {
    logo: "/image/media/enternews.png",
    customerName: "enternews",
    alt: "enternews"
  },
  {
    logo: "/image/media/ictnew.png",
    customerName: "ictnews",
    alt: "ictnews"
  },
  {
    logo: "/image/media/Logo_baomoi.png",
    customerName: "BaoMoi",
    alt: "BaoMoi"
  },
  {
    logo: "/image/media/logobizhub.png",
    customerName: "bizhub",
    alt: "bizhub"
  },
  {
    logo: "/image/media/thegioitiepthi.webp",
    customerName: "thegioitiepthi",
    alt: "thegioitiepthi"
  },
  {
    logo: "/image/media/mxpress.png",
    customerName: "mxpress",
    alt: "mxpress"
  },
  {
    logo: "/image/media/thoibaonganhang.png",
    customerName: "thoibaonganhang",
    alt: "thoibaonganhang"
  },
  {
    logo: "/image/media/thoibaotaichinh.svg",
    customerName: "thoibaotaichinh",
    alt: "thoibaotaichinh"
  },
  {
    logo: "/image/media/vccinews.png",
    customerName: "vccinews",
    alt: "vccinews"
  },
  {
    logo: "/image/media/vietnamnews.png",
    customerName: "vietnamnews",
    alt: "vietnamnews"
  },
  {
    logo: "/image/media/virlogo.svg",
    customerName: "virlogo",
    alt: "virlogo"
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
  {
    logo: "/image/customer/CryptoHolic.webp",
    customerName: "CryptoHolic",
    alt: "CryptoHolic"
  },
  {
    logo: "/image/customer/SaigonTradeCoin.png",
    customerName: "SaigonTradeCoin",
    alt: "SaigonTradeCoin"
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