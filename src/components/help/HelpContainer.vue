<template>
    <div class="container help">
        <div class="title">
            <i class="fas fa-angle-double-left" style="font-size: 20px;"></i>
            &nbsp;帮助&nbsp;
            <i class="fas fa-angle-double-right" style="font-size: 20px;"></i>
        </div>
        <img src="../../images/help.png" alt="">
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
    margin-top: 80px;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.094);
    border-top: 3px solid rgba(133, 115, 115, 0.279);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
    }
}
.title {
    background-color: #f4f4f4;
    font-size: 18px;
    color: #555;
    padding: 10px 0;
    text-align: center;
}
</style>
