import React from 'react'

const project01 = [
  {
    logo: "/image/project-logo/DoraFactory.jpg",
    project_name: "Dora Factory",
    url: "https://dorafactory.org/"
  },
  {
    logo: "/image/project-logo/Globe.png",
    project_name: "Globe",
    url: "https://globe.exchange/"
  },
  {
    logo: "/image/project-logo/BeyondFi.png",
    project_name: "BeyondFi",
    url: "https://beyondfi.io/"
  },
  {
    logo: "/image/project-logo/HydraDX.png",
    project_name: "HydraDX",
    url: "https://hydradx.io/"
  },
  {
    logo: "/image/project-logo/Basilisk.png",
    project_name: "Basilisk",
    url: "https://bsx.fi/"
  },
  {
    logo: "/image/project-logo/Bit.Country Pioneer.png",
    project_name: "Bit.Country Pioneer",
    url: "https://pioneer.bit.country/"
  },
  {
    logo: "/image/project-logo/Kintsugi.jpg",
    project_name: "Kintsugi",
    url: "https://bsx.fi/"
  },
  {
    logo: "/image/project-logo/Bit.Country Continuum.png",
    project_name: "Bit.Country Continuum",
    url: "https://bit.country/"
  },
]

const project02 = [
  {
    logo: "/image/project-logo/Chumbi.png",
    project_name: "Chumbi Valley",
    url: "https://chumbivalley.com/"
  },
  {
    logo: "/image/project-logo/ICPSwap.png",
    project_name: "ICPSwap",
    url: "https://www.icpswap.com/"
  },
  {
    logo: "/image/project-logo/Metadojo.jpg",
    project_name: "Metadojo",
    url: "https://www.metadojo.io/"
  },
  {
    logo: "/image/project-logo/fantomGO.png",
    project_name: "fantomGO",
    url: "https://fantomgo.io/home"
  },
  {
    logo: "/image/project-logo/VictoriaVR.png",
    project_name: "Victoria VR",
    url: "https://www.victoriavr.com/"
  },
  {
    logo: "/image/project-logo/SkyArkChronicles.jpg",
    project_name: "SkyArk Chronicles",
    url: "https://www.skyarkchronicles.com/"
  },
]

const project03 = [
  {
    logo: "/image/project-logo/SeekTiger.png",
    project_name: "SeekTiger",
    url: "https://www.seektiger.com/"
  },
  {
    logo: "/image/project-logo/moonray.webp",
    project_name: "MoonRay",
    url: "https://moonray.game/"
  },
  {
    logo: "/image/project-logo/xland.png",
    project_name: "XLAND Metaverse",
    url: "https://xland.live/#/"
  },
  {
    logo: "/image/project-logo/Kira.png",
    project_name: "Kira Network",
    url: "https://kira.network/"
  },
  {
    logo: "/image/project-logo/stacks.svg",
    project_name: "Stacks",
    url: "https://www.stacks.co/"
  },
  {
    logo: "/image/project-logo/Conflux.png",
    project_name: "Conflux Network",
    url: "https://confluxnetwork.org/"
  },
  {
    logo: "/image/project-logo/Metaverse AI.jpg",
    project_name: "Metaverse AI",
    url: "https://www.metaverseai.org/"
  },
]



function Projects() {
  return (
  <div className="section-container">
      <div className="project-section-container">
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
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      <img src={item.logo} className="project-item-icon" alt={item.project_name}/>
                      <p>{item.project_name}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div className="slide-02">
                {project01.map((item) => (
                  <div className="project-item">
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      <img src={item.logo} className="project-item-icon" alt={item.project_name}/>
                      <p>{item.project_name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="projects-container-line">
              <div className="slide-03">
                {project02.map((item) => (
                  <div className="project-item">
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      <img src={item.logo} className="project-item-icon" alt={item.project_name}/>
                      <p>{item.project_name}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div className="slide-04">
                {project02.map((item) => (
                  <div className="project-item">
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      <img src={item.logo} className="project-item-icon" alt={item.project_name}/>
                      <p>{item.project_name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="projects-container-line">
              <div className="slide-05">
                {project03.map((item) => (
                  <div className="project-item">
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      <img src={item.logo} className="project-item-icon" alt={item.project_name}/>
                      <p>{item.project_name}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div className="slide-06">
                {project03.map((item) => (
                  <div className="project-item">
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      <img src={item.logo} className="project-item-icon" alt={item.project_name}/>
                      <p>{item.project_name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
      </div>
      </div>
    </div>
  )
}

export default Projects