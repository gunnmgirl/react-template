import { Box, Flex, Text, HStack, Link, Spacer } from "@chakra-ui/react";

import { ColorModeButton } from "components/ui/ColorMode";

export const Navbar = () => {
  return (
    <Box as="nav" color="white" py={4} px={8} boxShadow="md">
      <Flex align="center">
        <Text color="gray.300" fontSize="xl" fontWeight="bold">
          My App
        </Text>
        <Spacer />
        <HStack as="ul" gap={5} listStyleType="none">
          <li>
            <Link
              href="/dashboard"
              fontSize="md"
              _hover={{ color: "gray.300" }}
            >
              Home
            </Link>
          </li>
        </HStack>
        <Spacer />
        <ColorModeButton />
      </Flex>
    </Box>
  );
};
