<template>
  <div class="flex flex-col justify-center items-center">
    <h1>Courses</h1>
    <s-card class="w-1/2">
      <s-card-header>
        <s-card-title>Create course</s-card-title>
      </s-card-header>
      <s-card-content>
        <form @submit="onSubmitCreateCourse">
          <s-form-field v-slot="{ componentField }" name="topic">
            <s-form-item>
              <s-form-label>Title</s-form-label>
              <s-form-control>
                <s-input
                  type="text"
                  placeholder="Beginners"
                  v-bind="componentField"
                />
              </s-form-control>
              <s-form-description>Course title</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="startDate">
            <s-form-item>
              <s-form-label>Start date</s-form-label>
              <s-form-control class="flex flex-col items-center">
                <input type="date" v-bind="componentField" />
              </s-form-control>
              <s-form-description>Course start date</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="endDate">
            <s-form-item>
              <s-form-label>End date</s-form-label>
              <s-form-control class="flex flex-col items-center">
                <input type="date" v-bind="componentField" />
              </s-form-control>
              <s-form-description>Course end date</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="maxStudents">
            <s-form-item>
              <s-form-label>Max students</s-form-label>
              <s-form-control>
                <s-input type="number" v-bind="componentField" />
              </s-form-control>
              <s-form-description>
                Maximum number of students
              </s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="lector">
            <s-form-item>
              <s-form-label>Lector</s-form-label>
              <s-form-control>
                <s-select v-bind="componentField">
                  <s-select-trigger>
                    <s-select-value placeholder="Select a lector" />
                  </s-select-trigger>
                  <s-select-content>
                    <s-select-item
                      v-for="instructor in instructors"
                      :key="instructor.address"
                      :value="instructor.address"
                    >
                      {{ instructor.name }}
                    </s-select-item>
                  </s-select-content>
                </s-select>
              </s-form-control>
              <s-form-description>Course lector</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="fee">
            <s-form-item>
              <s-form-label>Fee</s-form-label>
              <s-form-control>
                <s-input type="number" v-bind="componentField" />
              </s-form-control>
              <s-form-description>Course fee</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-button class="w-full" type="submit">Submit</s-button>
        </form>
      </s-card-content>
    </s-card>
  </div>
</template>

<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import type { Address } from "viem";
import * as z from "zod";
import { config } from "~/plugins/wagmi";
import type { Instructor } from "~/types";
import { useDaoFactory } from "~/utils/factories/dao-factory";

const instructors = ref<Instructor[]>([
  {
    name: "Lucia Mandova",
    address: "0xFB8A366970EB2E97C6666d3A3EcB104872901D77",
  },
]);

const createCourseSchema = toTypedSchema(
  z
    .object({
      topic: z.string().min(2).max(50),
      startDate: z.string().refine(
        (data) => {
          return new Date(data) > new Date();
        },
        {
          message: "Start date must be in the future",
          path: ["startDate"],
        }
      ),
      endDate: z.string(),
      maxStudents: z.number().int().positive(),
      fee: z.number().int().positive(),
      lector: z.string().refine(
        (data) => {
          return instructors.value.some(
            (instructor) => instructor.address === data
          );
        },
        {
          message: "Instructor does not exist",
          path: ["lector"],
        }
      ),
    })
    .refine((data) => new Date(data.startDate) < new Date(data.endDate), {
      message: "Start date must be before end date",
      path: ["startDate", "endDate"],
    })
);

const createCourseForm = useForm({
  validationSchema: createCourseSchema,
});

const onSubmitCreateCourse = createCourseForm.handleSubmit((values) => {
  console.log("Form submitted!", values);

  const _factory = useDaoFactory(
    useWriteContract({ config }) as unknown as ReturnType<
      typeof useWriteContract
    >
  );
  _factory.createLesson(
    values.lector as Address,
    values.topic,
    new Date(values.startDate),
    new Date(values.endDate),
    values.maxStudents,
    values.fee
  );
});
</script>

<style></style>
