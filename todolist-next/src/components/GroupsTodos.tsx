import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {MdOutlineHorizontalRule} from 'react-icons/md'

export function TodoGroup({setValue}){

    const [groups, setToDos] =useState([])


useEffect(()=>{
    async function getGroupsToDo(){
        const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/`,{
          
        })
        setToDos(data.data)       
    }
    
    getGroupsToDo()
    console.log(groups);
    
    
    
},[])

    return (
        <>
        
        <Stack color={'white'} >
             {groups?
                groups.map((data,key)=>(
                    <Button key={key} backgroundColor='#20212c' variant='ghost' justifyContent={'flex-start'} borderRadius={0}  _hover={{ bg: "#272732" }} onClick={(e)=>setValue(data.id)} >
                        <HStack fontWeight={'300'}>
                        <MdOutlineHorizontalRule />
                        <Box>{data.name}</Box>
                        </HStack>
                    </Button>
                    
                ))
            :
            <></>
        }
        </Stack>
        </>
)
}
