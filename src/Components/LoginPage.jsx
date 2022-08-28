import { Button, Flex, Input, Spinner,Box ,Text, FormControl, FormLabel, Heading, Img} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


    
       
function LoginPage ()  {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="logintop">
    <>
    <Img   h="40px"mx="auto"src="https://nifty.pm/static/media/nifty-logo.622c3309bcffc8b8f40273706462925f.svg"/>
    <Box h="550px" w="900px" mx="auto" border="1px solid lightgray" borderRadius="10px" marginTop="20px">
    <Flex>
        <Box maxW="lg" padding="30px" bgColor="#fcf9f7">
          <Box marginBottom="10px">
            <Flex>
              <Box padding="2px" h="18px"color="white" borderRadius="10px" backgroundColor="orange" fontSize="10px">COMING SOON</Box>
              <Box marginLeft="10px" fontWeight="bold">Reporting Dashboard</Box>
            </Flex>
          </Box>
          <Text >Powerful reporting to keep you on top of your business and workload. Customize your dashboard to gain insights and make informed decisions.</Text>
      <Img src="https://nifty.pm/static/media/main.9818dcc508e7ef1f7d96.png" marginTop="20px"/>
      </Box>
    <Box maxW="lg" padding="30px" backgroundColor="white" borderRadius="10px">
      <Text  marginBottom="10px"fontSize='xl'fontWeight="bold" >Log in to your account</Text>
    <FormControl isRequired>
    <FormLabel>Email Address</FormLabel>
          <Input
            value={email}
            placeholder="name@company.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
           <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" />
          <br />
          <br />
          <Button bgColor="#00BAAB" color="white" marginTop="10px" w="400px"onClick={handleSubmit}>
            Log in
            {isLoading && <Spinner color="red.500" />}
          </Button>
          </FormControl>
          <Text fontSize='md' color="orange"marginTop="10px">Sign in with Google</Text>
          <Text fontSize='md'marginTop="10px">Sign in with SSO</Text>
          <Text fontSize='xs'marginTop="10px">OR</Text>
          <Text fontSize='md'marginTop="10px">Don’t have an account?</Text>
          <Button color="orange"  border="1px solid lightgrey" bgColor="white" marginTop="10px" w="150px"onClick={handleSubmit}>
           Sign up for free
          </Button>
          
          
        
      </Box>
    </Flex>
    </Box>
     
    </>
    </div>
  );
};

   export default LoginPage
  