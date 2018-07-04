<template>
    <div class="newinfo">
        <h1>{{ allNews.title }}</h1>
        <p>
            <span>发表时间：{{ allNews.date }}</span>
            <span>作者：{{ allNews.author_name }}</span>
        </p>
        <hr>
        <img :src="allNews.thumbnail_pic_s" alt="">
        <img :src="allNews.thumbnail_pic_s02" alt="">
        <img :src="allNews.thumbnail_pic_s03" alt="">

        <comment></comment>
    </div>    
</template>

<script>
import comment from '../subComponents/comment.vue'

export default {
    data(){
        return {
            allNews : {},
            uniquekey : this.$route.params.uniquekey
        }
    },
    created(){
        this.getNewsForInfo()
    },
    methods : {
        getNewsForInfo(){
            this.$http.get('/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=top')
            .then( result => {
                var dataObj = JSON.parse(result.bodyText);
                console.log(dataObj.result.data);
                var allData = dataObj.result.data;
                for(var i = 0 ; i < allData.length ; i++){
                    if(allData[ i ].uniquekey == this.uniquekey){
                        this.allNews = allData[ i ];
                    }
                }
                // this.allNews.push(dataObj.result);
                console.log(this.allNews);
            })
        }
    },
    components : {
        'comment' : comment
    }
}
</script>

<style lang="less" scoped>
.newinfo{
    padding: 0 5px;
    h1{
        color: red;
        font-size: 15px;
        text-align: center;
    }
    p{
        display: flex;
        justify-content: space-between;
        color: #226aff;
        font-size: 12px;
    }
    img{
       display: block;
       margin: 0 auto;
    }
}
</style>
