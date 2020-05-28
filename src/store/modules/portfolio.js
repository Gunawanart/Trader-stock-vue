const state = {
    funds : 10000,
    stocks : []
}

const mutations = {
    'BUY_STOCK'(state, {stockId, stockQuantity, stockPrice}) {
        const record = state.stocks.find(element => element.id==stockId)
        if (record) {
            record.quantity += parseInt(stockQuantity)
        } else {
            state.stocks.push({
                id : stockId,
                quantity : parseInt(stockQuantity)
            })
        }
        console.log(typeof stockPrice)
        state.funds = state.funds - parseInt(stockPrice)  * parseInt(stockQuantity) 
        console.log(state.funds)
    },
    'SELL_STOCK'(state, {stockId, stockQuantity, stockPrice}) {
        const record = state.stocks.find(element => element.id==stockId)
        if (record.quantity > stockQuantity) {
            record.quantity -= parseInt(stockQuantity)
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += parseInt(stockPrice) * parseInt(stockQuantity)
    },
    'SET_PORTFOLIO'(state, data) {
        state.funds = data.funds
        state.stocks = data.stockPortfolio ? data.stockPortfolio :  []
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