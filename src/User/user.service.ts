import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './schema/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository : UserRepository) {}

    async findAll(): Promise<User[]>{
        return await this.userRepository.findAll();
    }

    async findOne(id: string): Promise<User>{
        let user = await this.userRepository.findOne(id);
        if(!user){
            throw new NotFoundException(`User with fk ${id} not found`);
        }
        
        return await user;
    }

    async create(userCreateDto: CreateUserDto): Promise<User>{
        return await this.userRepository.create(userCreateDto);
    }

    async delete(id: string): Promise<Boolean>{
        return await this.userRepository.delete(id);
    }

    async updateCalificationBeforeAdd(id: string, newCalification: number): Promise<User> {
        let user = await this.findOne(id);
        user.totalOfComments += 1;
        user.calification = ((user.calification*(user.totalOfComments-1))+newCalification)/user.totalOfComments;
        return await this.userRepository.update(user['_id'].toString(), user);
    }

    async updateCalificationBeforeModification(id: string, oldCalification: number, newCalification: number): Promise<User> {
        let user = await this.findOne(id);
        user.calification = ((user.calification*user.totalOfComments) - oldCalification + newCalification)/user.totalOfComments;
        return await this.userRepository.update(user['_id'].toString(), user);
    }
}
