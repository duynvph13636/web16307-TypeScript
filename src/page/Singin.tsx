import React from 'react'
import { UserType } from '../types/user';
import {useForm} from "react-hook-form"

type Props = {}
type FormInput={
  email:String,
  password:String
}
const Singin = (props: Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInput>();
  return (
    <div>
      <form action="">
        <input type="text" placeholder='email' />
        <input type="password" placeholder='password' />
      </form>
    </div>
  )
}

export default Singin