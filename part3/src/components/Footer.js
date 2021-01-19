import React from 'react';


const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: '1rem',
        background: '#121212',
        position: 'fixed',
        bottom:0,
        textAlign: 'center',
        width: '100vw',
        padding: '1rem'
    }

    return(
       <div style = {footerStyle}>
          <br/>
          <em>Note app, Department of Computer Science, University of Helsinki 2020</em>
       </div>   
    )
}


export default Footer;
