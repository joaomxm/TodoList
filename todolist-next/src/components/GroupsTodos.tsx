import { Button, Stack } from '@chakra-ui/react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { ListToDo } from './ListTodo'

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
        
        <Stack color={'#e4e4e5'} >
             {groups?
                groups.map((data,key)=>(
                    <Button key={key} backgroundColor='#20212c' variant='ghost' justifyContent={'flex-start'} borderRadius={0}  _hover={{ bg: "#272732" }} onClick={(e)=>setValue(data.id)}>
                        {data.name}
                    </Button>
                    
                ))
            :
            <></>
        }
        </Stack>
        </>
)
}
