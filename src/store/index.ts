import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { rooms } from './rooms/index';

const store: StoreOptions<RootState> = {
    modules: {
        rooms,
    }
}

export default new Vuex.Store<RootState>(store);