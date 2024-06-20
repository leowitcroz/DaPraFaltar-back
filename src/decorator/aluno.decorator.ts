import { ExecutionContext, NotFoundException, createParamDecorator } from "@nestjs/common";

export const Aluno = createParamDecorator((filter: string, context: ExecutionContext) => {

    const request = context.switchToHttp().getRequest();

    if (request.aluno) {
        
        if(filter){

            return request.aluno[filter]
        }

        return request.aluno;

    } else {
        throw new NotFoundException('usuário não encontrado')
    }

})