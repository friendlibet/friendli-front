import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { useSignIn } from "../../../graphql/users/useSignIn";

import { ButtonForm } from "../../form/components/ButtonForm";
import { InputForm } from "../../form/components/InputForm";

export const BlockFormAuth = () => {
  const [signIn, { loading, error }] = useSignIn();
  const { handleSubmit, control, reset } = useForm();
  /**
   *
   * HANDLE ERROR
   */

  const onSubmit = async (data: any) => {
    const response = await signIn({
      variables: { email: data.email, password: data.password },
    });
    if (!response) console.log(error);
    else console.log(response);
  };

  return (
    <div className="transition-all duration-200 bg-white p-4 rounded-lg w-11/12 flex flex-col items-center hover:shadow-lg">
      <p className="p-4 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi Lorem
        ipsum dolor sit amet.
      </p>
      <form
        className="mt-4 flex flex-col w-full space-y-4"
        onSubmit={handleSubmit(onSubmit, console.log)}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputForm
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputForm
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              {...field}
            />
          )}
        />

        <ButtonForm style="classic" type="submit" value="Connexion" />
      </form>
    </div>
  );
};

/**
 * Schema reacthookform + yup
 */
// const form = useFormWithSchemaBuilder((yup) =>
//   yup.object({
//     email: yup.string().required(),
//     password: yup.string().required(),
//   })
// );
