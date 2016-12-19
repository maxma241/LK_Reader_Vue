<template>
    <md-layout>
        <md-list class="md-double-line">
            <ComicListItem v-for="(item, index) in comics" :data="item"><ComicListItem />
        </md-list>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" v-bind:distance="0"></infinite-loading>
    </md-layout>
</template>

<script>
    import Comic from '../actions/Comic';
    import ComicListItem from '../components/ComicListItem.vue';
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        components: {
            'ComicListItem': ComicListItem,
            'InfiniteLoading': InfiniteLoading
        },
        data() {
            return {
                Lk_Url: "https://www.lightnovel.cn",
                comics: [],
                page: this.$route.params.page,
            }
        },
        computed: {

        },
        methods: {
            onInfinite: function(page = this.page) {
                var $self = this;

                let url = this.Lk_Url + "/forum-141-" + page + ".html";

                let YqlUrl = "http://query.yahooapis.com/v1/public/yql?q=" +
                    encodeURIComponent("select * from html where url='" + url + "'") +
                    "&format=xml";

                this.$http.get(YqlUrl).then((res) => {

                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(res.data, "text/xml");
                    var $comicList = xmlDoc.querySelectorAll('[id*="normalthread"] a.xst');
                    console.log(YqlUrl);

                    $comicList.forEach(function(data) {
                        var titleArray = data.innerHTML.split("][");

                        $self.comics.push({
                            title: titleArray[2],
                            num: titleArray[3],
                            href: data.attributes.href.value,
                        });
                    })

                    this.page++;
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }).catch((err) => {
                    this.error = err.data;
                });

            }
        },
        created: function() {

        }
    }
</script>

<style>
    .infinite-loading-container {
        width: 100%;
    }
</style>