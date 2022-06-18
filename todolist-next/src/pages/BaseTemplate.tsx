import { Box, Center, Flex, Grid, HStack, Stack, VStack,IconButton } from "@chakra-ui/react";
import {useState} from 'react'
import { HiPlus,HiOutlineMenu } from "react-icons/hi";
import { TodoGroup } from '../components/GroupsTodos'
import { ListToDo } from '../components/ListTodo'

export default function BaseTemplate(){

    const [value, setValue] = useState(null)

    const [sizeModal, setSizeModal] = useState(60)
    const [opacityValue, setOpacityValue] = useState('100%')
    const [displayValue, setDisplayValue] = useState('none')
    function toggleMenu(){
        if(sizeModal===0){
            setSizeModal(60)
            setOpacityValue('100%')
        }else{
            setSizeModal(0)
            setOpacityValue('0%')
        }
    }
    return(
    <Grid minH="100vh" bg='#20212c' style={{'margin':0 ,color:"white"}}>
        <HStack w="full">
            <VStack w="full" h='full'>
                <Box w="full" h={14} bg='#20212c' style={{'borderBottom':'2px solid #191921' }}>
                    <HStack>
                        <Flex>
                            <Box p={4} fontSize={'24px'}>                            
                                <HiOutlineMenu onClick={toggleMenu} cursor={'pointer'}/>
                            </Box>
                            <Box>Grupos</Box>
                        </Flex>
                    </HStack>
                </Box>
                <HStack  w="full" h='full' style={{'margin':0}}>
                <Stack w={sizeModal} h='full' bg='#20212c' style={{'margin':0}} transition={'width 0.2s , opacity 0s'} opacity={opacityValue} >
                        <Box p={5}>
                            Grupos de Tarefas 
                        </Box>
                            <Box>
                                Novo grupo 
                            <IconButton aria-label="Adicionar-Grupo" colorScheme='pink' size={'xs'} fontSize='16px' color={'black'} mr={2} icon={<HiPlus/>}/>
                                </Box>
                        <TodoGroup setValue={setValue} />
                        
                </Stack>
                <Stack w="full" h='full' bg="#17181f" style={{'margin':0}}>
                    <Center>
                        <Box w="60%" >
                            <ListToDo value={value} setValue={setValue} />
                        </Box>
                    </Center>
                </Stack>
                </HStack>
            </VStack>
           
        </HStack>
    </Grid>
    )

}