import { Controller, Delete, Inject, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/user.decorator';
import {
  DeleteMarketInboundPort,
  DELETE_MARKET_INBOUND_PORT,
  getUser,
} from '../inbound-port/delete-market-inbound-port';

@Controller('market')
export class DeleteMarketController {
  constructor(
    @Inject(DELETE_MARKET_INBOUND_PORT)
    private readonly deleteMarketInboundPort: DeleteMarketInboundPort,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Delete(':marketId')
  async deleteMarket(@Param() param, @GetUser() user: getUser) {
    console.log('11111111111111111111111');
    await this.deleteMarketInboundPort.excute(param, user);
  }
}
