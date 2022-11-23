/* eslint-disable prettier/prettier */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const user = request.body;
    this.createUserUseCase.execute(user);
    return response.status(201).json(user);
  }
}

export { CreateUserController };
