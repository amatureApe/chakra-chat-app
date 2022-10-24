import { VStack, Flex, Avatar, AvatarBadge, Heading, HStack, IconButton, Box, Divider, Text } from '@chakra-ui/react'
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from 'react-icons/ri'

const onlineFriends = [
  'Lazar Nikolov',
  'Mark Chandler',
  'Segun Adebayo',
  'Tim Kolberger',
  'Folasade Agbaje',
  'Alex Gerrit',
  'Jason Hughes',
  'Jonathan Bakebwa',
  'Tioluwani Kolawole',
];

const ChatHistorySidebar = () => {
  return (
    <VStack h='full' alignItems='center' w='full' spacing={6}>
      <Flex
        w='full'
        flexDirection='column'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Avatar name='Travis Taylor' size='2xl'>
          <AvatarBadge bg='green.400' boxSize={8} borderWidth={4} />
        </Avatar>
        <VStack>
          <Heading size='md' mt={{ base: 0, lg: 3 }}>
            Travis Taylor
          </Heading>
          <HStack px={8} justifyContent='center' spacing={3} mt={6}>
            <IconButton
              icon={<RiDribbbleLine />}
              variant='ghost'
              rounded='full'
              color='gray.500'
              h={10}
              aria-label='Dribbble Account'
            />
            <IconButton
              icon={<RiInstagramLine />}
              variant='ghost'
              rounded='full'
              color='gray.500'
              h={10}
              aria-label='Instagram Account'
            />
            <IconButton
              icon={<RiTwitterFill />}
              variant='ghost'
              rounded='full'
              color='gray.500'
              h={10}
              aria-label='Twitter Account'
            />
          </HStack>
        </VStack>
      </Flex>
      <Box px={8} w='full'>
        <Divider color='gray.100' />
      </Box>
      <HStack px={8} w='full' justifyContent='space-between'>
        <Heading size='xs'>Friends online</Heading>
        <Text fontSize='sm' color='gray.500' fontWeight='semibold'>
          23
        </Text>
      </HStack>
      <HStack
        overflowX='auto'
        minH={24}
        px={8}
        w='full'
        justifyContent='flex-start'
        spacing={3}
      >
        {onlineFriends.map((friend) => (
          <Avatar name={friend} key={friend} />
        ))}
      </HStack>
    </VStack>
  );
};

export default ChatHistorySidebar

