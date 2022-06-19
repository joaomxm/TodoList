import { Box, Center, HStack, Stack,  Divider } from "@chakra-ui/react";
import { TodoGroup } from './GroupsTodos'
import { ListToDo } from './ListTodo'

export function MenuGroup({ sizeModal, opacityValue, setValue, value,groups,getGroupsToDo }){
    return (
        <HStack  w="full" h='full' style={{'margin':0}}>
                <Stack w={sizeModal} h='full' bg='#20212c' style={{'margin':0}} transition={'width 0.2s , opacity 0s'} opacity={opacityValue} >
                        <Box  ml={4} mt={4} mr={4} fontWeight={'500'}>
                            Grupos de Tarefas 
                        </Box>
                        <Divider />
                           
                        <TodoGroup setValue={setValue} groups={groups}/>
                        
                </Stack>
                <Stack w="full" h='full' bg="#17181f" style={{'margin':0}}>
                    <Center>
                        <Box w="60%" >
                            <ListToDo value={value} setValue={setValue} getGroupsToDo={getGroupsToDo}/>
                        </Box>
                    </Center>
                </Stack>
                </HStack>
    )
}

