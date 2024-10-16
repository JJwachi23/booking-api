import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateBookingDto {
    @IsNotEmpty()
    @IsString()
    booking_id: string;

    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    room_id: string;

    @IsNotEmpty()
    @IsDateString()
    datetime_start: string;

    @IsNotEmpty()
    @IsDateString()
    datetime_end: string;

    @IsOptional()
    @IsString()
    readonly status?: string;  //  "confirmed", "pending" (สามารถเป็น undefined ได้)
}
