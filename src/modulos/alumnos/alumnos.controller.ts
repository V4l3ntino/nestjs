import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { CreateAlumnosDto } from './dto/create-alumnos.dto';

@Controller('alumnos')
export class AlumnosController {
    @Get()
    findAll(): string {
        return 'Devuelve a todos los alumnos';
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        return `Devuelve los datos del alumno con id ${params.id}`
    }

    @Post()
    async create(@Body() createAlumnosDto: CreateAlumnosDto){
        return 'Nuevo alumno ha sido creado correctamente'
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createAlumnosDto: CreateAlumnosDto){
        return `El alumno con id ${id} ha sido updateado correctamente`   
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `Delete: alumno con id ${id} ha sido borrado correctamente`
    }
}
