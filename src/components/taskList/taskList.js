import { useSelector } from 'react-redux';
import { TaskItem } from '../taskItem/taskItem';
import { TasksList } from './taskListStyled';
import { selectTask } from '../../redux/selectors';
import { getColorForLevel, groupTasksByParentId, rootEl } from 'helper/helper';

// Рекурсивная функция для отображения задач и их подзадач
const renderTasks = (tasks, taskMap, level = 0) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id} style={{ paddingLeft: 20 }}>
          <TaskItem task={task} color={getColorForLevel(level)} />
          {taskMap[task._id] &&
            renderTasks(taskMap[task._id], taskMap, level + 1)}
        </li>
      ))}
    </ul>
  );
};

export const TaskList = () => {
  const tasks = useSelector(selectTask);
  const taskMap = groupTasksByParentId(tasks);

  const topLevelTasks = taskMap[rootEl(tasks)] || [];

  return <TasksList>{renderTasks(topLevelTasks, taskMap)}</TasksList>;
};
