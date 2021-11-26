import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'User', schema: UserSchema },
    ])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService]
})
export class UserModule {}