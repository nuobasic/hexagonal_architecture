import { Controller, Post } from '@nestjs/common';

@Controller()
export class PostUsersController {
  @Post('/signUp')
  async handle() {
    return [];
  }
}
