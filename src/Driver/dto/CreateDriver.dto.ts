import { ApiProperty } from "@nestjs/swagger";

export class CreateDriverDto {
    id : string;
    @ApiProperty()
    firstName : string;
    @ApiProperty()
    lastName : string;
    @ApiProperty()
    vehicleModel : string;
    @ApiProperty()
    licensePlate : string;  
    calification : number;
    @ApiProperty()
    phoneNumber : string;
    @ApiProperty()
    email : string;
    totalOfComments : number;
}