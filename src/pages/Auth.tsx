import { Button, TextInputField, toaster } from "evergreen-ui";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../firebase";

interface AuthFormProps {
  email: string;
  password: string;
}
const Auth = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, getValues } = useForm<AuthFormProps>();

  const onSignIn = () => {
    let { email, password } = getValues();
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((e) => {
        toaster.danger(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className=" p-4 w-full h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className=" bg-red-400 h-20 w-20 rounded-full" />
      <p className=" font-semibold mt-4 text-gray-700 text-lg">Admin Portal</p>
      <form
        onSubmit={handleSubmit(onSignIn)}
        className=" w-full mt-8 max-w-sm bg-white shadow-md rounded-lg p-3"
      >
        <p className=" font-semibold text-gray-700 text-lg">Sign In</p>
        <TextInputField ref={register} name="email" label="E-mail" />
        <TextInputField
          ref={register}
          name="password"
          type="password"
          label="Password"
        />
        <div className=" w-full justify-end flex-row flex">
          <div>
            <Button
              isLoading={loading}
              disabled={loading}
              onClick={handleSubmit(onSignIn)}
              appearance="primary"
              intent="success"
            >
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
