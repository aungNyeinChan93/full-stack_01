"use client";

import React from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";

export type TestOneType = {
  name: string;
  age: number;
  address: {
    city: string;
    township: string;
  };
  phones: string[];
  skills: { name: string; rate: number }[];
  languages: { name: string; level: number }[];
};

const TestOne = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isLoading },
    watch,
    getValues,
    setError,
    setValue,
    reset,
    trigger,
  } = useForm<TestOneType>({
    defaultValues: {
      name: "",
      address: {
        city: "",
        township: "",
      },
      skills: [{ name: "react", rate: 8 }],
      languages: [
        { name: "eng", level: 6 },
        { name: "jpn", level: 7 },
      ],
    },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  const { fields: languageFileds } = useFieldArray({
    name: "languages",
    control,
  });

  console.log(getValues("address"));

  const watchName = watch("name"); //watch value

  const formSubmit: SubmitHandler<TestOneType> = (data: TestOneType) => {
    alert(JSON.stringify(data, null, 2));
    setError("root", { message: "test error" });
  };

  if (isLoading) return <>Loading ...</>;

  return (
    <React.Fragment>
      <main className="w-[500px] mx-auto border border-red-600 p-4 rounded-2xl">
        <form onSubmit={handleSubmit(formSubmit)}>
          <h3 className="text-2xl text-green-600 p-2 my-4">
            React Hook Form Test
          </h3>
          <h4 className="text-base">{watchName}</h4>
          {errors?.root && (
            <p className="text-green-600">{errors?.root?.message}</p>
          )}
          <div>
            <label htmlFor="name">Name</label>
            <input
              {...register("name", {
                required: { value: true, message: "name field is required!" },
                validate: {
                  nameValidate: async (value) => {
                    const { username } = await fetch(
                      "https://dummyjson.com/users/1"
                    ).then((res) => res.json());
                    setError("name", {
                      message: username !== value ? "only emily!" : undefined,
                    });
                    return username === value || "only emilys"; // use for opt or code
                  },
                },
              })}
              type="text"
              id="name"
            />
            {errors && <p className="text-red-500 ">{errors?.name?.message}</p>}
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              {...register("age", {
                valueAsNumber: true,
                required: { value: true, message: "age field is required!" },
              })}
              type="text"
              id="age"
            />
            {errors && <p className="text-red-500 ">{errors?.age?.message}</p>}
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              {...register("address.city", {
                required: { value: true, message: "city field is required!" },
              })}
              type="text"
              id="city"
            />
            {errors && (
              <p className="text-red-500 ">{errors?.address?.city?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="township">Township</label>
            <input
              {...register("address.township", {
                required: {
                  value: true,
                  message: "township field is required!",
                },
              })}
              type="text"
              id="township"
            />
            {errors && (
              <p className="text-red-500 ">
                {errors?.address?.township?.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="Primary">Primary Phone Number</label>
            <input
              {...register("phones.0", {
                required: {
                  value: true,
                  message: "Primary Phone field is required!",
                },
              })}
              type="text"
              id="Primary"
            />
            {/* {errors?.phones?.length !== 0 && (
              <p className="text-red-500 ">
              </p>
            )} */}
          </div>
          <div>
            <label htmlFor="phones.1">Secondary Phone Number</label>
            <input
              {...register("phones.1", {
                required: {
                  value: true,
                  message: "secondary phone is required",
                },
              })}
              type="text"
              id="phones.1"
            />
            {/* {errors && (
              <p className="text-red-500 ">
                {errors?.phones?.map((p) => p?.message)}
              </p>
            )} */}
          </div>
          <br />
          <hr />
          <div>
            <label htmlFor="skills">Skills</label>
            {fields?.map((field, index) => (
              <div
                className="form-control flex justify-between py-2"
                key={field?.id}
              >
                <input type="text" {...register(`skills.${index}.name`)} />
                <input
                  type="number"
                  {...register(`skills.${index}.rate`, { valueAsNumber: true })}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    remove
                  </button>
                )}
              </div>
            ))}
            {fields.length <= 5 && (
              <>
                <button
                  type="button"
                  onClick={() => append({ name: "", rate: 0 })}
                >
                  Add skill
                </button>
              </>
            )}
          </div>
          <br />
          <hr />
          <div>
            {languageFileds?.map((field, index) => (
              <div
                className="form-control flex  justify-between"
                key={field?.id}
              >
                <input {...register(`languages.${index}.name`)} type="text" />
                <input
                  {...register(`languages.${index}.level`, {
                    disabled: watch(`languages.${index}.name`) ? false : true,
                  })}
                  type="number"
                />
              </div>
            ))}
          </div>
          <div className="mt-3">
            <button type="submit">Submit</button>
            <button
              className="mx-2"
              type="button"
              onClick={() => setValue("name", "change name")}
            >
              SetValue
            </button>
            <button type="button" onClick={() => reset()}>
              Reset
            </button>
            <button onClick={() => trigger("age")}>Check age</button>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default TestOne;
