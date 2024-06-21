import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

import { AlunoService } from '../models/aluno/aluno.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly authService: AuthService, private readonly aluno:AlunoService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request = context.switchToHttp().getRequest()
        
        const {authorization} = request.headers;

        try{ 
            const data = this.authService.checkToken((authorization ?? '').split(' ')[1])

            
            // estou criando meu req.user para usar no decorator @User()
            request.aluno = await this.aluno.readOne(data.id)

            return true 
            
            
        } catch(e){
            return false;
        }
        
    }

}