import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1" fontSize="6xl" color="red.500">
        404
      </Heading>
      <Text fontSize="2xl" mt={4} mb={6} color="gray.600">
        Oops! Page not found.
      </Text>
      <Button colorScheme="teal" onClick={goHome}>
        Go to Home
      </Button>
    </Box>
  );
};
