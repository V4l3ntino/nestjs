import { IsEmail, IsString, Length, MaxLength, MinLength } from "class-validator";



export class CreateAlumnosDto {
    @IsString()
    @Length(9)
    nif: string;
    @IsString()
    @MinLength(2)
    @MaxLength(3)
    nombre: string;

    @IsEmail()
    ciudad: string;
}