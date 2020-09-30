import React from 'react';
import Styled from 'styled-components';

const Styles = Styled.div`
background-color: rgb(221,160,221);
border-radius: 50px;

img{
  width: 75px;
  height: 75px;
  margin-left: 15px;
}
.img-holder{
  margin: 0 auto;
  width: 100%;
}

.img-holder a{
  margin-left:12px;
}

ul{
  list-style-type: none;
}
li{
  padding-top:25px;
}

li a {
  font-size: 1.10em;
}

.filler{
  padding-top: 0px;
}

.mail-img{

  width: 90px;
  margin-left: 7.5px;

}

.linkedin-a, .github-a{
  margin-left:20px !important;
}

`;

function Links() {

  return (
    <Styles className = 'page-content'>
      <h3 className = 'content-header'>Links</h3>
      <div className = 'filler'>
          <div className = "img-holder">
            <ul>
              <li><img src = "assests/links/mail.png" alt = "mail" className = "mail-img" /><a href = 'mailto:jackmurray445@gmail.com' className = 'mail-a'>jackmurray445@gmail.com</a> </li>
              <li><img src = "assests/links/linkedin.png" alt = "linkedin"/><a href="https://www.linkedin.com/in/jackfmurray" target="_blank" rel="noopener noreferrer" className = 'linkedin-a'>linkedin.com/in/jackfmurray</a></li>
              <li><img src = "assests/links/github.png" alt = "github" /><a href="https://github.com/jackmurray45" target="_blank" rel="noopener noreferrer" className = 'github-a'>github.com/jackmurray45</a></li>
            </ul>
          </div>
      </div>
    </Styles>
  );
}

export default Links;