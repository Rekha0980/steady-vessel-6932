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
import { useNavigate } from 'react-router-dom';
  
    function ModalPage() {
      const navigate = useNavigate();
      const handleSubmit = () => {

        setTimeout(() => {
          navigate("/");
        }, 1500);
        
      };
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
              <Input placeholder='name@company.com' />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                Get Started
              </Button>
          
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalPage