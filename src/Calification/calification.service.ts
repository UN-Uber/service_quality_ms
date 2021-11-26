import { Injectable, NotFoundException } from '@nestjs/common';
import { DriverService } from 'src/Driver/driver.service';
import { UserService } from 'src/User/user.service';
import { CalificationRepository } from './calification.repository';
import { CreateCalificationDto } from './dto/CreateCalification.dto';
import { UpdateCalificationDto } from './dto/UpdateCalification.dto';
import { CalificationType } from './enum/Calification.enum';
import { Calification } from './schema/Calification.schema';
import * as mongoose from 'mongoose'

@Injectable()
export class CalificationService {
    constructor(private calificationRepository: CalificationRepository, private driverService: DriverService, private userService: UserService) {}

    async create(calificationDto: CreateCalificationDto): Promise<Calification> {
        calificationDto.date = new Date();
        if(calificationDto.type == CalificationType.TODRIVER){
            let driver = new mongoose.Types.ObjectId(calificationDto.driverId);
            //await this.driverService.getById(calificationDto.driverId);
            calificationDto.driverId = driver;
            this.driverService.updateCalificationBeforeAdd(calificationDto.driverId, calificationDto.calification);
        }else if(calificationDto.type == CalificationType.TOUSER){
            this.userService.updateCalificationBeforeAdd(calificationDto.userId, calificationDto.calification);
        }
        return await this.calificationRepository.create(calificationDto);
    }

    async findAll(): Promise<Calification[]> {
        return await this.calificationRepository.findAll();
    }

    async findUserCalifications(id: string): Promise<Calification[]> {
        return await this.calificationRepository.findUserCalifications(id);
    }

    async findDriverCalifications(id: string): Promise<Calification[]> {
        let driver = await this.driverService.getById(id);
        return await this.calificationRepository.findDriverCalifications(driver);
    }

    async findById(id: string): Promise<Calification> {
        let calification = await this.calificationRepository.findOne(id);
        if(!calification){
            throw new NotFoundException(`Calification with id ${id} not found`);
        }
        return calification;
    }

    async update(id: string, calificationDto: UpdateCalificationDto): Promise<Calification> {
        const calification = await this.findById(id);
        if(calification.type == CalificationType.TODRIVER){
            this.driverService.updateCalificationBeforeModification(calification.driverId.toString(), calification.calification, calificationDto.calification);
        }else if(calification.type == CalificationType.TOUSER){
            this.userService.updateCalificationBeforeModification(calification.userId.toString(), calification.calification, calificationDto.calification);
        }
        return await this.calificationRepository.update(id, calificationDto);
    }

    async delete(id: string): Promise<Calification> {
        return await this.calificationRepository.delete(id);
    }
}
