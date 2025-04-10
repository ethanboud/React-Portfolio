import * as Icon from 'react-bootstrap-icons';

function footer() {
    return(
         <div className="footer">
            <a href="https://github.com/ethanboud"><Icon.Github size={40} color="white" /></a>
             <a href="https://www.linkedin.com/in/ethanboud/"><Icon.Linkedin size={40} color="white" /></a>
            <a href="https://www.instagram.com/ethanboud/"><Icon.Instagram size={40} color="white" /></a>
        </div>
     )
}
export default footer;