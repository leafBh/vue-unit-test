<template>
  <div class="hello">
    {{ indexNum }}
    <div ref="wrap" id="wrap" class="wrap">
      <div v-for="(item, index) of array" :key="index" class="content">
        <span v-for="(num, index) of item" :key="index" :class="num == 0 ? 'redColor':'greenColor'">{{num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { debuglog } from 'util';
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr: [],
      N: 3,
      M: 10,
      array: [],
      column:2,
      rows:10,
      indexNum: null
    }
  },
  mounted() {
    this.getColumnRows()
  },
  methods: {
    getColumnRows() {
      let vm = this
      axios.post('/news/index')
      .then(res => {
        vm.column = res.data.data.N
        vm.rows = res.data.data.M
        if (vm.column*vm.rows >0) {
          vm.indexNum = vm.getIndex(res.data.data.N, res.data.data.M)
        }
      })
    },
    getArray(column, rows) {
      let _array = []
      for (let index = 0; index < column; index++) {
        let _rArray = []
        for (let rIndex = 0; rIndex < rows; rIndex++) {
          _rArray.push(this.getOneZero())
        }
        _array.push(_rArray)
      }
      return _array
    },
    getIndex(column, rows) {
      let array = this.getArray(column, rows)
      this.array = array
      let indexNum = null
      for (let i = 0; i < column; i++) {
        for (let j = column-1; j > i; j--) {
          let num = 0
          for (let k = 0; k <rows; k++) {
            if (array[i][k]+array[j][k] == 1) {//0.1.2.3
              num ++
            }
          }
          if (num == rows) {
            indexNum = j-i+1
            return indexNum
          }
        }
      }
    },
    getOneZero() {
     return Math.round(Math.random())
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
