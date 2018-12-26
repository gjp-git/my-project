<template>
  <div class="search-panel">
    <el-row>
      <span class="label">城市</span>
      <el-select v-model="city" placeholder="请选择城市" @change="hasCity = true">
        <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        >
        </el-option>
      </el-select>

      <span class="label">时间</span>
      <el-date-picker
        v-model="datetime"
        type="datetime"
        value-format="timestamp"
        placeholder="请选择时间"
        @change="hasTime = true"
      >
      </el-date-picker>

      <el-button type="primary" class="search-button" @click="search" :disabled="checked"><slot></slot></el-button>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
  import {Select, Option, DatePicker, Button, Row} from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'

  export default {
    name: 'SearchPanel',
    data () {
      return {
        //TODO: 改为接口获取
        options: [{
          value: '6huan',
          label: '六环'
        }, {
          value: 'haidian',
          label: '海淀'
        }],
        city: null,
        datetime: null,
        hasCity: false,
        hasTime: false,
      }
    },
    computed:{
      checked(){
        //console.log(!(this.hasCity&&this.hasTime))
        return !(this.hasCity&&this.hasTime)
      },
      timestamp(){
        let s = String(this.datetime)
        return s.substring(0,10)
      }
    },
    components: {
      'el-select': Select,
      'el-option': Option,
      'el-date-picker': DatePicker,
      'el-button': Button,
      'el-row': Row
    },
    mounted () {
      //console.log(this.city)
      //console.log(this.options)
    },
    methods:{
      search(){
        this.$emit('search',{'city':this.city,'timestamp':this.timestamp})
      }
    },
    watch: {
      datetime(cur, old) {
        //console.log(cur)
      },

    }
  }
</script>

<style scoped>
  .label {
    padding-right: 20px;
    padding-left: 30px;
    display: inline-block;
    vertical-align: middle;
  }

  .inline-block {
    position: relative;
    display: inline-block;
    padding: 20px;
  }

  .search-panel {
    padding: 100px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 25px;
    color: white;
  }

  .search-button{
    margin-left: 20px;
  }
</style>
