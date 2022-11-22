import { gql, useMutation } from '@apollo/client';
import { POST_LOGIN } from "../../graphql/queries/post-login"
import { useRef } from "react";
import "./style.css";

export const LoginPage = () => {
  const emailInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

  const [ signIn, { data, loading, error }] = useMutation(POST_LOGIN);
  if (loading) return <p>Caregando... </p>
  if (error) return <p>Ihhh Ferrou</p>
  
  // const [login] = useMutation(POST_LOGIN, {
  //   variables: {
  //     input
  //   },
  //   // onCompleted: ({ login }) => {
  //   //   console.log("Teste", login.token)
  //   // }
  // });
  
  function signInClick() {   
    const emailValue = emailInput.current?.value
    const passwordValue = passwordInput.current?.value
    const input = { email: emailValue, password: passwordValue }
    console.log(emailValue, passwordValue, input)
  }
  return (
    <div className="card-login">
      <h1 className="card-login__title">Olá, entre com e-mail e senha.</h1>
      <div className="card-login__informations">
        <span className="login-email__title">Seu E-mail</span>
        <input type="email" ref={emailInput} className="login-email__input" placeholder="exemplo@email.com"/>
        <span className="login-email__error disabled"> Este e-mail não existe, você tem outro? </span>
        <div className="login-password__texts">
            <span className="login-password__title">Sua Senha</span>
            <a href="#" className="login-forgot__password">Esqueci minha senha</a>
        </div>
        <div className="login-password">
          <input type="password" ref={passwordInput} className="login-password__input" placeholder="Digite sua senha"/>
        </div>
        <div className="login-connect-forgot">
          <div className="login-keep-connected">
            <input type="checkbox" className="login-keep-connected__checkbox"/>
              <span className="login-keep-connected__checkbox--text">  
                Manter conectado  
              </span>
          </div>
          
        </div>
        <button className="login-get-in__btn" onClick= { signInClick }>
          Entrar
        </button>
        <a href="#" className="login-new__account">Não Possui conta? Cadastra-se!</a>
      </div>
    </div>
  );
};