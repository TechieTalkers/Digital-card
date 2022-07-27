import React from "react"
import "../style/ComponetStyle.css"
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import About from './About';
import Interests from './Interests'
import Footer from "./Footer"

const Information=()=>{
    return(
        
     
        <div>
               <div className="nav-content">

                </div>
                <div className="information-subcontent">
                <h1 className="name">Laura Smith</h1>
                <h3 className="role">Frontend Developer</h3>
                <h4 className="web">laurasmith.website</h4>
              
                <button className="email"><MailIcon style={{width:"15px"}}/>Email</button>
                <button className="link"><LinkedInIcon style={{width:"15px"}}/>Linkedin</button>
                
                <About />
                <Interests />
                <Footer />
                </div>

        </div>
    )
}

export default Information;