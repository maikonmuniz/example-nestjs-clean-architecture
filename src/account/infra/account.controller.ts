import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateAccount } from '../application/create-account-usecases';


@Controller('account')
export class AccountController {
  @Inject(CreateAccount)
  private createAccount: CreateAccount

  @Post()
  create(@Body() createAccountDto: any) {
    return this.createAccount.execute(createAccountDto);
  }

}
