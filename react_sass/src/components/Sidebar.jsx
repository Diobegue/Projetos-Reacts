import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import avatar from '../img/diobergue.jpg'
import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Diobergue Viana" />
      <p className="title">Desenvolvedor full-stack</p>
      <SocialNetworks />
      <InformationContainer />
      
      <a href="" className="btn">Download CV</a>
        
    </aside>
  )
}

export default Sidebar