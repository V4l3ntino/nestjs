import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { FilterProfesorDto } from './dto/filter-profesor.dto';
import { ProfesoresService } from './profesores.service';

@Controller('profesores')
export class ProfesoresController {

    constructor (private readonly profesorService: ProfesoresService){}


    @Get('seed')
    loadData(){
        const data = this.profesorService.loadProfesores()
        return data
    }

    @Get()
    findAll(): any {
        const data = this.profesorService.findAll()
        return data;
    }
    @Get('filter')
    getProfesorQuery(@Query() params: FilterProfesorDto): string{
        return `Devuelve los datos del profesor del area ${params.area} y su ciudad ${params.ciudad} con edad ${params.edad}`
    }

    @Get('filter/body')
    getProfesorBody(@Body() params: FilterProfesorDto): string{
        return `Desde el body devuelve area: ${params.area} ciudad: ${params.ciudad} edad: ${params.edad}`
    }

    @Get(':id')
    findOne(@Param() params: any): any {
        return this.profesorService.findOne(params.id)
    }



    @Post()
    async create(@Body() createProfesorDto: CreateProfesorDto){
        return this.profesorService.createProfesor(createProfesorDto)
    }

    @Put()
    update(@Body() createProfesorDto: CreateProfesorDto){
        return this.profesorService.updateProfesor(createProfesorDto) 
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        
        return this.profesorService.deleteByid(id)
    }
}
