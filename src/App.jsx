import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { estimateSchema } from './validationSchema';
import EstimateForm from './EstimateForm';

function App() {
  const methods = useForm({
    resolver: zodResolver(estimateSchema),
    defaultValues: {
      Estimate: {
        Title: '',
        ExpiryDate: '',
        Group: [],
      },
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <FormProvider {...methods}>
      <EstimateForm onSubmit={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
}

export default App;
