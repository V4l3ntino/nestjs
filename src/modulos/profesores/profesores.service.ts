import { Injectable } from '@nestjs/common';
import  data from './data/profesores.json';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class ProfesoresService {
    parts = __dirname.split("\\")
    newUrl = this.parts.slice(0, this.parts.length - 3).join("\\")
    private ruta: string = join(this.newUrl,  'public', 'data', 'profesores.json');

    loadProfesores() {
        return 'Profesores cargados'
    }

    async writeJson() {
        try{
            const datos = JSON.stringify(data, null, 2)
            await writeFile(this.ruta, datos)
        }catch(error){
            console.log(error)
        }
    }

    findAll(){
        return data
    }

    createProfesor(profesor: CreateProfesorDto){
        data.push(profesor)
        this.writeJson()
        return 'Profesor creado'
    }
    findOne(id: string){
        for(const object of data){
            if(object.nif == id){
                return object;
            }
        }
        return 'No se ha encontrado a nadie'
    }

    deleteByid(id: string){
        for(let i=0; i< data.length; i++){
            if(data[i].nif == id){
                data.splice(i, 1)
                this.writeJson()
                return `Operario borrado exitosamente`
            }
        }
        return `No se encuentra ese profesor`
    }
    updateProfesor(createProfesorDto: CreateProfesorDto){
        const profesor = data.find((item) => {return item.nif === createProfesorDto.nif})
        if(profesor != null){
            // profesor.nombre = createProfesorDto.nombre;
            // profesor.modulo = createProfesorDto.modulo;
            // profesor.email = createProfesorDto.email;
            data.map((item) => {
                if(item.nif == createProfesorDto.nif){
                    item.nombre = createProfesorDto.nombre;
                    item.modulo = createProfesorDto.modulo;
                    item.email = createProfesorDto.email;
                }
            })
            this.writeJson()
            return "Usuario actualizado";
        }
        return "No se ha encontrado a nadie"
    }
}
