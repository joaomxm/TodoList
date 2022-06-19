import { Box,  Flex, HStack,  Menu,  MenuButton, MenuList, MenuItem,  Avatar, Input, FormLabel, FormControl, ModalFooter, Button, ModalBody } from "@chakra-ui/react";
import { HiPlus,HiOutlineMenu } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { BsBellFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { BaseModal } from "./modal/BaseModal";
import { useState } from "react";
import axios from "axios";
import { ModalCreateGroup } from "./modal/ModalCreateGroup";


export function NavMenu({ toggleMenu, getGroupsToDo }){
    const [modalOpen, setModalOpen] = useState(false)
    const [valueNameGroup, setValueNameGroup] = useState('')

    return(
            <Box w="full" h={14} bg='#3981ab' style={{'borderBottom':'2px solid #191921' }} color={'white'}>
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
                                <MenuItem onClick={(e)=>setModalOpen(true)}> <HiPlus/> <Box ml={2} >Novo Grupo</Box></MenuItem>
                                
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
                            <ModalCreateGroup  modalOpen={modalOpen} setModalOpen={setModalOpen}  getGroupsToDo={getGroupsToDo} />
                            
                    </HStack>
                </Box>
    )
 }


