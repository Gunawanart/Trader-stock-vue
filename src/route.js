import Home from './components/home.vue'
import portofolio from './components/portofolio/portofolio.vue'
import stocks from './components/stocks/stocks.vue'

export const routes = [
    {path : '/', component : Home},
    {path : '/portofolio', component : portofolio},
    {path : '/stocks', component : stocks}
]