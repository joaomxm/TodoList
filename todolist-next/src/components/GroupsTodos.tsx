import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {MdOutlineHorizontalRule} from 'react-icons/md'

export function TodoGroup({setValue,groups}){

    return (
        <Box  ml={4} mt={4} mr={4} fontWeight={'500'} >
                            <Text>
        
              {groups?
                 groups.map((data,key)=>(
                     <Text w={'full'} key={key}  backgroundColor='#20212c' variant='ghost' justifyContent={'flex-start'} borderRadius={0}  _hover={{ bg: "#272732" }} onClick={(e)=>setValue(data.id)}>
                         <MdOutlineHorizontalRule />
                         
                             <Text>
                             {data.name}
                             </Text>
                            
                         
                     </Text>
                    
                     ))
                     :
                     <></>
                 }
                </Text> 
        
        </Box>
        
)
}
