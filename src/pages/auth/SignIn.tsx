import React, { useState, ChangeEvent, FormEvent } from "react";
import { Page } from "./Page";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";

export const SignIn: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email: emailValue,
      passwordValue: passwordValue,
    };
    console.log(data);
  };

  return (
    <>
      <Page>
        <form onSubmit={handleChange}>
          <Input
            type="text"
            value={emailValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmailValue(e.target.value)
            }
            placeholder="Email"
          />
          <Input
            type="password"
            value={passwordValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPasswordValue(e.target.value)
            }
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
        </form>
      </Page>
    </>
  );
};
