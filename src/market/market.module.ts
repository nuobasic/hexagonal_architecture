import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from '../entities/market.entity';
import { DeleteMarketController } from './controller/delete-market.controller';
import { PostMarketController } from './controller/post-market.controller';
import { DELETE_MARKET_INBOUND_PORT } from './inbound-port/delete-market-inbound-port';
import { POST_MARKET_INBOUND_PORT } from './inbound-port/post-market-inbound-port';
import { DeleteMarketRepository } from './outbound-adapter/delete-market.repository';
import { PostMarketRepository } from './outbound-adapter/post-market.repository';
import { DELETE_MARKET_OUTBOUND_PORT } from './outbound-port/delete-market-outbound.port';
import { POST_MARKET_OUTBOUND_PORT } from './outbound-port/post-market-outbound.port';
import { DeleteMarketService } from './service/delete-market.service';
import { PostmarketService } from './service/post-market.srevice';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  controllers: [PostMarketController, DeleteMarketController],
  providers: [
    {
      provide: POST_MARKET_INBOUND_PORT,
      useClass: PostmarketService,
    },
    {
      provide: POST_MARKET_OUTBOUND_PORT,
      useClass: PostMarketRepository,
    },
    {
      provide: DELETE_MARKET_INBOUND_PORT,
      useClass: DeleteMarketService,
    },
    {
      provide: DELETE_MARKET_OUTBOUND_PORT,
      useClass: DeleteMarketRepository,
    },
  ],
})
export class MarketModule {}
