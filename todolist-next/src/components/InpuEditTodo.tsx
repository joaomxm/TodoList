import { Box, IconButton, Stack, HStack, Checkbox,  Input, FormControl } from "@chakra-ui/react"

import {useEffect, useState} from 'react'

import {IoIosCloseCircle} from 'react-icons/io'
import {MdOutlineRemove} from 'react-icons/md'
import {BsCheckCircleFill, BsCalendarWeekFill} from 'react-icons/bs'
import {MdModeEdit} from 'react-icons/md'

export function InputEditTodo({ data, updateTodo, updateStateTodo, deleteTodo,isEdit,setIsEdit }){
    // const [isEdit,setIsEdit] = useState(false)
    const [valueInput,setValueInput] = useState({name:data.name,description:data.description})
    const [valueChecked,setValueChecked] = useState(data.finished)
    const [finishedTodo,setFinishedTodo] = useState({})

    function validaSubmit(e){
        e.preventDefault()    
        updateTodo(valueInput,data.id)
        setIsEdit(false)
    }

    function onChangeCheckbox(e){
        setValueChecked(e.target.checked)
        const newData = {
            name:data.name,
            description:data.description,
            finished:e.target.checked
        }
        updateStateTodo(newData,data.id)
    }
    function onChangeInput(e){
        const { name, value } = e.target
        setValueInput(values => ({...values, [name]: value }))
    }
    useEffect(()=>{
        
        if (!valueChecked) setFinishedTodo({opacity:'100%',finished:false}) 
        else setFinishedTodo({opacity:'50%',finished:true})
    },[valueChecked])

    useEffect(()=>{
        console.log(isEdit);
        
    },[])


  return (
<HStack  mt={10} w='full'>
    <HStack  w='full' borderRadius={'8px'} backgroundColor={'#21212b'} p={4}  _hover={{ bg: "#272732" }}>
        {isEdit?
            <form style={{width:'100%'}} action="" method="post" onSubmit={validaSubmit}>
        <HStack w={'full'}>
            <FormControl>
            <Input name='name' defaultValue={data.name} placeholder={'Nome da tarefa'} required onChange={onChangeInput} autoFocus/>
            </FormControl>
            <FormControl>
            <Input name='description' defaultValue={data.description} placeholder={'Descrição'} required onChange={onChangeInput} />
            </FormControl>
                <IconButton colorScheme={'red'} aria-label="fechar-tarefa"  fontSize='20px' icon={<IoIosCloseCircle/>} onClick={(e)=>setIsEdit(false)}/>
                <IconButton  type='submit' colorScheme={'green'} aria-label="editar-tarefa"  fontSize='16px'icon={<BsCheckCircleFill/>}/>
            
        </HStack>
            </form>
        :
        
        <Stack w='full' opacity={finishedTodo.opacity}>
                        <HStack w='full' justifyContent={'space-between'}><Box fontSize={'20px'} >{data.name}  </Box><MdOutlineRemove cursor={'pointer'} onClick={(e)=>deleteTodo(data.id)}/></HStack>
                    <HStack w='full' justifyContent={'space-between'}>
                        <Checkbox isChecked={valueChecked}  borderRadius={2} defaultChecked={false} onChange={(e)=>onChangeCheckbox(e)}>
                            {data.description}
                        </Checkbox>
                        <MdModeEdit onClick={(e)=>setIsEdit(true)} fontSize='20px' cursor={'pointer'}/>
                    </HStack>
                    <HStack w='full'  fontSize={'12px'} color={'#bcbcbf'}>
                            <BsCalendarWeekFill/>
                            <Box>Atualizado em: </Box>
                        <Box fontSize={'xs'}>
                            
                            {new Date(data.updated_at).toLocaleDateString()} - {new Date(data.updated_at).toLocaleTimeString()}
                            
                        </Box>
                        </HStack>

                        {finishedTodo.finished?
                    <HStack w={'full'} justifyContent={'flex-end'}>
                        <BsCheckCircleFill color="#38a169"></BsCheckCircleFill>
                    </HStack> 
                    :<></>}
                </Stack>
        
        
        }
    </HStack>
</HStack>
  )  
}
