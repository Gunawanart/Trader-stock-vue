const state = {
    funds : 10000,
    stocks : []
}

const mutations = {
    'BUY_STOCK'(state, {stockId, stockQuantity, StockPrice}) {
        const record = state.stocks.find(element => element.id==stockId)
        if (record) {
            record.quantity += stockQuantity
        } else {
            state.stocks.push({
                id : stockId,
                quantity : stockQuantity
            })
        }
        state.funds -= StockPrice * stockQuantity
    },
    'SELL_STOCK'(state, {stockId, StockQuantity, StockPrice}) {
        const record = state.stocks.find(element => element.id==stockId)
        if (record.quantity > StockQuantity) {
            record.quantity -= StockQuantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += StockPrice * StockQuantity
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
                id : stock.id,
                quantity : stock.quantity,
                name : record.name,
                price : record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}