import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalificationService } from './calification.service';
import { CreateCalificationDto } from './dto/CreateCalification.dto';
import { UpdateCalificationDto } from './dto/UpdateCalification.dto';
import { Calification } from './schema/Calification.schema';

@ApiTags('Calification Controller')
@Controller('calification')
export class CalificationController {
    constructor(private calificationService: CalificationService){}

    @Get('/:id')
    async getCalification(@Param('id') id: string) : Promise<Calification>{
        return await this.calificationService.findById(id);
    }

    @Get()
    async getAllCalification() : Promise<Calification[]>{
        return await this.calificationService.findAll();
    }

    @Get('/driver/:id')
    async getCalificationByDriver(@Param('id') id: string): Promise<Calification[]>{
        return await this.calificationService.findDriverCalifications(id);
    }

    @Get('/user/:id')
    async getCalificationByUser(@Param('id') id: string): Promise<Calification[]>{
        return await this.calificationService.findUserCalifications(id);
    }

    @Post()
    async createCalification(@Body() createCalificationDto: CreateCalificationDto): Promise<Calification>{
        return await this.calificationService.create(createCalificationDto);
    }

    @Put('/:id')
    async updateCalification(@Body() updateCalificationDto: UpdateCalificationDto , @Param('id') id: string) : Promise<Calification>{
        return await this.calificationService.update(id, updateCalificationDto);
    }

    @Delete('/:id')
    async deleteCalification(@Param('id') id: string): Promise<Calification>{
        return await this.calificationService.delete(id);
    }

}
