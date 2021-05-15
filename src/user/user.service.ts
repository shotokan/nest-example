import { Injectable } from '@nestjs/common';
import { Connection, EntityManager, getManager } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './model/user.model';
import { UserRepository } from './repository/user.repository';

const users: User[] = [];

@Injectable()
export class UserService {
    constructor(private connection: Connection) {
    }
    public async create(userDto: CreateUserDto): Promise<void> {
        const manager: EntityManager = this.connection.manager;
        await manager.save(new User(userDto.name, userDto.username))
        // await this.userRepository.create(new User(userDto.name, userDto.username))
        // await this.userRepository.findAll();
    }

    // public async findAll(): Promise<User[]> {
    //     return await this.userRepository.findAll();
    // }
}
