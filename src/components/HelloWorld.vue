<template>
  <div class="hello">
    <div ref="wrap" id="wrap" class="wrap">
      <div v-for="(item, index) of arr" :key="index" class="content">
        <span v-for="(num, index) of item" :key="index" :class="num == 0 ? 'redColor':'greenColor'">{{num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr: [],
      N: 3,
      M: 10,
      color:'1111'
    }
  },
  mounted() {
    this.getNM()
  },
  methods: {
    getNM() {
      let vm = this
      axios.post('/news/index')
      .then(res=>{
        vm.N = res.data.data.data.N
        vm.M = res.data.data.data.M
        if (vm.N*vm.M >0) {
          vm.getRenderArray()
        }
      })
      // axios.post('/news/produce')
      // .then(res=>{
      //   console.log(res.data.data.data.N)
      //   console.log("============")
      // })
    },
    getRenderArray() {
      this.arr = []
      let allCharacter = this.getAllCharacter()
      for(let i =0;i < allCharacter.length/this.N;i++ ) {
        this.arr.push(allCharacter.substr(i*this.N, this.N))
      }
    },
    getAllCharacter() {
      let _AllCharacter = []
      for (let index = 0; index < this.N*this.M; index++) {
        _AllCharacter.push(Math.round(Math.random()))
      }
      if (_AllCharacter.join('').match(/[01]/g).length == _AllCharacter.length) {
        return _AllCharacter.join('')
      } else {
        return
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.redColor {
  background: red;
}
.greenColor {
   background:  green;
}
</style>
