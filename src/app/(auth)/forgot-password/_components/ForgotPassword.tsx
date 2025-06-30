"use client";

import { ConfirmEmail } from "./ConfirmEmail";
import { ForgotPasswordEmailCard } from "./ForgotPasswordEmailCard";

export const ForgotPassword = () => {
  const StepComponents = [
    <ForgotPasswordEmailCard key={0} />,
    <ConfirmEmail key={1} />,
  ];

  return StepComponents;
};
