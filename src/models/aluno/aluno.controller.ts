import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private readonly aluno: AlunoService) { }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id) {
        return this.aluno.readOne(id)
    }

    @Post()
    async createAluno(@Body() { email, password }) {
        return this.aluno.createAluno({ email, password })
    }


}
