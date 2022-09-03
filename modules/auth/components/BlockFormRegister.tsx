import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRegister } from "../../../graphql/users/useRegister";

import { ButtonForm } from "../../form/components/ButtonForm";
import { InputForm } from "../../form/components/InputForm";
import { LoadingSpinner } from "./LoadingSpinner";
import { Notification } from "../../common/Notification";
import { useEffect } from "react";
import { CheckingPassword } from "../../form/components/CheckingPassword";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Le format de l'email n'est pas bon")
      .required("Le champ email est obligatoire"),
    firstName: yup
      .string()
      .min(2, "Deux caractères minimum")
      .required("Le champ prénom est obligatoire"),
    lastName: yup
      .string()
      .min(2, "Deux caractères minimum")
      .required("Le champ nom de famille est obligatoire"),
    birthDate: yup
      .date()
      .required("La date de naissance est obligatoire")
      .typeError("Le format de la date n'est pas bon"),
    password: yup
      .string()
      .test("isFormatCorrect", "Format du password incorrect", (value) => {
        if (value !== undefined)
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
            value
          );
        return false;
      })
      .required("Le champ password est obligatoire"),
  })
  .required();

export const BlockFormRegister = () => {
  const [registerUser, { data, loading, error, reset }] = useRegister();

  useEffect(() => {
    if (error !== undefined) setTimeout(() => reset(), 2000);
    if (data !== undefined) setTimeout(() => reset(), 2000);
  }, [error, data]);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const response = await registerUser({
      variables: {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
      },
    });
  };

  return (
    <div className="transition-all duration-200 bg-white p-4 rounded-lg w-11/12 flex flex-col items-center hover:shadow-lg">
      {/* Composant à faire  */}
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
                errors={errors}
              />
            );
          }}
        />
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <InputForm
                id="firstName"
                type="text"
                label="Prénom"
                placeholder="Prénom"
                field={field}
                errors={errors}
              />
            );
          }}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <InputForm
                id="lastName"
                type="text"
                label="Nom"
                placeholder="Nom"
                field={field}
                errors={errors}
              />
            );
          }}
        />
        <Controller
          name="birthDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <InputForm
                id="birthDate"
                type="date"
                label="Date de naissance"
                placeholder="Date de naissance"
                field={field}
                errors={errors}
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
                errors={errors}
              />
            );
          }}
        />

        <CheckingPassword
          errors={errors.password}
          password={watch("password")}
        />

        <ButtonForm
          style="classic"
          type="submit"
          value={loading ? <LoadingSpinner /> : "S'enregistrer"}
        />
      </form>
    </div>
  );
};
