import PropTypes from 'prop-types';
import { useFormContext, useFieldArray } from 'react-hook-form';
import Material from './Material';

const Tasks = ({ groupIndex, taskIndex, removeTask }) => {
   const { register, control, formState: { errors } } = useFormContext();
   const { fields: materials, append: appendMaterial, remove: removeMaterial } = useFieldArray({
      control,
      name: `Estimate.Group.${groupIndex}.Task.${taskIndex}.Material`
   });

   return (
      <div style={{ paddingBottom: "1rem" }}>
         <h3>Task {taskIndex + 1}</h3>
         <label>
            Title:
            <input {...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Title`)} />
            {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Title && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Title.message}</p>}
         </label>
         <label>
            Description:
            <textarea {...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Description`)} />
            {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Description && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Description.message}</p>}
         </label>
         {materials.map((material, materialIndex) => (
            <Material key={material.id} groupIndex={groupIndex} taskIndex={taskIndex} materialIndex={materialIndex} removeMaterial={removeMaterial} />
         ))}
         {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Material && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Material.message}</p>}
         <button type="button" onClick={() => appendMaterial({})}>
            Add Material
         </button>
         <button type="button" onClick={() => removeTask(taskIndex)}>
            Remove Task
         </button>
      </div>
   );
};

Tasks.propTypes = {
   groupIndex: PropTypes.number.isRequired,
   taskIndex: PropTypes.number.isRequired,
   removeTask: PropTypes.func.isRequired,
};

export default Tasks;
