import { ApiProperty } from '@nestjs/swagger';
import {CalificationType} from 'src/Calification/enum/Calification.enum';

export class CreateCalificationDto {
    id : string;
    @ApiProperty()
    calification: number;
    @ApiProperty()
    comment: string;
    @ApiProperty()
    driverId: any;
    @ApiProperty()
    userId: string;
    @ApiProperty()
    type: CalificationType;
    date: Date;
}