import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import { useSignIn } from "../../../graphql/users/useSignIn";
import { Notification } from "../../common/Notification";

import { ButtonForm } from "../../form/components/ButtonForm";
import { InputForm } from "../../form/components/InputForm";
import { LoadingSpinner } from "./LoadingSpinner";

export const BlockFormAuth = () => {
  const [signIn, { data, loading, error, reset }] = useSignIn();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    const response = await signIn({
      variables: { email: data.email, password: data.password },
    });
    localStorage.setItem("token", response.data.signInUser);
  };

  useEffect(() => {
    if (error !== undefined) setTimeout(() => reset(), 2000);
    if (data !== undefined) setTimeout(() => reset(), 2000);
  }, [error, data]);

  return (
    <div className="transition-all duration-200 bg-white p-4 rounded-lg w-11/12 flex flex-col items-center hover:shadow-lg">
      <p className="p-4 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi Lorem
        ipsum dolor sit amet.
      </p>

      <div
        className={`transition-all absolute w-9/12 ${
          error?.graphQLErrors || data?.signInUser ? "top-20" : "top-0"
        }`}
      >
        {error?.graphQLErrors.map(({ message }, i) => (
          <Notification key={i} value={message} type="error" />
        ))}
        {data?.signInUser && (
          <Notification
            value="Vous allez être redirigé dans un instant"
            type="success"
          />
        )}
      </div>

      <form
        className="mt-4 flex flex-col w-full space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <InputForm
                id="email"
                type="email"
                label="Email"
                placeholder="Email"
                field={field}
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <InputForm
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                field={field}
              />
            );
          }}
        />

        <ButtonForm
          style="classic"
          type="submit"
          value={loading ? <LoadingSpinner /> : "Connection"}
        />
      </form>
    </div>
  );
};
