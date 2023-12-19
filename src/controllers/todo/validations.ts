import * as yup from "yup";

const todoCreateValidationSchema = yup.object({
    name: yup.string().defined().required(),
    end_date: yup.date().nullable(),
});

interface toDoCreate extends yup.InferType<typeof todoCreateValidationSchema> {
    name: string;
    end_date: Date;
}

export default todoCreateValidationSchema;
