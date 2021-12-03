import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Mongoose } from "mongoose";
import * as mongoose from 'mongoose'
import { Driver, DriverDocument } from "./schema/Driver.schema";
import { CreateDriverDto } from "./dto/CreateDriver.dto";

@Injectable()
export class DriverRepository {
    constructor(@InjectModel(Driver.name) private driverModel : Model<DriverDocument>){}
    
    async create(driver: CreateDriverDto): Promise<DriverDocument> {
        let driverDocument = new this.driverModel(driver);
        return await driverDocument.save();
    }

    async findAll(): Promise<DriverDocument[]> {
        return await this.driverModel.find();
    }

    async findById(id: string): Promise<DriverDocument> {
        return await this.driverModel.findById(id);
    }


    async delete(id: string): Promise<Boolean> {
        let objId = new mongoose.Types.ObjectId(id);

        let ret = await this.driverModel.deleteOne({_id: objId});

        return (ret.deletedCount === 1);
    }

    async update(id: string, driver: Driver): Promise<DriverDocument> {
        return await this.driverModel.findByIdAndUpdate(id, driver, {new: true});
    }

    async findOneUnoccupied(): Promise<DriverDocument> {
        const result = await this.driverModel.findOne({ occupied: false }).exec();
        return result;

    }

    
}