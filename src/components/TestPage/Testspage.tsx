import React from "react";
import { chakra, Box, Flex, useColorModeValue, HStack, Stack, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Ma = () => {
  return (
    
    
    <Stack 
        bg={useColorModeValue("#fff", "gray.600")}
        p={50}
        w="90%"
        ml= {{ base:0,lg:'10%'}}
        alignItems="center"
        justifyContent="center"
    
    
    >
      <Flex
        maxW="5xl"
        w="full"
        h={'15rem'}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Backpack
          </chakra.h1>

          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </chakra.p>

          <HStack spacing={1} display="flex" alignItems="center" mt={2}>
            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
            <StarIcon color="gray.500" />
            <StarIcon color="gray.500" />
          </HStack>

          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              $220
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>

            <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                {/* <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                /> */}
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  Jone Doe
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015
              </chakra.span>
              </Flex>
            </Box>
        

      </Flex>

      

    </Stack>       
      
    
  );
};

export default Ma;