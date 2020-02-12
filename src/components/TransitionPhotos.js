import React, { useState, useEffect } from 'react'
import Styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring'

const Styles = Styled.div`
  .bg {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 235px;
  background-size: cover;
  background-position: center;
  will-change: opacity;
  border-radius: 50%;
  z-index:1000 !important;
}
  
`;

const slides = [
  { id: 0, url: 'assests/me.jpg'},
  { id: 1, url: 'assests/about1.jpg' },
  { id: 2, url: 'assests/about2.jpg' }
]

function TransitionPhotos() {

  const [index, set] = useState(0)

  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 5000), [])
  return transitions.map(({ item, props, key }) => (
    <Styles key = {key}>
      <animated.div
        key={key}
        className="bg"
        style={{ ...props, backgroundImage: `url(${item.url})` }}
      />
    </Styles>
  ))

}

export default TransitionPhotos;