import React from 'react';
import Styled from 'styled-components';


const Styles = Styled.div`
  background-color: rgb(135,206,250);
  border-radius: 50px;
  min-height: 445px;
`;

function Experience() {

  return (
    <Styles>
      <h3 className = 'content-header'>Experience</h3>
      <div className = 'filler'>
          <p>I graduated University of California, Irvine in 2018 and have been working as a software engineer since. 
            Most of my work experience since I finished schools has been full-stack web development with an emphasis on back-end. I consider myself
            a quick learner when it comes to learning new software designs and concepts and always try to keep up with current trends.</p>
          <h4>Overview</h4>
          <ul>
            <li><u>Languages:</u> Python, PHP, Java, Javascript, C#/C++, ColdFusion</li>
            <li><u>Frameworks/Libraries:</u> Laravel, Codeigniter, Express.js, Sails.js, Vue.js, React.js </li>
            <li><u>Databases:</u> MySQL, SQL Server, MongoDB</li>
            <li><u>DevOps Tools:</u> Git, Docker</li>
          </ul>
      </div>
    </Styles>
  );
}

export default Experience;