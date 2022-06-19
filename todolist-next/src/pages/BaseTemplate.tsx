import { Center, Container, Grid, HStack, Stack, VStack } from "@chakra-ui/react";
import {useEffect, useState} from 'react'
import { NavMenu } from "../components/NavMenu";
import axios from "axios";
import { GroupTodoHome } from "../components/GroupsTodoHome";
import { ListToDo } from "../components/ListTodo";

export default function BaseTemplate(){

    const [value, setValue] = useState(null)

    const [sizeModal, setSizeModal] = useState(60)
    const [opacityValue, setOpacityValue] = useState('100%')
    
    const [groups, setGroupToDos] =useState([])

    function toggleMenu(){
        if(sizeModal===0){
            setSizeModal(60)
            setOpacityValue('100%')
        }else{
            setSizeModal(0)
            setOpacityValue('0%')
        }
    }
    async function getGroupsToDo(){
        const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/`,{
          
        })
        setGroupToDos(data.data)       
    }
    
    useEffect(()=>{
        async function getGroupsToDo(){
            const {data} = await axios.get(`http://127.0.0.1:3333/api/groups/`,{
            
            })
            setGroupToDos(data.data)       
        }
        
        getGroupsToDo()    
        
    },[])



    return(
    <Grid minH="100vh" bg='#20212c' style={{'margin':0 ,color:"white"}} >
        <HStack w="full" mb={5}>
            <VStack w="full" h='full'>
                
                <NavMenu toggleMenu={toggleMenu} getGroupsToDo={getGroupsToDo} />
                {!value?

                <HStack w={'80%'} mt={10} justifyContent={'center'} >
                <GroupTodoHome setValue={setValue} groups={groups}/>
            </HStack>
                :
                <HStack w={'60%'} mt={10} mb={10} justifyContent={'center'} bg='#272732' h={'full'} alignItems={'flex-start'} p={4} borderRadius={'8px'}>

                <ListToDo value={value} setValue={setValue} getGroupsToDo={getGroupsToDo}/>
                </HStack>

            }
                {/* <MenuGroup sizeModal={sizeModal} opacityValue={opacityValue} setValue={setValue} value={value} groups={groups} getGroupsToDo={getGroupsToDo} /> */}
                
            </VStack>
           
        </HStack>
    </Grid>
    )

}