import { useReducer } from 'react'; 

const PokemonForm2 = () => {

    const initialState = [
        { id: 0, text: 'Visit Kafka Museum', done: true },
        { id: 1, text: 'Watch a puppet show', done: false },
        { id: 2, text: 'Lennon Wall pic', done: false }
    ];

    const tasksReducer = (currentTasks, action) => {
        switch(action.type) {
            case  "cocher" : {
                return currentTasks.map(
                    task => {
                        if(task.id === +action.payload.id) {
                            return  action.payload;
                        }
                        else {
                            return  task;
                        }
                    }
                )
            }
            case "supprimer" : {
                console.log(action.payload)
                return currentTasks.filter(task => task.id !== action.payload)
            }
            default : {
                throw Error('Unknown action: ' + action.type);
              }
        }

    }


    const handleChecked = (task) => {
        dispatchTasks({
            type : "cocher",
            payload: {
                id: task.id,
                text: task.text,
                done: !task.done
            }
        });
    }


    const handleDelete = (id) => {
        dispatchTasks( {
            type: "supprimer",
            payload : id
        })
    }


    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialState);
    
    return (
        <>
            <div >
                <ul>
                    { 
                        tasks.map(
                            (task) => 
                            <li key={task.id}>
                                <input type="checkbox" checked={task.done}/>
                                {task.text} 
                                <span onClick={() => handleChecked(task)}><strong>[done?]</strong></span> 



                                <span onClick={() => handleDelete(task.id)}><strong>[DELETE]</strong></span> 
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
};
  
export default PokemonForm2;

