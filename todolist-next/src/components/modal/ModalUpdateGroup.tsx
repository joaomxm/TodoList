import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { BaseModal } from "./BaseModal"


export function ModalUpdateGroup({ modalUpdateOpen,setModalUpdateOpen,id,value,getToDos,getGroupsToDo }) {
    const [valueNameGroup, setValueNameGroup] = useState('')
    
    async function updateGroupTodo(e){
        e.preventDefault()
        await axios.put(`http://127.0.0.1:3333/api/groups/${id}`,{
            name:valueNameGroup
        })
        setModalUpdateOpen(false)
        await getGroupsToDo()
        await getToDos()
        
    }
    return (
      <>  
         <BaseModal title={'Editar Grupo de Tarefas'} isOpen={modalUpdateOpen} onClose={(e)=>setModalUpdateOpen(false)}>
            <form action="" method="post" onSubmit={updateGroupTodo}>
                <FormControl>
                    <FormLabel>Nome do Grupo</FormLabel>
                    <Input name='name' placeholder='Nome do grupo' onChange={(e)=>setValueNameGroup(e.target.value)} required defaultValue={value}/>
                </FormControl>

                <HStack mt={4} justifyContent={'flex-end'}>
                    <Button colorScheme='blue' mr={3} type='submit'>Salvar</Button>
                    <Button onClick={(e)=>setModalUpdateOpen(false)}>Fechar</Button>
                </HStack>
            </form>
            
            
        </BaseModal>
      </>
    )
  }