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
                headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJkaWFuYSIsIm5iZiI6MTYzNTE1MjQwMCwiZXhwIjoxNjM1MjM4ODAwLCJpYXQiOjE2MzUxNTI0MDB9.2w3WSNezGo7RCbcUDv2sW0Ob4NJ48jgb2_tgEJDg09lnECCc_lR0_SCkqyYCx-QsSXcjSJ3O_2kCZvS28j9IaA"},
                url: "https://localhost:5001/Ticket",
                data: data
            })
        },
        async get_tickets_from_api ({commit}) {
            const response = await Axios({
                method: "get",
                headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJkaWFuYSIsIm5iZiI6MTYzNTE1MjQwMCwiZXhwIjoxNjM1MjM4ODAwLCJpYXQiOjE2MzUxNTI0MDB9.2w3WSNezGo7RCbcUDv2sW0Ob4NJ48jgb2_tgEJDg09lnECCc_lR0_SCkqyYCx-QsSXcjSJ3O_2kCZvS28j9IaA"},
                url: "https://localhost:5001/Ticket/GetAll"
            })
            if(response.status == 200){
                commit("getTicketsFromApi", response.data.data)
                console.log(response.data.data)
            }
        },

        async edit_ticket(_, data) {
            await Axios({
                method: "PUT",
                headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJkaWFuYSIsIm5iZiI6MTYzNTE1MjQwMCwiZXhwIjoxNjM1MjM4ODAwLCJpYXQiOjE2MzUxNTI0MDB9.2w3WSNezGo7RCbcUDv2sW0Ob4NJ48jgb2_tgEJDg09lnECCc_lR0_SCkqyYCx-QsSXcjSJ3O_2kCZvS28j9IaA"},
                url: "https://localhost:5001/Ticket",
                data: data
            })
        }, 
        async delete_ticket({commit},id) {
            const response = await Axios({
                method: "DELETE",
                headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJkaWFuYSIsIm5iZiI6MTYzNTE1MjQwMCwiZXhwIjoxNjM1MjM4ODAwLCJpYXQiOjE2MzUxNTI0MDB9.2w3WSNezGo7RCbcUDv2sW0Ob4NJ48jgb2_tgEJDg09lnECCc_lR0_SCkqyYCx-QsSXcjSJ3O_2kCZvS28j9IaA"},
                url: "https://localhost:5001/Ticket/${id}",
                data: {
                    ticket_id: id
                }
            })
            if(response.status == 200) {
                commit("deleteTicket", response.data)
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
        },
        setEditedTicket(state, id) {
            state.tickets.push(id)
        },
        deleteTicket(state, id) {
            const index = state.tickets.indexOf(id)
            state.tickets.splice(index,id)
        }
    }
})