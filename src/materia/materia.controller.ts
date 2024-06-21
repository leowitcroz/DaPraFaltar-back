import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { AuthGuard } from '../guard/auth.Guard';
import { Aluno } from '../decorator/aluno.decorator';

@Controller('materia')
export class MateriaController {

    constructor(private readonly materia: MateriaService) { }

    @UseGuards(AuthGuard)
    @Get() 
    async read(@Aluno() aluno) {
        return this.materia.readAll(aluno.id)
    }

    @Post('/materias')
    async createMateria(@Body() { aluno_id, nome, horas, faltas }) {
        return this.materia.createMateira({ aluno_id, nome, horas, faltas })
    }

    
    @Post('me')
    async me(@Aluno() aluno){
        return {
            aluno: aluno.id
        }
    }

    // @Delete(':id')
    // async delete(@Param('id', ParseIntPipe) id) {
    //     return this.materia.delete(id);
    // }

    // @Patch(':id') 
    // async update(@Param('id', ParseIntPipe) id, @Body() { name, horas, faltas }) {
    //     return this.materia.update(id, { name, horas, faltas })
    // }


} 
