import { IsEmail, IsNotEmpty, Length } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    readonly username: string

    @IsNotEmpty()
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    @Length(8, 16)
    readonly password: string
}