<template>
    <div class="container about-me">
        <div class="title">
            <i class="fas fa-angle-double-left" style="font-size: 20px;"></i>
            &nbsp;关于1788MUSIC&nbsp;
            <i class="fas fa-angle-double-right" style="font-size: 20px;"></i>
        </div>
        <img src="../../images/1788.png" alt="">
        <p>
            1·* 1788MUSIC创站旨在为广大音乐制作人提供更多优质资源。
        </p>
        <p>
            2·* 1788MUSIC网站只由站长一人开发上线管理维护，如有意加入1788MUSIC，请来信到邮箱1788MUSIC@gmail.com
        </p>
        <p>
            3·* 1788MUSIC网站每月需要支付高昂的服务器费用，如果本站能够帮助到你，能为你创造价值，希望能为本站提供
            <router-link to="/sponsor" target="_blank">赞助</router-link>
            。
        </p>
        <!-- <img src="../../images/sponsor.png" alt=""> -->
        <div class="sponsor"></div>

        
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 0;
    padding-bottom: 50px;
    margin-top: 80px;
    text-align: center;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    overflow: hidden;
    border-radius: 8px;
    border-top: 3px solid rgba(143, 89, 89, 0.279);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-width: 1530px;;
    img {
        text-align: center;
    }
}
p {
    margin: 20px 0;
    font-size: 20px;
    background-color: #fff;
    border: 0;
    padding-left: 350px;
    padding-right: 0;
    text-align: left;
    color: #555;
}

.title {
    background-color: #f4f4f4;
    font-size: 18px;
    color: #555;
    padding: 10px 0;
    text-align: center;
}
.sponsor {
    height: 600px;;
    background-image: url(../../images/sponsor.png);
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position: 300px -120px;
}

</style>
