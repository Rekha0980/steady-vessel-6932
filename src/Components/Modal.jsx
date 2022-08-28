import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Img,
    
  } from '@chakra-ui/react'
import { useState } from 'react';
import {Navigate } from 'react-router-dom';

  
    function ModalPage() {
      const [email, setEmail] = useState("");
     
     
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} bgColor="#00BAAB" color="white" borderRadius="11px" h="33px">Sign Up</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Img id="logo"src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" mx="auto"/>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className='modal'>Get started in less than 1 minute!</div>
              <Input placeholder='name@company.com' value={email} onChange={e=>setEmail(e.target.value)} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue'  onClick={<Navigate to="/"/>}>
                Get Started
              </Button>
          
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalPage