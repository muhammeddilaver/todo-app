import * as yup from "yup";
import { NextFunction, Request, Response } from "express";
import ToDos from "../../models/todos";
import todoCreateValidationSchema from "./validations";

export const Create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const input = req.body;

    try {
        await todoCreateValidationSchema.validate(input);

        const todos = new ToDos(input);
        const savedData = await todos.save();

        res.json(savedData);
    } catch (e) {
        if (e instanceof yup.ValidationError) {
            res.status(400).json({ error: e.message });
        } else {
            next(e);
        }
    }
};

export const Update = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const input = req.body;
    try {
        const updated = await ToDos.findByIdAndUpdate(id, input, {
            new: true,
        });

        res.json(updated);
    } catch (e) {
        next(e);
    }
};

export const Get = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const todo = await ToDos.findById(id);

        res.json(todo);
    } catch (e) {
        next(e);
    }
};

export const GetList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    /* const limit = 10;

    let { page } = req.query;

    if (page === undefined || isNaN(+page) || +page < 1) {
        page = "1";
    }

    const skip = (Number(page) - 1) * limit; */

    try {
        /*  const totalCount = await ToDos.countDocuments(); */

        const todos = await ToDos.find().sort({ _id: -1 });
        /* .skip(skip)
            .limit(limit);
        const hasNextPage = skip + limit < totalCount; */

        res.json({
            todos,
            /* hasNextPage, */
        });
    } catch (e) {
        next(e);
    }
};

export const Delete = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;

    try {
        const deleted = await ToDos.findByIdAndDelete(id);

        res.json(deleted);
    } catch (e) {
        next(e);
    }
};
