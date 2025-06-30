"use client";

import { FooterButtons } from "@/components/auth";
import { DynamicCardHeader } from "@/components/card";
import { useRouter } from "next/navigation";
import { FormInput } from "../../../../components/dynamic-inputs";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";

export const PasswordResetBox = () => {
  const { push } = useRouter();

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Create new password"
        description="Set a new password with a combination of letters and numbers for better security."
      />

      <CardContent className="p-0">
        <form className="flex flex-col gap-6">
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
    </Card>
  );
};
