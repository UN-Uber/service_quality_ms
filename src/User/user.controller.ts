import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@ApiTags('User Controller')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post()
    createDriver(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Get('/:id')
    getDriverById(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Get()
    getAllDrivers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Delete('/:id')
    deleteDriver(@Param('id') id: string): Promise<Boolean> {
        return this.userService.delete(id);
    }
}
