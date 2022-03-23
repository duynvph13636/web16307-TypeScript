import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
type Props = {}
type FormInput={
    name:string,
    price:number
}
const ProductUpdate = (props: Props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInput>();
    const onsubmit:SubmitHandler<FormInput>=(data)=>{

    }
  return (
    <div>
        <form onSubmit={handleSubmit(onsubmit)}>
            <input type="text" {...register("name")} />
            <input type="number" {...register("price")}/>
        </form>
    </div>
  )
}

export default ProductUpdate