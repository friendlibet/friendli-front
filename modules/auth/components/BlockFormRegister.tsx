import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";

import { ButtonForm } from "../../form/components/ButtonForm";
import { InputForm } from "../../form/components/InputForm";

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
    console.log(data);
  };

  const checkingFormatPassword = () => {
    if (watch("password") !== "") {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
        watch("password")
      );
    }
    return false;
  };

  return (
    <div className="transition-all duration-200 bg-white p-4 rounded-lg w-11/12 flex flex-col items-center hover:shadow-lg">
      <p className="p-4 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi Lorem
        ipsum dolor sit amet.
      </p>

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
        <div
          className={`w-fit flex space-x-2 items-center p-1 pl-4 pr-4 transition-all duration-200 rounded-full bg-gray-50 text-gray-600 ${
            errors.password ? "bg-red-50" : ""
          }`}
        >
          <span>
            {checkingFormatPassword() ? (
              <AiFillCheckCircle className="text-emerald-500" />
            ) : (
              <MdError className="text-red-500" />
            )}
          </span>
          <span className="text-xs">
            8 caractères, 1 majuscule, 1 minuscule, 1 chiffre
          </span>
        </div>

        <ButtonForm style="classic" type="submit" value={"S'enregistrer"} />
      </form>
    </div>
  );
};
