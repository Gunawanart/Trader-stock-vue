import Vue from 'vue'
export const getData = ({commit}) => {
    Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
        if(data) {
                const stock = data.stocks
                const funds = data.funds
                const stockPortfolio = data.stockPortfolio

                const portfolio = {
                    stockPortfolio,
                    funds
                }
                commit('SET_STOCK', stock)
                commit('SET_PORTFOLIO', portfolio)
            }
        })
}