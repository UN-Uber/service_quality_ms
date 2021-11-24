import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverController } from './driver.controller';
import { DriverRepository } from './driver.repository';
import { DriverService } from './driver.service';
import { DriverSchema } from './schema/Driver.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Driver', schema: DriverSchema },
    ])],
    controllers: [DriverController],
    providers: [DriverService, DriverRepository],
    exports: [DriverService]
})
export class DriverModule {}
