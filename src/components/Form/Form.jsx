import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";

export const Form = ({ refetch }) => {
  const { handleSubmit, register, formState, reset } = useForm();
  const submit = (data) => {
    request
      .post("/todos", data)
      .then((res) => {
        reset();
        refetch();
      })
      .finally(() => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="task"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Task
              </label>
              <div class="mt-2">
                <input
                  {...register("title")}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div class="mt-2">
                <input
                  {...register("description")}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <input {...register("title")} type="text" />
        </div>
        <div>
          <input {...register("description")} type="text" />
        </div> */}
        <button type="send">send</button>
      </form>
    </div>
  );
};
