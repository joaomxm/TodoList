import { Box, IconButton,Text,  Flex,  Grid, HStack, Input } from "@chakra-ui/react"
import axios from "axios"
import {useEffect, useState, useRef} from 'react'

import {HiPlus} from 'react-icons/hi'
import {IoMdArrowBack,IoIosCloseCircle} from 'react-icons/io'
import {RiMoreFill} from 'react-icons/ri'
import {BsCheckCircleFill} from 'react-icons/bs'
import { InputEditTodo } from "./InpuEditTodo"


export function ListToDo({ value }){
    const [toDos,setToDos] = useState([])
    const [groupTodo,setGroupTodo] = useState({})
    const [isCreate,setIsCreate] = useState(false)
    const refEdit = useRef()
    
    
useEffect(()=>{
    async function getToDos(){
        const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/${value}`,{})
        setGroupTodo(data.data)
        setToDos(data.data.todos)       
    }
    if(value){
        getToDos()
    }
    
    
},[value])


async function getToDos(){
    const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/${value}`,{})
    setGroupTodo(data.data)
    setToDos(data.data.todos)       
}

async function updateTodo(newData,id){
    const {data} = await axios.put(`http://127.0.0.1:3333/api/todos/${id}`,{
        description:newData
    })
    getToDos()
}

return(
        <Grid width={'full'} ref={refEdit}>
        <HStack justifyContent={'space-between'} mt={20}>
            <Flex>
                <IconButton aria-label="Voltar" color={'black'} borderRadius={'30%'} mr={2} icon={<IoMdArrowBack/>}/>
                <Text fontSize={'xl'}>{groupTodo.name}</Text>
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
        {
            toDos.map((data,key)=>(
                <InputEditTodo key={key} data={data} updateTodo={updateTodo}/>
                ))
            }   
        </Grid>
   
)
}