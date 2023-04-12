import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { forwardRef } from '@nestjs/common/utils';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
const dotenv = require('dotenv');
dotenv.config()
@Module({
  imports: [
            forwardRef(() => UserModule),
            PassportModule, 
            TypeOrmModule.forFeature([User]),
            JwtModule.register({
              secret: process.env.SECRET_KEY,
              signOptions: { expiresIn: process.env.JWT_LIFE_DURATION+'s' },
            })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
