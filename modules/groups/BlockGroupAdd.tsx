import { TitleApp } from "../common/TitleApp";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineAddCircle } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { InputForm } from "../form/components/InputForm";
import { ButtonForm } from "../form/components/ButtonForm";
import { useCreateGroup } from "../../graphql/groups/useCreateGroup";
import { LoadingSpinner } from "../auth/components/LoadingSpinner";
import { Notification } from "../common/Notification";
import { useEffect } from "react";
import Router from "next/router";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "5 caractères minimum")
      .required("Le champ email est obligatoire"),
    password: yup.string().required("Le champ mot de passe est obligatoire"),
    description: yup.string(),
  })
  .required();

export const BlockGroupAdd = () => {
  const [createGroup, { data, loading, error, reset }] = useCreateGroup();
  const { t } = useTranslation("common");
  const router = Router;
  useEffect(() => {
    if (error !== undefined) setTimeout(() => reset(), 2000);
    if (data !== undefined)
      setTimeout(() => {
        reset();
        router.push("/");
      }, 1000);
  }, [error, data]);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      description: "",
      championshipId: "6320970397827146a4e04eb1",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await createGroup({
      variables: {
        name: data.name,
        password: data.password,
        description: data.description,
        championshipId: data.championshipId,
      },
    });
  };
  return (
    <div className="flex flex-col">
      <TitleApp title={t("groups.add.title")} icon={<MdOutlineAddCircle />} />
      <div className="mt-6 flex items-center">
        <div
          className={`transition-all absolute w-9/12 ${
            error?.graphQLErrors || data?.createGroup ? "top-20" : "top-0"
          }`}
        >
          {error?.graphQLErrors.map(({ message }, i) => (
            <Notification key={i} value={message} type="error" />
          ))}
          {data?.createGroup && (
            <Notification
              value={t("notifications.success.createGroup")}
              type="success"
            />
          )}
        </div>
        <form
          className="mt-4 flex flex-col w-full space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <InputForm
                  id="name"
                  type="text"
                  label="Nom du groupe"
                  placeholder="Nom du groupe"
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
                  label="Mot de passe du groupe"
                  placeholder="Mot de passe du groupe"
                  field={field}
                  errors={errors}
                />
              );
            }}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <InputForm
                  id="description"
                  type="text"
                  label="Description"
                  placeholder="Description"
                  field={field}
                  errors={errors}
                />
              );
            }}
          />
          <ButtonForm
            style="submit"
            type="submit"
            value={loading ? <LoadingSpinner /> : t("groups.form.submit")}
          />
        </form>
      </div>
    </div>
  );
};
