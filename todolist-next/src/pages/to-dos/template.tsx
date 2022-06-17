import axios from 'axios'
import {useState,useEffect} from 'react'
import { ListToDo } from '../../components/ListTodo'

export default function Template(){
    const [value, setValue] =useState<any>(null)
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
    
    <div style={{display:'flex'}}>
        <div>
            {groups?
                groups.map((data,key)=>(
                    <div key={key}>
                        <button onClick={(e)=>setValue(data.id)}>{data.name}</button> 
                    </div>
                ))
            :
            <></>
        }

        </div>
        <ListToDo value={value}></ListToDo>
    </div>
)
}
