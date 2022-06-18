import { Box, Center, Flex, Grid, HStack, Stack, VStack,IconButton, Menu, Button, MenuButton, MenuList, MenuItem, AvatarGroup, Avatar, Divider } from "@chakra-ui/react";
import {useState} from 'react'
import { HiPlus,HiOutlineMenu } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { BsBellFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
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
                <Box w="full" h={14} bg='#20212c' style={{'borderBottom':'2px solid #191921' }} color={'white'}>
                    <HStack w={'full'} justifyContent={'space-between'}>
                        <Flex>
                            <Box p={4} fontSize={'24px'} mr={5}>                            
                                <HiOutlineMenu onClick={toggleMenu} cursor={'pointer'}/>
                            </Box>
                            <HStack>

                            <Menu isLazy>
                            <MenuButton  >
                            <HStack>

                            <SiBookstack/> <Box fontWeight={'500'}>Grupos de Tarefas </Box>
                            </HStack>
                             
                            </MenuButton>
                            <MenuList color={'black'}>
                                <MenuItem> <HiPlus/> <Box ml={2}>Novo Grupo </Box></MenuItem>
                                
                            </MenuList>
                            </Menu>
                            </HStack>
                                
                                
                        </Flex>
                            <HStack>
                                <Box mr={5}>
                                    <HStack>

                                
                                <Box>
                                <BsBellFill />
                                </Box>
                                    
                                    <Menu isLazy>
                                    <MenuButton  >
                                    <HStack>

                                    <Avatar name='User'  size={'sm'}/>
                                    </HStack>
                                    
                                    </MenuButton>
                                    <MenuList color={'black'}>
                                        <MenuItem> <IoIosLogOut/> <Box ml={2}>Sair</Box></MenuItem>
                                        
                                    </MenuList>
                                    </Menu>
                                    </HStack>
                                        
                                </Box>
                            </HStack>
                    </HStack>
                </Box>
                <HStack  w="full" h='full' style={{'margin':0}}>
                <Stack w={sizeModal} h='full' bg='#20212c' style={{'margin':0}} transition={'width 0.2s , opacity 0s'} opacity={opacityValue} >
                        <Box  ml={4} mt={4} mr={4} fontWeight={'500'}>
                            Grupos de Tarefas 
                        </Box>
                        <Divider />
                           
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