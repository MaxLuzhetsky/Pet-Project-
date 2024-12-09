import React, { ChangeEvent, useState } from 'react'
import useSignUp from '../hooks/useSignUp.ts';

const SingUpForm: React.FC = ()  => {
    const [inputValues, setInputValues] = useState<{ login: string; password: string }>({
        login: '',
        password: '',
    })

    const {signUp} = useSignUp();

    const inputProxy = new Proxy(inputValues, {
        set(target, prop: keyof typeof inputValues, value: string) {
            if (prop === 'login' && value.length < 3) {
                return true;
            }
            if (prop === 'password' && value.length < 6) {
                return true;
            }
            target[prop] = value;
            setInputValues({ ...target });
            return true;
        }
    });

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputProxy.login = e.target.value;
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputProxy.password = e.target.value;
    };

    const handleSignUp = () => {
        if (inputValues.login.length >= 3 && inputValues.password.length >= 6) {
            signUp(inputValues.login, inputValues.password);
        }
    };
    return (
        <div>
            <label>
                <span>Login</span>
                <input type="text" onChange={handleLoginChange} />
            </label>
            <label>
                <span>Password</span>
                <input type="password" onChange={handlePasswordChange} />
            </label>
            <button type="button" onClick={handleSignUp}>
                OK
            </button>
        </div>
    )
}

export default SingUpForm
