"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SignUpEmailBox } from "./SignUpEmailBox";
import { SignUpPasswordBox } from "./SignUpPasswordBox";

export const Signup = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const onChangeEmail = (inputEmail: string) => setEmail(inputEmail);

  console.log("email", email);

  const StepComponents = [
    <SignUpEmailBox
      key={0}
      handleNext={handleNext}
      onChangeEmail={onChangeEmail}
    />,
    <SignUpPasswordBox key={1} email={email} handleBack={handleBack}/>,
  ];

  return StepComponents[step];
};
