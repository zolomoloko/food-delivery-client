"use client";

import { FooterButtons } from "@/components/auth";
import { DynamicCardHeader } from "@/components/card";
import { FormInput } from "@/components/dynamic-inputs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { LoginFooter } from "./LoginFooter";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";

const emailPasswordSchema = Yup.object({
  email: Yup.string().email().required("Хоосон байна"),
  password: Yup.string().required(),
});

export const Login = () => {
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: emailPasswordSchema,
    onSubmit: async (values) => {
      try {
        // setLoading(true)
        await loginSubmit(values.email, values.password);
      } catch (error) {
        console.log(error)
      }
    //  setLoading(false)
    },
  });
  

  const loginSubmit = async (email: string, password: string) => {
  const response = await axios.post<{
    success: boolean;
    accessToken: string;
  }>("http://localhost:3002/user/login", {
    email,
    password,
  });
  // return response;
  console.log(response.data)
  localStorage.setItem("token", response.data.accessToken)
  push("/")
};
const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    formik;

const emailInputProps = {
    name: "email",
    placeholder: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    inputError: touched.email && errors.email,
    inputErrorMessage: errors.email,
  };

  const passwordInputProps = {
    name: "password",
    placeholder: "password",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    inputError: touched.password && errors.password,
    inputErrorMessage: errors.password,
  };

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Log in"
        description="Log in to enjoy your favorite dishes."
      />

      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid items-start w-full gap-4">
            {/* <Input />
            <Input /> */}
            <FormInput {...emailInputProps} />
            <FormInput {...passwordInputProps}/>
            <Button variant="link" className="p-0 underline w-fit">
              Forgot password ?
            </Button>
          </div>
          <div onClick={loginSubmit}>
            <FooterButtons buttonText="Let`s Go" />
          </div>
        </form>
      </CardContent>
      <LoginFooter />
    </Card>
  );
};
