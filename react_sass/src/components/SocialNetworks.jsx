import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetwors.sass"

const SocialNetworks = () => {

    const socialNetworks = [
        {
            name: "Github",
            icon: <FaGithub />,
            url: "#"
        },
        {
            name: "Linkedin",
            icon: <FaLinkedin />,
            url: "#"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            url: "#"
        }
    ]

  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href="#" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks