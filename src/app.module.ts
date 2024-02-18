import { Module } from '@nestjs/common';
import { AccountModule } from './account/infra/account.module';

@Module({
  imports: [AccountModule],
})
export class AppModule {}
