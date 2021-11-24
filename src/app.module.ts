import { Module } from '@nestjs/common';
import { DriverModule } from './driver/driver.module';
import { MONGO_CONNECTION } from './app.properties';
import { MongooseModule } from '@nestjs/mongoose';
import { CalificationModule } from './calification/calification.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [DriverModule, MongooseModule.forRoot(MONGO_CONNECTION), CalificationModule, UserModule],
})
export class AppModule {}
