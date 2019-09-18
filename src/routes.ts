import { UserController } from "./controller/UserController";
import { TodoController } from "./controller/TodoController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
//ToDo route
{
    method: "post",
    route: "/newtodo",
    controller: TodoController,
    action: "new"
},
{
    method: "post",
    route: "/marktodo/:id",
    controller: TodoController,
    action: "update"
},
{
    method: "delete",
    route: "/deletetodo/:id",
    controller: TodoController,
    action: "delete"
},
{
    method: "post",
    route: "/updatetodo/:id",
    controller: TodoController,
    action: "updatedetails"
},
{
    method: "get",
    route: "/listtodo",
    controller: TodoController,
    action: "list"
},
{
    method: "get",
    route: "/categorytodo/:category",
    controller: TodoController,
    action: "categorytodo"
},
{
    method: "get",
    route: "/completiontodo/:completed",
    controller: TodoController,
    action: "completedcategory"
},
{
    method: "get",
    route: "/todaytodo/",
    controller: TodoController,
    action: "todaytodo"
}
];