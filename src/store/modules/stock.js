import stocks from '../../data/stock'

const state = {
    stocks : []
};

const mutations =  {
    'SET_STOCK' (state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCK'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.5 ))
        })

    }
};

const actions = {
    buyStock : ({ commit }, order) => {
        commit('BUY_STOCK', order)
    },
    initStocks : ({commit}) => {
        commit('SET_STOCK', stocks)
    },
    randomStock : ({commit}) => {
        commit('RND_STOCK')
    }
};

const getters = {
    stocks : state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}