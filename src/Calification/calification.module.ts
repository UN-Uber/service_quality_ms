import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalificationController } from './calification.controller';
import { CalificationSchema } from './schema/Calification.schema';
import { CalificationService} from './calification.service';
import { DriverModule } from 'src/driver/driver.module';
import { CalificationRepository } from './calification.repository';
import { UserModule } from 'src/User/user.module';

@Module({
    imports: [
        MongooseModule.forFeature([ 
            { name: 'Calification', schema: CalificationSchema },
        ]), 
        DriverModule,
        UserModule
    ],
    controllers: [CalificationController],
    providers: [CalificationService, CalificationRepository],
})
export class CalificationModule {}
