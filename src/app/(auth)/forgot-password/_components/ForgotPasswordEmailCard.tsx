"use client";

import { FooterButtons } from "@/components/auth";
import { DynamicCardHeader } from "@/components/card";
import { FormInput } from "@/components/dynamic-inputs";
import { Card, CardContent } from "@/components/ui/card";
import { LoginFooter } from "../../login/_components";

type ForgotPasswordEmailCardProps = {
  values: { email: string };
  errors: { email?: string };
  touched: { email?: boolean };
  handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (_event: React.FocusEvent<HTMLInputElement>) => void;
  handleNext: () => void;
};

export const ForgotPasswordEmailCard = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleNext,
}: ForgotPasswordEmailCardProps) => {
  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Reset your password "
        description="Enter your email to receive a password reset link."
      />
      <CardContent className="p-0">
        <form className="flex flex-col gap-6">
          <div className="grid items-center w-full">
            <FormInput />
          </div>
          <FooterButtons buttonText="Send link" />
        </form>
      </CardContent>
      <LoginFooter />
    </Card>
  );
};
