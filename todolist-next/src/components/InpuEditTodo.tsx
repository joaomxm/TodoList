import { Box, IconButton, Stack, HStack, Checkbox,  Input, FormControl } from "@chakra-ui/react"

import {useState} from 'react'

import {IoIosCloseCircle} from 'react-icons/io'

import {BsCheckCircleFill, BsCalendarWeekFill} from 'react-icons/bs'
import {MdModeEdit} from 'react-icons/md'

export function InputEditTodo({ data, updateTodo }){
    const [isEdit,setIsEdit] = useState(false)
    const [valueInput,setValueInput] = useState('')

    function validaSubmit(e){
        e.preventDefault()    
        updateTodo(valueInput,data.id)
        setIsEdit(false)
        
    
    
    }


  return (
<HStack  mt={10} w='full'>
    <HStack  w='full' borderRadius={'8px'} backgroundColor={'#21212b'} p={4}  _hover={{ bg: "#272732" }}>
        {isEdit?
            <form style={{width:'100%'}} action="" method="post" onSubmit={validaSubmit}>
        <HStack w={'full'}>
            <FormControl>
  
  
            <Input defaultValue={data.description} placeholder={'To do...'} required onChange={(e)=>setValueInput(e.target.value)}/>
            
            </FormControl>
                <IconButton colorScheme={'red'} aria-label="fechar-tarefa"  fontSize='20px' icon={<IoIosCloseCircle/>} onClick={(e)=>setIsEdit(false)}/>
                <IconButton  type='submit' colorScheme={'green'} aria-label="editar-tarefa"  fontSize='16px'icon={<BsCheckCircleFill/>}/>
            
        </HStack>
            </form>
        :
        
        <Stack w='full'>
                        <Stack><Box fontSize={'20px'}>{data.name}</Box></Stack>
                    <HStack w='full' justifyContent={'space-between'}>
                        <Checkbox  borderRadius={2} defaultChecked={false} >
                            {data.description}
                        </Checkbox>
                        <MdModeEdit onClick={(e)=>setIsEdit(true)} fontSize='20px' cursor={'pointer'}/>
                    </HStack>
                    <HStack w='full' pl={2} fontSize={'12px'} color={'#bcbcbf'}>
                            <BsCalendarWeekFill/>
                            <Box>Atualizado em: </Box>
                        <Box fontSize={'xs'}>
                            {data.updated_at}
                        </Box>
                        </HStack>
                </Stack>
        
        
        }
    </HStack>
</HStack>
  )  
}
