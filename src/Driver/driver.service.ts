import { Injectable, NotFoundException } from '@nestjs/common';
import { DriverRepository } from './driver.repository';
import { CreateDriverDto } from './dto/CreateDriver.dto';
import { Driver } from './schema/Driver.schema';

@Injectable()
export class DriverService {
    constructor(private driverRepository : DriverRepository){}

    async create(driverDto: CreateDriverDto): Promise<Driver> {
        return await this.driverRepository.create(driverDto);
    }

    async getAll(): Promise<Driver[]> {
        return await this.driverRepository.findAll();
    }

    async getById(id: string): Promise<Driver> {
        let driver = await this.driverRepository.findById(id);
        if(!driver){
            throw new NotFoundException(`Driver with id ${id} not found`);
        }
        return driver;
    }

    async delete(id: string): Promise<Boolean> {
        let x = await this.driverRepository.delete(id);
        console.log(x);
        return x;
    }

    async updateCalificationBeforeAdd(id: string, newCalification: number): Promise<Driver> {
        let driver = await this.getById(id);
        driver.totalOfComments += 1;
        driver.calification = ((driver.calification*(driver.totalOfComments-1))+newCalification)/driver.totalOfComments;
        return await this.driverRepository.update(id, driver);
    }

    async updateCalificationBeforeModification(id: string, oldCalification: number, newCalification: number): Promise<Driver> {
        let driver = await this.getById(id);
        driver.calification = ((driver.calification*driver.totalOfComments) - oldCalification + newCalification)/driver.totalOfComments;
        return await this.driverRepository.update(id, driver);
    }

}
