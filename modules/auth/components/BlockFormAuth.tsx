import { useFormWithSchemaBuilder } from "../../form/hooks/useForm";

import { ButtonForm } from "../../form/components/ButtonForm";
import { InputForm } from "../../form/components/InputForm";

export const BlockFormAuth = () => {
  const form = useFormWithSchemaBuilder((yup) =>
    yup.object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
  );

  return (
    <div className="bg-white p-4 rounded-lg w-11/12 flex flex-col items-center">
      <p className="p-4 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi Lorem
        ipsum dolor sit amet.
      </p>
      <form className="mt-4 flex flex-col w-full space-y-4">
        <InputForm type="email" label="Email" id="email" placeholder="Email" />
        <InputForm
          type="password"
          label="Password"
          id="password"
          placeholder="Password"
        />

        <ButtonForm style="classic" type="button" value="Connexion" />
      </form>
    </div>
  );
};
