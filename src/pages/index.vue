<template>

    <h1>  </h1>

</template>

<script lang="ts">

    import { Component, Prop, Vue } from "nuxt-property-decorator";

    import ChatWrap from '../components/Chat/ChatWrap.vue';
    import StreamWrap from '../components/Stream/StreamWrap.vue';
    import { State, Action, Getter } from 'vuex-class';
    import { RoomsState } from '../store/rooms/types';
    import IRoom from "../../interfaces/IRoom";

    const namespace: string = 'rooms';

    @Component({
        name: "index",
    })
    export default class index extends Vue {
        @Action('test', { namespace }) test;

        mounted() {
            this.test();
            console.log(this.$store);
        }
    }

</script>