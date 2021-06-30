import { createApp } from 'vue';

// importo i componenti globali
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

// creo l'app associata al file App.vue
const app = createApp(App);
// questo componente lo dichiaro globale perchè ho intenzione di usarlo in più parti dell'applicazione
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

// monto l'app
app.mount('#app');
