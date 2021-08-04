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
            status: "Assigned",
            title: "TestNo2", 
            type: "Support",
            client: "SC VRS SRL",
            support: "Remote Support"
        }
        ]
    }
})