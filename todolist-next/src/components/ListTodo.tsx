import { VStack,Box, IconButton,Text, Heading, Stack, Flex, Button, Spacer, Grid, HStack, Checkbox } from "@chakra-ui/react"
import axios from "axios"
import {useEffect, useState} from 'react'
export function ListToDo({ value }){
    const [toDos,setToDos] = useState([])

useEffect(()=>{
    async function getToDos(){
        const {data} = await axios.get(`http://127.0.0.1:3333/api/todos/`,{
            params:{
                group:value
            }
        })
        setToDos(data.data)       
    }
    if(value){
        getToDos()
    }
    
    
},[value])

return(
        <Grid width={'full'}>
        <HStack justifyContent={'space-between'} mt={20}>
            <Flex>
                <Button color={'black'} borderRadius={'30%'} mr={2}>{'<'}</Button>
                <Text fontSize={'xl'}>a</Text>
            </Flex>
            
            <Box>
                <Button color={'black'}>...</Button>
            </Box>
        </HStack>

        <HStack mt={10} w='full' >
            <Box w='full' border={'2px solid  #1d1d26'} borderRadius={'15px'} p={2}>
            <Button colorScheme='pink' size={'xs'} color={'black'} mr={2}>+</Button>
            Add Task
            </Box>
        </HStack>

        <HStack  mt={10} w='full'>
            <Stack w='full'  borderRadius={'8px'} backgroundColor={'#21212b'} p={4}>
                <Checkbox  borderRadius={2} defaultChecked={false}>Checkbox</Checkbox>
            </Stack>
        </HStack>
        </Grid>
   
)
}