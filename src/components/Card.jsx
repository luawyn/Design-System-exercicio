import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function Card(props) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${props.makeup.image_link})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={props.makeup.image_link}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Stack direction={"row"} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              fontWeight={700}
            >
              {props.makeup.brand}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"capitalize"}
            >
              -- {props.makeup.product_type}
            </Text>
          </Stack>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {props.makeup.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${props.makeup.price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {/* {props.makeup.price} */}
            </Text>
          </Stack>
          <Text color={"gray.500"} fontSize={"sm"}>
            {props.makeup.description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
