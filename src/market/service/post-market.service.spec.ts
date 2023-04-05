import exp from 'constants';
import { Role } from '../../entities/user.role';
import {
  PostMarketOutboundPortInputDto,
  PostMarketOutboundPortOutputDto,
  PostMartketOutboundPort,
} from '../outbound-port/post-market-outbound.port';
import { PostmarketService } from './post-market.srevice';

class MockPostMarketOutboundPort implements PostMartketOutboundPort {
  private readonly result: PostMarketOutboundPortOutputDto;

  constructor(result: PostMarketOutboundPortOutputDto) {
    this.result = result;
  }

  async excute(
    params: PostMarketOutboundPortInputDto,
  ): Promise<PostMarketOutboundPortOutputDto> {
    return this.result;
  }
}

describe('PostMarketService Spec', () => {
  test('마켓 생성', async () => {
    const market = {
      marketName: 'apple Market',
      phone: '010-1111-111',
      country: 'Seoul',
      user: {
        userId: 1,
        email: 'test@abc.com',
        password: '1234',
        name: 'apple',
        role: Role.SELLER,
      },
    };

    const postMarketService = new PostmarketService(
      new MockPostMarketOutboundPort(market),
    );

    const res = await postMarketService.excute(market);

    expect(res).toStrictEqual(market);
  });
});
