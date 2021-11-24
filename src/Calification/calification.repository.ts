import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCalificationDto } from "./dto/CreateCalification.dto";
import { UpdateCalificationDto } from "./dto/UpdateCalification.dto";
import { CalificationType } from "./enum/Calification.enum";
import { Calification, CalificationDocument } from "./schema/Calification.schema";
import { Driver } from "src/driver/schema/Driver.schema";

@Injectable()
export class CalificationRepository {
    constructor(@InjectModel(Calification.name) private calificationModel: Model<CalificationDocument> ) {}

    async create(calificationDto: CreateCalificationDto): Promise<Calification> {
        let newCalification = new this.calificationModel(calificationDto);
        return await newCalification.save();
    }

    async findAll(): Promise<Calification[]> {
        return await this.calificationModel.find();
    }

    async findOne(id: string): Promise<Calification> {
        return await this.calificationModel.findById(id);
    }

    async findDriverCalifications(id: Driver): Promise<Calification[]> {
        return await this.calificationModel.find({ driverId: id }).where('type').equals(CalificationType.TODRIVER);
    }

    async findUserCalifications(id: string): Promise<Calification[]> {
        return await this.calificationModel.find({ userId: id }).where('type').equals(CalificationType.TOUSER);
    }

    async update (id: string, calificationDto: UpdateCalificationDto): Promise<Calification> {
        return await this.calificationModel.findByIdAndUpdate(id, calificationDto, { new: true });
    }

    async delete (id: string): Promise<Calification> {
        return await this.calificationModel.findByIdAndRemove(id);
    }

}