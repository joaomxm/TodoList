import { Box, Button, Center, Grid, GridItem, HStack, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {MdOutlineHorizontalRule} from 'react-icons/md'

export function GroupTodoHome({setValue,groups}){
    return (
 
        <VStack>

        <HStack>
            <Text fontWeight={500} mt={10} mb={8}>Grupos de Tarefas</Text>
        </HStack>
     
        <SimpleGrid columns={5} spacing='5' >
            {groups?
                 groups.map((data,key)=>(
                     <Box key={key} borderRadius={'8px'} backgroundColor={' #303035'} p={4} color='white' height='auto' _hover={{ bg: "#272732" }} cursor={'pointer'}  onClick={(e)=>setValue(data.id)}>
                     <Text w={'full'}    variant='ghost' justifyContent={'flex-start'} borderRadius={0}  >
                             <Text>
                             {data.name}
                             </Text>
                            
                         
                     </Text>
                    
                    </Box>
                     ))
                     :
                     <></>
                 }
            
      </SimpleGrid>
      </VStack>
        
)
}
