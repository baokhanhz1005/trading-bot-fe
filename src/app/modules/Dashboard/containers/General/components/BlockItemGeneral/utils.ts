

export const getBlockColor = (id: string) => {
    switch (id) {
        case 'revenue':
            return 'linear-gradient(45deg, #554dfb, #a11efe)'

        case 'trading_count':
            return 'linear-gradient(45deg, #f88a67, #f868ae)'

        case 'rate':
            return 'linear-gradient(45deg, #33d1ba, #119fcf)'

        case 'status':
            return 'linear-gradient(45deg, #f2bb68, #e86d33)'

        default:
            return ''
    }

}