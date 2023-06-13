import React from 'react'

const project01 = [
  {
    logo: "/image/project-logo/algo.svg",
    project_name: "Algorand"
  },
  {
    logo: "/image/project-logo/busd.svg",
    project_name: "BUSD"
  },
  {
    logo: "/image/project-logo/chainlink.svg",
    project_name: "Chainlink"
  },
  {
    logo: "/image/project-logo/chia.svg",
    project_name: "Chia"
  },
  {
    logo: "/image/project-logo/ether.svg",
    project_name: "Ethereum"
  },
  {
    logo: "/image/project-logo/fantom.svg",
    project_name: "Fantom"
  },
  {
    logo: "/image/project-logo/matic.svg",
    project_name: "Polygon"
  },
  {
    logo: "/image/project-logo/stacks.svg",
    project_name: "Stacks"
  },
  {
    logo: "/image/project-logo/stellar.svg",
    project_name: "Stellar"
  }
]

const project02 = [
  {
    logo: "/image/project-logo/matic.svg",
    project_name: "Polygon"
  },
  {
    logo: "/image/project-logo/stacks.svg",
    project_name: "Stacks"
  },
  {
    logo: "/image/project-logo/stellar.svg",
    project_name: "Stellar"
  },
]

const project03 = [
  {},
]



function Projects() {
  return (
    <div className="projects-section reveal" id="projects">
        <div className="title">
            <h1 className="projects-section-title">Our Portfolio</h1>
        </div>
        <div className="projects-container">
          <div className="project-container-layer">
            
          </div>

          <div className="projects-container-line">
            <div className="slide-01">
              {project01.map((item) => (
                <div className="project-item">
                    <img src={item.logo} className="project-item-icon"/>
                    <p>{item.project_name}</p>
                </div>
              ))}
            </div>
            <div className="slide-02">
              {project01.map((item) => (
                <div className="project-item">
                    <img src={item.logo} className="project-item-icon"/>
                    <p>{item.project_name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="projects-container-line">
            <div className="slide-03">
              {project01.map((item) => (
                <div className="project-item">
                    <img src={item.logo} className="project-item-icon"/>
                    <p>{item.project_name}</p>
                </div>
              ))}
            </div>
            <div className="slide-04">
              {project01.map((item) => (
                <div className="project-item">
                    <img src={item.logo} className="project-item-icon"/>
                    <p>{item.project_name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-container-line">
            <div className="slide-05">
              {project01.map((item) => (
                <div className="project-item">
                    <img src={item.logo} className="project-item-icon"/>
                    <p>{item.project_name}</p>
                </div>
              ))}
            </div>
            <div className="slide-06">
              {project01.map((item) => (
                <div className="project-item">
                    <img src={item.logo} className="project-item-icon"/>
                    <p>{item.project_name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
    </div>
  )
}

export default Projects