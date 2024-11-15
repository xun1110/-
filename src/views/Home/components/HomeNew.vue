<script setup>
// import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue'
// import { getNewAPI } from '@/apis/home'
// const newList = ref([])
// const getNew = async () => {
//   const res = await getNewAPI()
//   newList.value = res.data.result
//   // 这不是你的问题,这个后端接口的问题,跳过这一个，把数据写死哦哦

// }
// onMounted(() => getNew())
const data = {
  "code": "1",
  "msg": "操作成功",
  "result": [
    {
      "id": "4008506",
      "name": "平步青云财神家居摆件",
      "desc": "艺术家瞿广慈作品，手绘上色，礼盒包装",
      "price": "646.00",
      "picture": "https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg",
      "discount": null,
      "orderNum": 60
    },
    {
      "id": "3996270",
      "name": "超能装多功能出行胸包",
      "desc": "小身材，大容量，时尚出行",
      "price": "49.00",
      "picture": "https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png",
      "discount": null,
      "orderNum": 15
    },
    {
      "id": "4000464",
      "name": "趣玩奶酪纯PC拉链拉杆箱（14/20/24/26寸）",
      "desc": "萌趣外形，实用功能，开启愉快旅程",
      "price": "199.00",
      "picture": "https://yanxuan-item.nosdn.127.net/ee5ae3974a18a93f3f4704fe70075e10.png",
      "discount": null,
      "orderNum": 38
    },
    {
      "id": "3997974",
      "name": "入门首选，语音播报电子血压计",
      "desc": "全程语音指导，一键测量，监测心率，贴心守护爸妈健康",
      "price": "109.00",
      "picture": "https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png",
      "discount": null,
      "orderNum": 17
    }
  ]
}
</script>

<template>
  <HomePanel title="新鲜好物" sub-title="新鲜好物  好多商品">
    <ul class="goods-list">
      <li v-for="item in data.result" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
  <!-- 下面是插槽主体内容模版
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  -->
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>