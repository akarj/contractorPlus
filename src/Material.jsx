import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const Material = ({ groupIndex, taskIndex, materialIndex, removeMaterial }) => {
   const { register, formState: { errors } } = useFormContext();

   return (
      <div style={{ paddingBottom: "1rem" }}>
         <h4>Material {materialIndex + 1}</h4>
         <label>
            Name:
            <input {...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Name`)} />
            {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Material?.[materialIndex]?.Name && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Material[materialIndex].Name.message}</p>}
         </label>
         <label>
            Rate:
            <input type="number" {...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Rate`, {
               valueAsNumber: true
            })} />
            {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Material?.[materialIndex]?.Rate && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Material[materialIndex].Rate.message}</p>}
         </label>
         <label>
            Quantity:
            <input type="number" {...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Quantity`, {
               valueAsNumber: true
            })} />
            {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Material?.[materialIndex]?.Quantity && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Material[materialIndex].Quantity.message}</p>}
         </label>
         <label>
            Total:
            <input type="number" {...register(`Estimate.Group.${groupIndex}.Task.${taskIndex}.Material.${materialIndex}.Total`, {
               valueAsNumber: true
            })} />
            {errors.Estimate?.Group?.[groupIndex]?.Task?.[taskIndex]?.Material?.[materialIndex]?.Total && <p>{errors.Estimate.Group[groupIndex].Task[taskIndex].Material[materialIndex].Total.message}</p>}
         </label>
         <button type="button" onClick={() => removeMaterial(materialIndex)}>
            Remove Material
         </button>
      </div>
   );
};

Material.propTypes = {
   groupIndex: PropTypes.number.isRequired,
   taskIndex: PropTypes.number.isRequired,
   materialIndex: PropTypes.number.isRequired,
   removeMaterial: PropTypes.func.isRequired,
};

export default Material;
