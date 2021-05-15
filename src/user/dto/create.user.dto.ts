import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    @Length(5, 15)
    username: string;
}
