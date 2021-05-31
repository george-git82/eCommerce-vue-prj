import { createApp } from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faShoppingCart,
  faAddressCard,
  faHome
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faShoppingCart, faAddressCard, faHome, faGithub)

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
