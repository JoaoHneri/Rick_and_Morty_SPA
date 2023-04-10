import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'

const Social = () => {
  return (
    <div>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Redes Sociais</Accordion.Header>
        <Accordion.Body>
          
        <a href="http://www.instagram.com/joaoneri.00" className='text-decoration-none text-dark' id="redirect" target="_blank" rel='noreferrer'> <h5><BsInstagram/>Instagram</h5></a>
          <br/>
          <a href="https://www.linkedin.com/in/joão-henrique-neri" className='text-decoration-none text-dark' id="redirect" target="_blank" rel='noreferrer'> <h5><AiOutlineLinkedin/>Linkedin</h5></a>
          <br/>
          <a href="https://github.com/JoaoHneri" className='text-decoration-none text-dark' id="redirect" target="_blank" rel='noreferrer'> <h5><AiFillGithub/>GitHub</h5></a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
      
    </div>
  )
}

export default Social
