import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const ret = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(ret);
    } catch (e) {
      if (e instanceof Error) {
        return response.status(400).json({ error: e.message });
      }
      return response.status(400);
    }
  }
}

export { CreateUserController };
