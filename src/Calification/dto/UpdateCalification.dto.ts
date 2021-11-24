import { ApiProperty } from "@nestjs/swagger";

export class UpdateCalificationDto {
    @ApiProperty()
    calification: number;
    @ApiProperty()
    comment: string;
}