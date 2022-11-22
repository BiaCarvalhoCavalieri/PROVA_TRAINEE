import { useMutation } from '@apollo/client';
import { POST_LOGIN } from "../../graphql/queries/post-login"
import { useState, ChangeEvent } from "react";
import "./style.css";
import { Dashboard } from '../Dashboard';

export const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [signIn, { data, loading, error }] = useMutation(POST_LOGIN, {
    variables: {
      input: {
        email: email,
        password: password
      }
    },

  });

  if (loading) return <p>Caregando... </p>
  if (error) return <p>Email e senha Incorreta</p>
  if(data) return <Dashboard></Dashboard>


  return (
    <div className="card-login">
      <h1 className="card-login__title">Olá, entre com e-mail e senha.</h1>
      <div className="card-login__informations">
        <span className="login-email__title">Seu E-mail</span>
        <input type="email" name="email" value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="login-email__input" placeholder="exemplo@email.com" />
        <span className="login-email__error disabled"> Este e-mail não existe, você tem outro? </span>
        <div className="login-password__texts">
          <span className="login-password__title">Sua Senha</span>
          <a href="#" className="login-forgot__password">Esqueci minha senha</a>
        </div>
        <div className="login-password">
          <input type="password" name="password" value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="login-password__input" placeholder="Digite sua senha" />
        </div>
        <div className="login-connect-forgot">
          <div className="login-keep-connected">
            <input type="checkbox" className="login-keep-connected__checkbox" />
            <span className="login-keep-connected__checkbox--text">
              Manter conectado
            </span>
          </div>

        </div>
        <button className="login-get-in__btn" onClick={signIn}>
          Entrar
        </button>
        <a href="#" className="login-new__account">Não Possui conta? Cadastra-se!</a>
      </div>
    </div>
  );
};