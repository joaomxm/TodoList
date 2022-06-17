import { VStack,Box, IconButton,Text, Heading, Stack, Flex, Button, Spacer, Grid, HStack, Checkbox, Editable, EditablePreview, EditableTextarea, Input, Divider } from "@chakra-ui/react"
import axios from "axios"
import {useEffect, useState} from 'react'

import {HiPlus} from 'react-icons/hi'
import {IoMdArrowBack,IoIosCloseCircle} from 'react-icons/io'
import {RiMoreFill} from 'react-icons/ri'
import {BsCheckCircleFill,BsCalendar, BsCalendarWeekFill} from 'react-icons/bs'
import {MdModeEdit} from 'react-icons/md'


export function ListToDo({ value }){
    const [toDos,setToDos] = useState([])
    const [isEdit,setIsEdit] = useState(false)
    const [isCreate,setIsCreate] = useState(false)

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
                <IconButton aria-label="Voltar" color={'black'} borderRadius={'30%'} mr={2} icon={<IoMdArrowBack/>}/>
                <Text fontSize={'xl'}>a</Text>
            </Flex>
            
            <Box>
            <RiMoreFill fontSize='20px' cursor={'pointer'} />
                
            </Box>
        </HStack>

        <HStack mt={10} w='full' >
            <HStack w='full' border={'2px solid  #1d1d26'} borderRadius={'15px'} p={2}>
            <Box>
                <IconButton aria-label="Adicionar-tarefa" colorScheme='pink' size={'xs'} fontSize='16px' color={'black'} mr={2} icon={<HiPlus/>} onClick={(e)=>setIsCreate(true)}/>
            </Box>
            <Box>
            Adicionar tarefa
            </Box>
            </HStack>
        </HStack>
        {isCreate?
        <HStack  mt={10} w='full'>
            <HStack  w='full' borderRadius={'8px'} backgroundColor={'#21212b'} p={4} >
                
                <HStack w={'full'}>
                    <Input  placeholder={'To do...'}/>
                  <IconButton colorScheme={'red'} aria-label="fechar-tarefa"  fontSize='20px' icon={<IoIosCloseCircle/>} onClick={(e)=>setIsCreate(false)}/>
                  <IconButton colorScheme={'green'} aria-label="editar-tarefa"  fontSize='16px'icon={<BsCheckCircleFill/>} onClick={(e)=>setIsCreate(false)}/>
                  
                </HStack>
               
            </HStack>
            
        </HStack>
            :
            <></>}

        <HStack  mt={10} w='full'>
            <HStack  w='full' borderRadius={'8px'} backgroundColor={'#21212b'} p={4}  _hover={{ bg: "#272732" }}>
                {isEdit?
                <HStack w={'full'}>
                    <Input defaultValue={'aaa'} placeholder={'To do...'}/>
                  <IconButton colorScheme={'red'} aria-label="fechar-tarefa"  fontSize='20px' icon={<IoIosCloseCircle/>} onClick={(e)=>setIsEdit(false)}/>
                  <IconButton colorScheme={'green'} aria-label="editar-tarefa"  fontSize='16px'icon={<BsCheckCircleFill/>} onClick={(e)=>setIsEdit(false)}/>
                  
                </HStack>
                :
                
                <Stack w='full'>
                    <HStack w='full' justifyContent={'space-between'}>
                        <Checkbox  borderRadius={2} defaultChecked={false} >
                            Tarefa 1
                        </Checkbox>
                        <MdModeEdit onClick={(e)=>setIsEdit(true)} fontSize='20px' cursor={'pointer'}/>
                    </HStack>
                    <HStack w='full' pl={2} fontSize={'12px'} color={'#bcbcbf'}>
                            <BsCalendarWeekFill/>
                            <Box>Atualizado em: </Box>
                        <Box fontSize={'xs'}>
                            17/06/2022
                        </Box>
                        </HStack>
                </Stack>
                
                
                }
            </HStack>
        </HStack>
        </Grid>
   
)
}