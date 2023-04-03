import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from '../entities/market.entity';
import { PostMarketController } from './controller/post-market.controller';
import { POST_MARKET_INBOUND_PORT } from './inbound-port/post-market-inbound-port';
import { PostMarketRepository } from './outbound-adapter/post-market.repository';
import { POST_MARKET_OUTBOUND_PORT } from './outbound-port/post-market-outbound.port';
import { PostmarketService } from './service/post-market.srevice';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  controllers: [PostMarketController],
  providers: [
    {
      provide: POST_MARKET_INBOUND_PORT,
      useClass: PostmarketService,
    },
    {
      provide: POST_MARKET_OUTBOUND_PORT,
      useClass: PostMarketRepository,
    },
  ],
})
export class MarketModule {}
