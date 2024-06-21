import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class AuthLogInDTO {
    @IsString()
    nome : string
    @IsString()
    password: string;
}