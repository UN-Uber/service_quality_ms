import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, PromiseProvider } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop()
    id : string;
    @Prop()
    fk : string;
    @Prop({ default: 0 })
    calification : number;
    @Prop({ default: 0 })
    totalOfComments : number;
}

export const UserSchema = SchemaFactory.createForClass(User);