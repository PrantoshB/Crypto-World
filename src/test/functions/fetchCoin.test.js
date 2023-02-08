import fetchCoin from '../../services/fetchCoin';

describe('Fetch Coin', () => {
  test('gets the correct data', async () => {
    const data = await fetchCoin('bitcoin');
    expect(data).toBeInstanceOf(Object);
    expect(data.id).not.toBeNull();
  });
});
