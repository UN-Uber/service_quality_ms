import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, PromiseProvider } from "mongoose";

export type DriverDocument = Driver & Document;

@Schema()
export class Driver{
    @Prop()
    id : string;
    @Prop()
    firstName : string;
    @Prop()
    lastName : string;
    @Prop()
    vehicleModel : string;
    @Prop()
    licensePlate : string;
    @Prop({ default: 0 })
    calification : number;
    @Prop()
    phoneNumber : string;
    @Prop()
    email : string;
    @Prop({ default: 0 })
    totalOfComments : number;

}

export const DriverSchema = SchemaFactory.createForClass(Driver);