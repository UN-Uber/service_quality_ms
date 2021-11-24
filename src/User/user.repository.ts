import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { User, UserDocument } from "./schema/user.schema";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findOne({fk: id});
    }

    async create(userCreateDto: CreateUserDto): Promise<User> {
        let user = new this.userModel(userCreateDto);
        return await this.userModel.create(user);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string): Promise<Boolean> {
        let ret = await this.userModel.deleteOne({_fk: id})
        return (ret.deletedCount === 1); ;
    }

}