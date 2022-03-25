import React from 'react'

type Props = {}
type FormInput={
  
}
const Singin = (props: Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
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