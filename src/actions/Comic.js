import { router } from '../index';

const API_URL = "https://www.lightnovel.cn";


export default {
    Comics: {

    },
    getYqlUrl(url) {
        return "http://query.yahooapis.com/v1/public/yql?q=" +
            encodeURIComponent("select * from html where url='" + url + "'") +
            "&format=xml";
    },
    getComicList(context, page = 0) {
        var url = this.getYqlUrl(API_URL + "/forum-141-1.html");
        var comics = [];

        context.$http.get(url).then((res) => {
            console.log(res);

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(res.data, "text/xml");
            var $comicList = xmlDoc.querySelectorAll('[id*="normalthread"] a.xst');

            $comicList.forEach(function(data) {
                var titleArray = data.innerHTML.split("][");

                comics.push({
                    title: titleArray[2],
                    num: titleArray[3],
                    link: data.attributes.href.value,
                })
            })
            console.log(comics);
            return comics;
        }).catch((err) => {
            context.error = err.data;
        });
    }
}