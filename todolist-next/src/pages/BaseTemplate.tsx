import { Grid, HStack, VStack } from "@chakra-ui/react";
import {useEffect, useState} from 'react'
import { NavMenu } from "../components/NavMenu";
import { MenuGroup } from "../components/MenuGroup";
import axios from "axios";

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
    <Grid minH="100vh" bg='#20212c' style={{'margin':0 ,color:"white"}}>
        <HStack w="full">
            <VStack w="full" h='full'>
                
                <NavMenu toggleMenu={toggleMenu} getGroupsToDo={getGroupsToDo} />
                <MenuGroup sizeModal={sizeModal} opacityValue={opacityValue} setValue={setValue} value={value} groups={groups} getGroupsToDo={getGroupsToDo} />
                
            </VStack>
           
        </HStack>
        {/* <BaseModal isOpen={modalOpen} onClose={(e)=>setModalOpen(false)}/> */}
    </Grid>
    )

}