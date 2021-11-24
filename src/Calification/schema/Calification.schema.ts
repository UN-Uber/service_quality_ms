import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document, Mongoose, PromiseProvider } from "mongoose";
import { Driver } from "src/Driver/schema/Driver.schema";
import { CalificationType } from "../enum/Calification.enum";

export type CalificationDocument = Calification & Document;

@Schema()
export class Calification {
    @Prop()
    id : string;
    @Prop()
    calification : number;
    @Prop()
    comment : string;
    @Prop()
    date : Date;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Driver'})
    driverId : Driver;
    @Prop()
    userId : string;
    @Prop()
    type: CalificationType;
}

export const CalificationSchema = SchemaFactory.createForClass(Calification);
