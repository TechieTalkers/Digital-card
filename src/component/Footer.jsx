import React from 'react'
import '../style/ComponetStyle.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer=()=>{
    return(
        <div className="footer">
<i><TwitterIcon   style={{width:"25px", height: "25px", background: "#918E9B",     position: "absolute",    top: "22.75%",left: "20.00%", borderRadius:"3px"}}/></i>
<i><FacebookIcon  style={{width:"25px", height: "25px", background: "#918E9B",     position: "absolute",    top: "22.75%",left: "38.00%", borderRadius:"3px"}}/></i>
<i><InstagramIcon   style={{width:"25px", height: "25px", background: "#918E9B",     position: "absolute",    top: "22.75%",left: "55.00%", borderRadius:"3px"}}/></i>
<i><GitHubIcon   style={{width:"25px", height: "25px", background: "#918E9B",     position: "absolute",    top: "22.75%",left: "73.00%", borderRadius:"3px"}}/></i>
        </div>
    )
}
export default Footer;