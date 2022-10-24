import { VStack, IconButton, Tooltip } from '@chakra-ui/react'
import { MdDashboard, MdMail, MdSettings } from 'react-icons/md'
import { HiLightningBolt, HiBell, HiTag, HiSearch } from 'react-icons/ui'

const Navigation = () => {
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full" >
      <VStack>
        {/*Chakra Logo */}
        <Tooltip label="Dashboard" placement="right">
          <IconButton color="gray.500" icon={<MdDashboard />} aria-label="Dashboard" />
        </Tooltip>
      </VStack>
    </VStack>
  )
}

export default Navigation;