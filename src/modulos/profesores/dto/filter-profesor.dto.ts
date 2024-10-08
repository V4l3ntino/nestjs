import { IsEmail, IsNumber, IsString, Length, MaxLength, MinLength } from "class-validator";



export class FilterProfesorDto {
    
    
    @IsString()
    @MinLength(5)
    ciudad: string;

    @IsString()
    edad: string;

    @IsString()
    @MinLength(5)
     
    area: string;
}