<template>
    <div>
        <div class="card-wrap" id="aniimated-thumbnials" v-for="(item, index) in images">
            <a :href="item.src">
                <md-card>
                    <md-card-media>
                        <img :src="item.src">
                    </md-card-media>
                </md-card>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Lk_Url: "https://www.lightnovel.cn/",
                link: this.$route.params.link,
                images: []
            }
        },
        computed: {
            YqlUrl: function() {
                return "https://query.yahooapis.com/v1/public/yql?q=" +
                    encodeURIComponent("select * from html where url='" + this.Lk_Url + this.link + "'") +
                    "&format=xml";
            }
        },
        methods: {
            GetImages: function() {
                var $self = this;

                this.$http.get(this.YqlUrl).then((res) => {
                    console.log(res);
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(res.data, "text/xml");
                    var $imageList = xmlDoc.querySelectorAll('[id*="postmessage"] img');

                    $imageList.forEach(function(data) {
                        $self.images.push({
                            src: data.attributes.file.value,
                        })
                    })

                }, (res) => {
                    this.error = err.data;
                });
            }
        },
        created: function() {
            this.GetImages();
        }
    }
</script>