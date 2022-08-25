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
  } from '@chakra-ui/react'
  
    function ModalPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Sign Up</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>Get started in less than 1 minute!</div>
              <Input placeholder='name@company.com' />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Get Started
              </Button>
          
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalPage