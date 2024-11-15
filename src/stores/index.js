import { createPinia } from 'pinia'
import piniaPersistence from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPersistence)
export default pinia