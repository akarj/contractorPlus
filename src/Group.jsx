import { useFormContext, useFieldArray } from 'react-hook-form';
import Task from './Tasks';
import PropTypes from 'prop-types';

const Group = ({ groupIndex, removeGroup }) => {
   const { control, formState: { errors } } = useFormContext();
   const { fields: tasks, append: appendTask, remove: removeTask } = useFieldArray({
      control,
      name: `Estimate.Group.${groupIndex}.Task`
   });

   return (
      <div style={{ paddingBottom: "1rem" }}>
         <h2>Group {groupIndex + 1}</h2>
         {tasks.map((task, taskIndex) => (
            <Task key={task.id} groupIndex={groupIndex} taskIndex={taskIndex} removeTask={removeTask} />
         ))}
         {errors.Estimate?.Group?.[groupIndex]?.Task && <p>{errors.Estimate.Group[groupIndex].Task.message}</p>}
         <button type="button" onClick={() => appendTask({ Material: [] })}>
            Add Task
         </button>
         <button type="button" onClick={() => removeGroup(groupIndex)}>
            Remove Group
         </button>
      </div>
   );
};

Group.propTypes = {
   groupIndex: PropTypes.number.isRequired,
   removeGroup: PropTypes.func.isRequired,
};

export default Group;
