'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

function Form() {
  const [inqury, setInqury] = useState('');

  type Inputs = {
    Inqury: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('Inqury'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('Inqury', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.Inqury && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}

export default Form;
