import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/CreateDriver.dto';
import { Driver } from './schema/Driver.schema';

@Controller('driver')
export class DriverController {
    constructor(private driverService: DriverService) {  }

    @Post()
    async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
        return this.driverService.create(createDriverDto);
    }

    @Get('/:id')
    async getDriverById(@Param('id') id: string): Promise<Driver> {
        return this.driverService.getById(id);
    }

    @Get()
    async getAllDrivers(): Promise<Driver[]> {
        return this.driverService.getAll();
    }

    @Delete('/:id')
    async deleteDriver(@Param('id') id: string): Promise<Boolean> {
        return this.driverService.delete(id);
    }

}
