import { useState } from 'react';
import { loginFields } from "../../constants/formfields";
import Input from "./input";
import FormAction from './formAction';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginState);
    }

    return(
        <form className="mt-8 space-y-6">
        <div >
            {
                fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

       <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}