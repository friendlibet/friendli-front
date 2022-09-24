import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "next-i18next";

import { useRegister } from "../../../graphql/users/useRegister";

import { ButtonForm } from "../../form/components/ButtonForm";
import { InputForm } from "../../form/components/InputForm";
import { LoadingSpinner } from "./LoadingSpinner";
import { Notification } from "../../common/Notification";
import { CheckingPassword } from "../../form/components/CheckingPassword";
import { TitleForm } from "../../form/components/TitleForm";
import Router from "next/router";

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
  const { t } = useTranslation("common");
  const router = Router;

  const [registerUser, { data, loading, error, reset }] = useRegister();

  useEffect(() => {
    if (error !== undefined) setTimeout(() => reset(), 2000);
    if (data !== undefined)
      setTimeout(() => {
        reset();
        router.push("/auth/");
      }, 2500);
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
    await registerUser({
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
      <TitleForm text={t("register.title")} />
      <div
        className={`transition-all absolute w-9/12 ${
          error?.graphQLErrors || data?.createUser ? "top-20" : "top-0"
        }`}
      >
        {error?.graphQLErrors.map(({ message }, i) => (
          <Notification key={i} value={message} type="error" />
        ))}
        {data?.createUser && (
          <Notification
            value={t("notifications.success.redirection")}
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
                label={t("register.form.inputs.labelEmail")}
                placeholder={t("register.form.inputs.labelEmail")}
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
                label={t("register.form.inputs.labelLastName")}
                placeholder={t("register.form.inputs.labelLastName")}
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
                label={t("register.form.inputs.labelFirstName")}
                placeholder={t("register.form.inputs.labelFirstName")}
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
                label={t("register.form.inputs.labelBirthDate")}
                placeholder={t("register.form.inputs.labelBirthDate")}
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
                label={t("register.form.inputs.labelPassword")}
                placeholder={t("register.form.inputs.labelPassword")}
                field={field}
                errors={errors}
              />
            );
          }}
        />

        <CheckingPassword
          text={t("register.form.informations.password")}
          errors={errors.password}
          password={watch("password")}
        />

        <ButtonForm
          style="classic"
          type="submit"
          value={
            loading ? <LoadingSpinner /> : t("register.form.buttons.submit")
          }
        />
      </form>
    </div>
  );
};
