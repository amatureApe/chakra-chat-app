import { HStack, Flex } from '@chakra-ui/react'
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from 'react-icons/ri'

import Navigation from '../components/Navigation'
import ChatHistorySidebar from '../components/ChatHistory/ChatHistorySidebar'

const IndexPage = () => (
  <HStack h="100vh" spacing={0}>
    <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
      <Navigation />
    </Flex>
    <Flex as="aside" h="full" maxW="sm" w="full" borderRightColor="gray.100" borderRightWidth={1} pt={8}>
      <ChatHistorySidebar />
    </Flex>
    <Flex as="main" h="full" flex={1} borderRightColor="gray.100" borderRightWidth={1} />
    <Flex as="aside" h="full" maxW="sm" w="full" />
  </HStack>
)

export default IndexPage
