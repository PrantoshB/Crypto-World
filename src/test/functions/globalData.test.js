import globalData from "../../services/globalData";

describe('Global Data', () => {
    test('gets the correct data', async () => {
        const data = await globalData();
        expect(data.active_cryptocurrencies).not.toBeNull();
    });
    });