import { Module } from '@nestjs/common';
import { DriverModule } from './Driver/driver.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CalificationModule } from './Calification/calification.module';
import { UserModule } from './User/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DriverModule, CalificationModule, UserModule,  MongooseModule.forRootAsync({
      useFactory : () => ({
        uri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
      }),
  })],
})
export class AppModule {}
