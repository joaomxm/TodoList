import { Box, IconButton,Text,  Flex,  Grid, HStack, Input, Menu, MenuButton, MenuList, MenuItem, Stack } from "@chakra-ui/react"
import axios from "axios"
import {useEffect, useState} from 'react'

import {HiPlus} from 'react-icons/hi'
import {IoMdArrowBack,IoIosCloseCircle} from 'react-icons/io'
import {RiMoreFill} from 'react-icons/ri'
import {BsCheckCircleFill} from 'react-icons/bs'
import { InputEditTodo } from "./InpuEditTodo"
import { MdDelete, MdModeEdit } from "react-icons/md"
import { ModalUpdateGroup } from "./modal/ModalUpdateGroup"
import { ModalDeleteGroup } from "./modal/ModalDeleteGroup"



export function ListToDo({ value, setValue, getGroupsToDo }){
    const [toDos,setToDos] = useState([])
    const [idGroup,setIdGroup] = useState(null)
    const [groupTodo,setGroupTodo] = useState({})
    const [isCreate,setIsCreate] = useState(false)
    const [valueNewTodo,setValueNewTodo] = useState({name:'', description:''})
    const [modalUpdateOpen, setModalUpdateOpen] = useState(false)
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
    const [isEdit,setIsEdit] = useState(false)

    

useEffect(()=>{
    
    async function getToDos(){
        const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/${value}`)
        setGroupTodo(data.data)
        setToDos(data.data.todos)
        setIdGroup(value)
        
    }
    if(value){
        getToDos()
    }
    setIsEdit(false)
    
    
},[value])


async function getToDos(){
    const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/${idGroup}`)
    setGroupTodo(data.data)
    setToDos(data.data.todos)       
    
}


async function createTodo(e){
    e.preventDefault() 
    
    const {data} = await axios.post(`http://127.0.0.1:3333/api/todos/`,{
        name:valueNewTodo.name,
	    description:valueNewTodo.description,
	    group_id:idGroup
    })
    setIsCreate(false)
    getToDos()
}

async function updateTodo(newData,id){
    const {data} = await axios.put(`http://127.0.0.1:3333/api/todos/${id}`,{
        description:newData.description,
        name:newData.name
    })
    await getToDos()
}
async function updateStateTodo(newData,id){
    console.log(newData);
    
    const {data} = await axios.put(`http://127.0.0.1:3333/api/todos/${id}`,{
        ...newData
    })
    await getToDos()
}

async function deleteTodo(id){
    const {data} = await axios.delete(`http://127.0.0.1:3333/api/todos/${id}`)
    getToDos()
}

function onChangeNewTodo(e){
    const { name, value } = e.target
    setValueNewTodo(values => ({...values, [name]: value }))
 }

if(value){
    return(
        <Grid width={'full'}>
        <HStack justifyContent={'space-between'} mt={0}>
            <Flex>
                <IconButton aria-label="Voltar" color={'black'} borderRadius={'30%'} mr={2} icon={<IoMdArrowBack/>} onClick={(e)=>setValue(null)} />
                <Text fontSize={'xl'}>{groupTodo.name}</Text>
            </Flex>
            
            <Box>
            <Menu isLazy>
                <MenuButton  >
                <HStack>

                <RiMoreFill fontSize='20px' cursor={'pointer'} />
                </HStack>
                    
                </MenuButton>
                <MenuList color={'black'}>
                    <MenuItem onClick={(e)=>setModalUpdateOpen(true)}><MdModeEdit/><Box ml={2}>Editar Grupo</Box></MenuItem>
                    <MenuItem onClick={(e)=>setModalDeleteOpen(true)}><MdDelete /><Box ml={2}>Deletar Grupo</Box></MenuItem>
                </MenuList>
                </Menu>
            </Box>
            <ModalUpdateGroup  modalUpdateOpen={modalUpdateOpen} setModalUpdateOpen={setModalUpdateOpen} id={groupTodo.id} value={groupTodo.name}  getToDos={getToDos} getGroupsToDo={getGroupsToDo} />
            <ModalDeleteGroup  modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} id={groupTodo.id}  getToDos={getToDos} getGroupsToDo={getGroupsToDo} setValue={setValue} />

        </HStack>
    
        <HStack mt={10} w='full' >
            <HStack w='full' border={'2px solid  #1d1d26'} borderRadius={'15px'} p={2}>
            <Box>
                <IconButton aria-label="Adicionar-tarefa" colorScheme='blue' size={'xs'} fontSize='16px' color={'black'} mr={2} icon={<HiPlus/>} onClick={(e)=>setIsCreate(true)}/>
            </Box>
            <Box>
            Adicionar tarefa
            </Box>
            </HStack>
        </HStack>
        {isCreate?
        <HStack  mt={10} w='full'>
            <HStack  w='full' borderRadius={'8px'} backgroundColor={'#21212b'} p={4} >
                
                    <form action="" style={{width:'100%'}} onSubmit={createTodo}>
                <HStack w={'full'}>
                        

                    <Input name='name' placeholder={'Nome da tarefa'} required onChange={onChangeNewTodo} autoFocus/>
                    <Input name='description' placeholder={'Descrição'} required onChange={onChangeNewTodo}/>
                  <IconButton colorScheme={'red'} aria-label="fechar-tarefa"  fontSize='20px' icon={<IoIosCloseCircle/>} onClick={(e)=>setIsCreate(false)}/>
                  <IconButton colorScheme={'green'} aria-label="editar-tarefa"  fontSize='16px'icon={<BsCheckCircleFill/>} type='submit'/>
                  
                </HStack>
                </form>
               
            </HStack>
            
        </HStack>
            :
            <></>}
        {
            toDos.map((data,key)=>(
                <InputEditTodo key={key} data={data} updateTodo={updateTodo} updateStateTodo={updateStateTodo} deleteTodo={deleteTodo} isEdit={isEdit} setIsEdit={setIsEdit}/>
                ))
            }   
        </Grid>
    
    )

}

return(
    <></>

    
)

}