import HeaderNav from './components/Header-nav.vue'; 
import SelectScreen from './components/selection.vue'; 
import Launchbtn from './components/launch-button.vue';
import GigList from './components/show-gigs.vue';

export default [
    {path: '/', component: Launchbtn },
    {path: '/selection', component: SelectScreen }, 
    {path: '/show-gigs', component: GigList }, 
]