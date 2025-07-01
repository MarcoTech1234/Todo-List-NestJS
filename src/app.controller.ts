import { Controller, Get, Head, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { FastifyReply } from 'fastify';

@ApiExcludeController()
@Controller()
export class AppController {
  @Head()
  checkHealth() {
    return 'OK';
  }

  @Get()
  helloWorld(@Res() reply: FastifyReply) {
    reply.type('text/html; charset=utf-8').send(/* HTML */ `
      <h2>Hello World!</h2>
      <p>Para acessar a documentação da API</p>
      <a href="/docs">clique aqui!</a>
    `);
  }
}
