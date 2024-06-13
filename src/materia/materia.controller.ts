import { Body, Controller, Get, Post } from '@nestjs/common';
import { MateriaService } from './materia.service';

@Controller('materia')
export class MateriaController {
    
    constructor(private readonly materia:MateriaService) { }

    @Get()
    async read(){
        return  this.materia.readAll()
    }

    @Post()
    async create(@Body() {name,horas,faltas}) {
        return this.materia.create({name,horas,faltas})
    }

} 
