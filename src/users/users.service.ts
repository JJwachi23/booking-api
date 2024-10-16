import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly _usersRepository: Repository<User>
  ) { }

  create(createUserDto: CreateUserDto) {
    const user = this._usersRepository.create(createUserDto);
    return this._usersRepository.save(user);
  }

  findAll() {
    return this._usersRepository.find();
  }

  findOne(id: number) {
    return this._usersRepository.findOne({ where: { user_id: id } });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this._usersRepository.update({ user_id: id }, updateUserDto);
  }

  delete(id: number) {
    return this._usersRepository.delete({ user_id: id });
  }
}
