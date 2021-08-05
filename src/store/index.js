import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tickets: [{
            id: "1",
            status: "Assigned",
            title: "Test Ticket", 
            type: "User Admin",
            client: "SC MYCOMP SRL",
            support: "Remote Support"
        },
        {
            id: "2",
            status: "Assigned",
            title: "Test", 
            type: "Support",
            client: "SC TNV SRL",
            support: "Remote Support"
        },
        {
            id: "3",
            status: "Pending",
            title: "TestNo2", 
            type: "Support",
            client: "SC VRS SRL",
            support: "Remote Support"
        }
        ]
    },
    getters: {
        getTickets(state) {
            return state.tickets;
        }
    },
    actions: {
        solve_ticket (context, id) {
            context.commit('setSolvedTicket', id);
        },
        add_new_ticket (context, id) {
            context.commit('setNewTicket', id);
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
        }
    }
})