import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tickets: []
    },
    getters: {
        getTickets(state) {
            return state.tickets;
        }
    },
    actions: {
        solve_ticket (context, id) {
            context.commit('setSolvedTicket', id)
        },
        async add_new_ticket (_, data) {
            await Axios({
                method: "post",
                headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJkaWFuYSIsIm5iZiI6MTYzNDgyMDM0NywiZXhwIjoxNjM0OTA2NzQ3LCJpYXQiOjE2MzQ4MjAzNDd9.8fkybQR04pir5Vq-UkpgI87ZVnFjle9zOERSGyKZKLgyqSa2aEhaamMvfo3lJohFahnVujGKnTu2TuYe63rEJQ"},
                url: "https://localhost:5001/Ticket",
                data: data
            })
        },
        async get_tickets_from_api ({commit}) {
            const response = await Axios({
                method: "get",
                headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJkaWFuYSIsIm5iZiI6MTYzNDgyMDM0NywiZXhwIjoxNjM0OTA2NzQ3LCJpYXQiOjE2MzQ4MjAzNDd9.8fkybQR04pir5Vq-UkpgI87ZVnFjle9zOERSGyKZKLgyqSa2aEhaamMvfo3lJohFahnVujGKnTu2TuYe63rEJQ"},
                url: "https://localhost:5001/Ticket/GetAll"
            })
            if(response.status == 200){
                commit("getTicketsFromApi", response.data.data)
                console.log(response.data.data)
            }
        }
    },
    mutations: {
        setSolvedTicket(state, id) {
            for(let i=0; i<state.tickets.length; i++){
                if(state.tickets[i].id === id) {
                    state.tickets[i].status = "Solved";
                }
            }
        },
        setNewTicket(state, id) {
            state.tickets.push(id)
        },
        getTicketsFromApi(state, payload){
            state.tickets = payload;
        }
    }
})