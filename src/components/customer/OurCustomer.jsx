import React from 'react'

const CustomerList = [
  {
    logo: "/image/customer/Acent.png",
    customerName: "Acent"
  },
  {
    logo: "/image/customer/Aluna.png",
    customerName: "Aluna"
  },
  {
    logo: "/image/customer/Bithumb.png",
    customerName: "Bithumb"
  },
  {
    logo: "/image/customer/Contentos.png",
    customerName: "Contentos"
  },
  {
    logo: "/image/customer/CrossFi.png",
    customerName: "CrossFi"
  },
  {
    logo: "/image/customer/dAppstore.png",
    customerName: "dAppstore"
  },
  {
    logo: "/image/customer/Evrynet.png",
    customerName: "Evrynet"
  },
  {
    logo: "/image/customer/Velo.svg",
    customerName: "Velo"
  },
  {
    logo: "/image/customer/XRUN.png",
    customerName: "XRUN"
  },
  {
    logo: "/image/customer/YourEarthDAO.svg",
    customerName: "Your Earth DAO"
  }
]

function OurCustomer() {
  return (
    <div className="customer-section">
      <h1 className="section-title">Our Customers</h1>
      <div className="customer-container">
          { CustomerList.map( (item) => (
            <figure>
              <img src={item.logo} width="220"></img>
            </figure>
          ))}
      </div>
      
    </div>
  )
}

export default OurCustomer