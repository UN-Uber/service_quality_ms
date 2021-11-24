import {CalificationType} from 'src/Calification/enum/Calification.enum';

export class CreateCalificationDto {
    id : string;
    calification: number;
    comment: string;
    driverId: any;
    userId: string;
    type: CalificationType;
    date: Date;
}