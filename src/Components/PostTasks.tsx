import TaskList from "./TaskList";
import '../Styles/PostTasks.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    taskList: Task[]
}

function PostTasks(props: Props){

    return(

        <div className="post-tasks">
            <h1>Tarefas Finalizadas</h1>

            <TaskList taskList={props.taskList}/>
        </div>

    )

}

export default PostTasks;
