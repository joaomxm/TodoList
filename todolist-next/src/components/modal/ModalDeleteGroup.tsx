import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { BaseModal } from "./BaseModal"


export function ModalDeleteGroup({ modalDeleteOpen,setModalDeleteOpen,id,getToDos,getGroupsToDo, setValue }) {
    const [valueNameGroup, setValueNameGroup] = useState('')

    async function deleteGroupTodo(e){
        e.preventDefault()
        await axios.delete(`http://127.0.0.1:3333/api/groups/${id}`)
        setModalDeleteOpen(false)
        setValue(null)
        await getGroupsToDo()
        await getToDos()
        
    }
    return (
      <>  
         <BaseModal title={'Deletar Grupo de Tarefas'} isOpen={modalDeleteOpen} onClose={(e)=>setModalDeleteOpen(false)}>
            <form action="" method="post" onSubmit={deleteGroupTodo}>
                <FormControl>
                    <FormLabel>Deseja deletar o Grupo de Tarefas?</FormLabel>
                </FormControl>

                <HStack mt={4} justifyContent={'flex-end'}>
                    <Button colorScheme='blue' mr={3} type='submit'>Deletar</Button>
                    <Button onClick={(e)=>setModalDeleteOpen(false)}>Cancelar</Button>
                </HStack>
            </form>
            
            
        </BaseModal>
      </>
    )
  }