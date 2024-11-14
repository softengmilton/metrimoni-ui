import { createStore } from "vuex"
import auth from "@core/store/modules/auth"

export default createStore({
  modules: {
    auth,
  },
})