import { gql, useMutation } from '@apollo/client';
import { POST_LOGIN } from "../../graphql/queries/post-login"
import { FormEvent, useEffect, useRef, useState } from "react";
import "./style.css";

export const LoginPage = () => {
  
  const [formState, setFormState] = useState({   
    email: '',
    password: '',
  });
  const [login] = useMutation(POST_LOGIN, {
    variables: {
  
        email: formState.email,
        password: formState.password
    
    },
    onCompleted: ({login}: any) => {
      localStorage.setItem('AUTH_TOKEN', login.token);
    }
  });

  function injetForm(e: FormEvent) {
    let target = e.target  as HTMLInputElement;
    setFormState({
      ...formState,      
      [target.name]: target.value
     
    })  
  }
  useEffect(() => {
    console.log(formState)
  },[formState])
  
  return (
    <div>
      <input type="email" name="email" value={formState.email}
            onChange={(e: FormEvent) => injetForm(e)}/>
      <input type="text"  name="password"   value={formState.password}
            onChange={(e: FormEvent) => injetForm(e)}/>
      <button onClick={() => login}>Entrar</button>
    </div>
    )
};