<template>
    <md-list-item>
        <router-link :to="href">
                <div class="md-list-text-container">
                <span>{{ data.title }}</span>
                <span>{{ data.num }}</span>
            </div>
            <md-divider></md-divider>
            <md-icon>more_vert</md-icon>
        </router-link>
    </md-list-item>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ['data'],
        methods: {

        },
        computed: {
            href: function() {
                return "/Comic/" + this.data.href
            }
        }
    }
</script>