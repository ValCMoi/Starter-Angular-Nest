import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { from, Observable } from 'rxjs'

const crypt = require('../../utils/crypt/cryptDecrypt.js')

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  create(createUserDto: CreateUserDto): Observable<User> | undefined {
    const dataToInsert:CreateUserDto 
      = 
        {
          email:createUserDto.email, 
          password: crypt.encrypt(createUserDto.password),
          role: createUserDto.role
        }
    return  from(this.userRepository.save(dataToInsert));
  }

  async findAll(): Promise<Observable<User[]>> | undefined {
    return await from(this.userRepository.find())
  }

  async findOne(id: string):Promise<User>{
    return await this.userRepository.findOne({where:{id:id}})
  }

  async findOneByEmail(email: string):Promise<User>{
    return await this.userRepository.findOne({where:{email:email}})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto)
  }

  async remove(idInput: string) {
    const entityToDelete: User = await this.findOne(idInput)
    this.userRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
