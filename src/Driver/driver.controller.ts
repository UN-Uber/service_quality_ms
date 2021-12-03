import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/CreateDriver.dto';
import { Driver } from './schema/Driver.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Driver Controller')
@Controller('driver')
export class DriverController {
    constructor(private driverService: DriverService) {  }

    @Post()
    async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
        return this.driverService.create(createDriverDto);
    }

    @Get('/Ocuppied')
    async getOneNotOcuppied(): Promise<Driver> {
        return this.driverService.getOneUnoccupied();
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

    @Put('/:id')
    async modifyState(@Param('id')  id: string): Promise<Driver>{
        return this.driverService.modifyOcuppied(id);
    }


}


