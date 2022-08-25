import { Box, Button, Heading,Input,Text,Flex, Spacer, Image } from "@chakra-ui/react"
import Navbar from "./Navbar"

function HomePage(){
    return(
        <div>
     <Navbar/>
     <div className="vd">

     
     <Box maxW="800px" mx="auto" padding="20px">
     <Heading
      as="h1"
      justifySelf="center"
      >The ultimate project management OS</Heading>
     </Box>
    
       <Text fontSize='md'>Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools.</Text>{" "}
       <Text>Nifty is one app to unite teams, goals, and actions in one place.</Text>
       <Box maxW="600px" mx="auto" marginTop="20px">
        <Flex>

            <Input bgColor="white" justifySelf="center" type="text" w="500px" h="50px"placeholder="name@company.com" />
            <Button  colorScheme='teal' size="lg">Get Started</Button>
                </Flex>
      </Box>
      <Button bgColor="white" colorScheme="white"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"marginTop="20px" color="black" size="lg" w="610px">Sign Up with Google</Button>
      <Text marginTop="20px">Free forever. No credit card required.</Text>
      </div>
      <Text marginTop="20px">JOIN OVER 20,000 HIGHLY PRODUCTIVE TEAMS</Text>
      <Box maxW="800px" mx="auto" padding="20px" >
        <Flex>
            <Image
            h="100px"
            w="100px"
    src='https://niftypm.com/_nuxt/img/logo-verizon.b7c8a9c.svg'
    alt='im1'
    marginRight="30px"
  />
            <Image
    h="100px"
    w="100px"
    marginRight="30px"
    src='https://niftypm.com/_nuxt/img/logo-pd.e35bded.svg'
    alt='im2'
  />
   <Image
    h="100px"
    w="100px"
    marginRight="30px"
  
    src='https://niftypm.com/_nuxt/img/logo-emovis.895c86e.svg'
    alt='im3'
  />
   <Image
    h="100px"
    w="100px"
    marginRight="30px"
    src='https://niftypm.com/_nuxt/img/logo-vmware.b3363fd.svg'
    alt='im4'
  />
   <Image
    h="50px"
    w="80px"
    marginRight="30px"
src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhY2JhZDAiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K'
    alt='im5'
  />
  <Image
    h="100px"
    w="100px"
    marginRight="30px"
    src='https://niftypm.com/_nuxt/img/logo-loreal.8cc4fed.svg'
    alt='im6'
  />
   <Image
    h="100px"
    w="100px"
    marginRight="30px"
    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiNhY2JhZDAiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg=='
    alt='im7'
  />
            
        </Flex>
      </Box>
        </div>
        
      
        
        
       
    )
}
export default HomePage