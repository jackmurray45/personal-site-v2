import React, { useEffect } from 'react'
import Styled from 'styled-components';
import { useSpring, animated } from "react-spring";
import {Nav} from 'react-bootstrap/';
import {Link} from 'react-router-dom';

const Styles = Styled.div`
    
    .glance {
        background: #81ecec;
        width: 100%;
        height: 50px;
        position: absolute;
        margin: 0 auto;
        left: 0;
        z-index: -1;
        top: -140%;
    }
    .nav-link{
        display: inline-block;
        margin: 0 auto !important;
        text-decoration: underline;
        text-decoration-color: #81ecec;
        height:20px;
        position: relative;
        padding: 0 !important;
        overflow-y:hidden;
    }

    .nav-link:hover{
        color:white !important;
    }
`;


function HoverNavLink(props) {

    const isActive = props.isActive;
    const [{ y }, set] = useSpring(() => ({ y: (isActive ? 0 : 100) }));

    useEffect(() => {
        //manually set y to 100 for when route changes
        if(!isActive)
            set({ y: 100, color: "#fff" })
    });

    return (
    <Styles className = {props.className}>
        <Nav.Link 
            as={Link} 
            to={`/${props.link}`} 
            target= {props.tab ? '_blank' : ''} 
            onMouseEnter={() => set({ y: 0, color: "#000" })}
            onMouseLeave={() => set({ y: (isActive ? 0 : 100), color: "#fff" })}
        >
            {props.name} 
            <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="glance"
            />
        </Nav.Link>
    </Styles>
    )
}
export default HoverNavLink;