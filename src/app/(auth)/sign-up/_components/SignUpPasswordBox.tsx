"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { FormInput } from "../../../../components/dynamic-inputs";
import { SignUpFooter } from "./SignUpFooter";
import { DynamicCardHeader } from "@/components/card";
import { BackButton } from "@/components/button";
import { FooterButtons } from "@/components/auth";

type PasswordBoxProps = {
  values: { password: string; passwordConfirmation: string };
  errors: { password?: string; passwordConfirmation?: string };
  touched: { password?: boolean; passwordConfirmation?: boolean };
  handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (_event: React.FocusEvent<HTMLInputElement>) => void;
  handleCreateAccount: () => void;
  handleBack: () => void;
};

export const SignUpPasswordBox = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleCreateAccount,
  handleBack,
}: PasswordBoxProps) => {
  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <BackButton handleClick={handleBack} />

      <DynamicCardHeader
        title="Create a strong password"
        description="Create a strong password with letters, numbers."
      />

      <CardContent className="p-0">
        <form onSubmit={handleCreateAccount} className="flex flex-col gap-6">
          <div className="grid items-center w-full gap-6">
            <div className="flex flex-col space-y-1.5 gap-4">
              <FormInput />
              <FormInput />

              <div className="flex items-center space-x-2">
                <Checkbox id="showPass" />
                <label
                  htmlFor="showPass"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  Show password
                </label>
              </div>
            </div>
          </div>
          <FooterButtons buttonText="Let`s Go" />
        </form>
      </CardContent>

      <SignUpFooter />
    </Card>
  );
};
