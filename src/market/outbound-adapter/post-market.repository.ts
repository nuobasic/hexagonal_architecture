import { InjectRepository } from '@nestjs/typeorm';
import { Market } from '../../entities/market.entity';
import { Repository } from 'typeorm';
import {
  PostMarketOutboundPortInputDto,
  PostMarketOutboundPortOutputDto,
  PostMartketOutboundPort,
} from '../outbound-port/post-market-outbound.port';

export class PostMarketRepository implements PostMartketOutboundPort {
  constructor(
    @InjectRepository(Market)
    private readonly postMarketRepository: Repository<Market>,
  ) {}
  async excute(
    params: PostMarketOutboundPortInputDto,
  ): Promise<PostMarketOutboundPortOutputDto> {
    const market = new Market();

    market.marketName = params.marketName;
    market.country = params.country;
    market.phone = params.phone;
    market.user = params.user;

    const saveMarket = await this.postMarketRepository.save(market);
    return saveMarket;
  }
}
