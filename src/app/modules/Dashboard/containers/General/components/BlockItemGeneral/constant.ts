
export const initialState = () => ({
    PROFIT: {
        id: 'revenue',
        header: 'Total revenue',
        body: {
            info: {
                data: 32,
                suffix: null
            },
            moreInfo: {
                data: '+ 3,2%',
                message: 'Increase revenue',
                isShowIcon: true,
            }
        }
    },
    TRADING_COUNT: {
        id: 'trading_count',
        header: 'Trading counts',
        body: {
            info: {
                data: 16,
                suffix: 'transaction'
                
            },
            moreInfo: {
                data: 'Total: 106',
                isShowIcon: false,
            },
        }
    },
    WIN_RATE: {
        id: 'rate',
        header: 'Win rate',
        body: {
            info: {
                data: 54.5,
                suffix: '%'
            },
            moreInfo: null
        }
    },
    STATUS: {
        id: 'status',
        header: 'Status',
        body: {
            info: {
                data: 'On Trading',
                suffix: null

            },
            moreInfo: null
        }
    },
});