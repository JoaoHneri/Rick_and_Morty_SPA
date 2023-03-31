import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Social = () => {
  return (
    <div>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Redes Sociais</Accordion.Header>
        <Accordion.Body>
          <a href="http://www.instagram.com/joaoneri.00" id="redirect" target="_blank" rel='noreferrer'>Insta: joaoneri.00</a>
          <br/>
          <a  href="http://www.linkedin.com/joao-henrique-neri" id="redirect" target="_blank" rel='noreferrer'>Linkedin: João Henrique Neri</a>
          <br/>
          <a href="http://www.github.com/joaohneri" id="redirect" target="_blank" rel='noreferrer'>Github: /JoaoHneri</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
      
    </div>
  )
}

export default Social
