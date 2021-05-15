import { Body, Controller, Get, Post } from '@nestjs/common';
import { UnitOfWork } from '../share/unitofwork/unit-of-work.provider';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService, private uow: UnitOfWork,){}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
        // return this.uow.withTransaction( () => this.userService.create(createUserDto));
        this.userService.create(createUserDto)
    } 
    
    // @Get()
    // async findAllUsers(): Promise<User[]> {
    //     return this.uow.withTransaction(() => this.userService.findAll())
    // }
}
