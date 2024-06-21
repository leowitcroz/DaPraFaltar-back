import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guard/auth.Guard';
import { Aluno } from '../decorator/aluno.decorator';
import { AuthLogInDTO } from './dto/authlogin.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth: AuthService) { }


    @Post('login')
    async logIn(@Body() { nome, password }:AuthLogInDTO) {
        return this.auth.login(nome, password)
    }

    @UseGuards(AuthGuard)
    @Post('me')
    async me(@Aluno() aluno){
        return {
            aluno: aluno
        }
    }
}