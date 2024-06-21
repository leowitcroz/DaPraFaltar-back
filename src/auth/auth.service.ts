import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { alunos } from '@prisma/client';
import { MateriaService } from '../materia/materia.service';


@Injectable()
export class AuthService {
  private issuer = 'login';
  private audience = 'alunos';

  constructor(
    private readonly materia: MateriaService,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) { }

  createToken(aluno: alunos) {
    return {
      accessToken: this.jwt.sign(
        {
          id: aluno.id,
          name: aluno.nome,
        },
        {
          expiresIn: '7 days',
          subject: String(aluno.id),
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwt.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
      });
      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  isValidToken(token: string) {
    try {
      this.checkToken(token)
      return true
    } catch (e) {
      return false
    }
  }

  async login(nome: string, password: string) {

    const aluno = await this.prisma.alunos.findFirst({
      where: {
        nome,
        password
      }
    })

    if (!aluno) {
      throw new UnauthorizedException('Email e/ou senha incorretos.')
    }

    const token = this.createToken(aluno);

    const data = this.checkToken(token.accessToken)


    return {
      data,
      token
    }

  }
}