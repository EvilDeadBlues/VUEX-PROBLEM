import { ActionTree } from 'vuex';
import { RoomsState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<RoomsState, RootState> = {
    test({ commit }) {
        console.log("vuex action ");
    }
}