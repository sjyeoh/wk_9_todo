import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import {ToDo} from "../entity/Todo";

export class TodoController {

    private TodoRepository = getRepository(ToDo);

    //add new record
    async new(request: Request, response: Response, next: NextFunction) {
        
        return this.TodoRepository.save({
            description: request.body.description,
            completed: request.body.completed,
            created_at: request.body.created_at,
            //notes: request.body.notes,
            category: request.body.category,
        })
    }

    async list(request: Request, response: Response, next: NextFunction) {
        return this.TodoRepository.find();
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let todo = await this.TodoRepository.findOne(request.params.id);
        todo.completed = true;
        var today = new Date().toISOString().slice(0,10)
        todo.completed_at = today
        return this.TodoRepository.save(todo)
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        let todo = await this.TodoRepository.findOne(request.params.id);
        this.TodoRepository.remove(todo)
        response.send("Deleted successfully")
    }

    async updatedetails(request: Request, response: Response, next: NextFunction) {
        let todo = await this.TodoRepository.findOne(request.params.id);
        todo.description = request.body.description
        todo.notes = request.body.notes
        todo.category = request.body.category
        return this.TodoRepository.save(todo)
    }

    async categorytodo(request: Request, response: Response, next: NextFunction) {
        var category = `${request.params.category}`
        let todo = await this.TodoRepository.find({ category: category })
        return todo
    }

    async completedcategory(request: Request, response: Response, next: NextFunction) {
        var completedstatus = `${request.params.completed}`
        if (completedstatus === 'completed'){
        let todo = await this.TodoRepository.find({ completed: true })
        return todo}
        else if (completedstatus === 'uncomplete'){
            let todo = await this.TodoRepository.find({ completed: false })
            return todo
        }else{
            response.send("Invalid Selection")
        }
        
    }

    async todaytodo(request: Request, response: Response, next: NextFunction) {
        var today = new Date().toISOString().slice(0,10)
        let todo = await this.TodoRepository.find({ created_at: today })
        return todo
        //response.send(today)
    }


}