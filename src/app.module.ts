import { Module } from '@nestjs/common';
import { DriverModule } from './Driver/driver.module';
import { MONGO_CONNECTION } from './app.properties';
import { MongooseModule } from '@nestjs/mongoose';
import { CalificationModule } from './Calification/calification.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [DriverModule, MongooseModule.forRoot(MONGO_CONNECTION), CalificationModule, UserModule],
})
export class AppModule {}
