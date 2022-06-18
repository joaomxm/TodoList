import { Box,  Flex, HStack,  Menu,  MenuButton, MenuList, MenuItem,  Avatar, Input, FormLabel, FormControl, ModalFooter, Button, ModalBody } from "@chakra-ui/react";
import { HiPlus,HiOutlineMenu } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { BsBellFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { BaseModal } from "./Modal";
import { useState } from "react";
import axios from "axios";


export function NavMenu({ toggleMenu, getGroupsToDo }){
    const [modalOpen, setModalOpen] = useState(false)
    const [valueNameGroup, setValueNameGroup] = useState('')

    async function createGroupTodo(e){
        e.preventDefault()
        axios.post('http://127.0.0.1:3333/api/groups/',{
            name:valueNameGroup
        })
        setModalOpen(false)
        getGroupsToDo()
    }

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
                            <BaseModal title={'Novo Grupo de Tarefas'} isOpen={modalOpen} onClose={(e)=>setModalOpen(false)}>
                                <form action="" method="post" onSubmit={createGroupTodo}>
                                    <FormControl>
                                        <FormLabel>Nome do Grupo</FormLabel>
                                        <Input name='name' placeholder='Nome do grupo' onChange={(e)=>setValueNameGroup(e.target.value)} required/>
                                    </FormControl>

                                    <HStack mt={4} justifyContent={'flex-end'}>
                                        <Button colorScheme='blue' mr={3} type='submit'>Salvar</Button>
                                        <Button onClick={(e)=>setModalOpen(false)}>Fechar</Button>
                                    </HStack>
                                </form>
                               
                                
                            </BaseModal>
                    </HStack>
                </Box>
    )
 }


