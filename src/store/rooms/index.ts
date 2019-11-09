import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RoomsState } from './types';
import { RootState } from '../types';
import IRoom from '../../../interfaces/IRoom';

export const state: RoomsState = {
    rooms: [],
}

const namespaced: boolean = true;

export const rooms: Module<RoomsState, RootState> = {
    namespaced,
    state,
    mutations,
    actions,
    getters,
}