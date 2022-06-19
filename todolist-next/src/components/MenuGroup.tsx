import { Box, Center, HStack, Stack,  Divider, Text } from "@chakra-ui/react";
import { TodoGroup } from './GroupsTodos'
import { ListToDo } from './ListTodo'

export function MenuGroup({ sizeModal, opacityValue, setValue, value,groups,getGroupsToDo }){
    return (
        <HStack  w="full" h='full' style={{'margin':0}} bg='pnk'>
                <Stack w={sizeModal} h='full' bg='#20212c' style={{'margin':0}} transition={'width 0.2s , opacity 0s'} opacity={opacityValue} >
                        <Box  ml={4} mt={4} mr={4} fontWeight={'500'}>
                            <Text>
                                Grupos de Tarefas 
                                </Text> 
                        </Box>
                        <Divider />
                           
                        <TodoGroup setValue={setValue} groups={groups}/>
                        
                </Stack>
              
                </HStack>
    )
}

