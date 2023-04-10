import { Inject } from '@nestjs/common';
import {
  DeleteMarketInboundPort,
  DeletMarketInboundPortInputDto,
  getUser,
} from '../inbound-port/delete-market-inbound-port';
import {
  DeleteMarketOutboundPort,
  DELETE_MARKET_OUTBOUND_PORT,
} from '../outbound-port/delete-market-outbound.port';

export class DeleteMarketService implements DeleteMarketInboundPort {
  constructor(
    @Inject(DELETE_MARKET_OUTBOUND_PORT)
    private readonly deleteMarketOutboundPort: DeleteMarketOutboundPort,
  ) {}

  async excute(
    params: DeletMarketInboundPortInputDto,
    getUser: getUser,
  ): Promise<any> {
    console.log('222222222222222222');
    return await this.deleteMarketOutboundPort.excute(params, getUser);
  }
}
