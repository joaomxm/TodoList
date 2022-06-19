import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { BaseModal } from "./BaseModal"


export function ModalCreateGroup({ modalOpen,setModalOpen,getGroupsToDo }) {
    const [valueNameGroup, setValueNameGroup] = useState('')

    async function createGroupTodo(e){
        e.preventDefault()
        axios.post('http://127.0.0.1:3333/api/groups/',{
            name:valueNameGroup
        })
        setModalOpen(false)
        getGroupsToDo()
    }
    return (
      <>  
         <BaseModal title={'Novo Grupo de Tarefas'} isOpen={modalOpen} onClose={(e)=>setModalOpen(false)}>
            <form action="" method="post" onSubmit={createGroupTodo}>
                <FormControl>
                    <FormLabel>Nome do Grupo</FormLabel>
                    <Input name='name' placeholder='Nome do grupo' onChange={(e)=>setValueNameGroup(e.target.value)} required/>
                </FormControl>

                <HStack mt={4} justifyContent={'flex-end'}>
                    <Button colorScheme='blue' mr={3} type='submit'>Salvar</Button>
                    <Button onClick={(e)=>setModalOpen(false)}>Fechar</Button>
                </HStack>
            </form>
            
            
        </BaseModal>
      </>
    )
  }