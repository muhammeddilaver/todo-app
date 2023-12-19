import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface ToDo extends mongoose.Document {
    name: string;
    create_date: Date;
    end_date: Date;
}

const ToDosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        default: Date.now,
    },
    end_date: {
        type: Date,
    },
});

const ToDos = mongoose.model<ToDo>("toDos", ToDosSchema);

export default ToDos;
