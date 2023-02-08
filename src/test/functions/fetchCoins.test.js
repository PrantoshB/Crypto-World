import fetchCoins from "../../services/fetchCoins";

describe('Fetch Coins', () => {
    test('gets the correct data', async () => {
        const data = await fetchCoins();
        expect(data).toBeInstanceOf(Array);
        expect(data[0].id).not.toBeNull();
    });
    });