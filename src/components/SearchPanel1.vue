<template>
  <div class="search-panel">
    <el-row>
      <span class="label">地区</span>
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
      <el-select v-model="datetime" placeholder="请选择城市" @change="hasTime = true">
        <el-option
          v-for="dt in datetimeForSelect"
          :key="dt"
          :label="dt"
          :value="dt"
        >
        </el-option>
      </el-select>

      <!--<el-button type="primary" class="search-button" @click="search" :disabled="checked"><slot></slot></el-button>-->
      <el-button type="primary" class="search-button" @click="search">
        <slot></slot>
      </el-button>
    </el-row>
  </div>
</template>

<script>/* eslint-disable */
import {Select, Option, DatePicker, Button, Row} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'SearchPanel1',
  props: {
    cityPlaceHolder: String,
    timePlaceHolder: Number
  },
  data () {
    return {
      //TODO: 改为接口获取
      options: [{
        value: '6huan',
        label: '六环',
        times: [
          '2018-08-07 12:51:30',
          '2018-08-07 12:52:00',
          '2018-08-07 12:52:30',
          '2018-08-07 12:53:00',
          '2018-08-07 12:53:30',
          '2018-08-07 12:54:00',
          '2018-08-07 12:56:30',
          '2018-08-07 12:57:00',
          '2018-08-07 12:57:30',
          '2018-08-07 12:58:00',
          '2018-08-07 12:58:30',
          '2018-08-07 12:59:00'
        ]
      }, {
        value: 'haidian',
        label: '海淀',
        times: [
          '2018-08-07 11:05:00',
          '2018-08-07 11:05:30',
          '2018-08-07 11:06:00',
          '2018-08-07 11:06:30',
          '2018-08-07 11:07:00',
          '2018-08-07 11:07:30',
          '2018-08-07 11:08:00',
          '2018-08-07 11:08:30',
          '2018-08-07 11:09:00',
          '2018-08-07 11:09:30',
          '2018-08-07 11:10:00',
          '2018-08-07 11:10:30',
          '2018-08-07 11:11:00',
          '2018-08-07 11:11:30',
          '2018-08-07 11:12:00',
          '2018-08-07 11:12:30',
          '2018-08-07 11:13:00',
          '2018-08-07 11:13:30',
          '2018-08-07 11:14:00',
          '2018-08-07 11:14:30',
          '2018-08-07 11:15:00',
          '2018-08-07 11:15:30',
          '2018-08-07 11:16:00',
          '2018-08-07 11:16:30',
          '2018-08-07 11:17:00',
          '2018-08-07 11:17:30',
          '2018-08-07 11:18:00',
          '2018-08-07 11:18:30',
          '2018-08-07 11:19:00',
          '2018-08-07 11:19:30',
          '2018-08-07 11:20:00',
          '2018-08-07 11:20:30',
          '2018-08-07 11:21:00',
          '2018-08-07 11:21:30',
          '2018-08-07 11:22:00',
          '2018-08-07 11:22:30',
          '2018-11-14 16:47:30',
          '2018-11-14 16:48:00',
          '2018-11-14 16:48:30',
          '2018-11-14 16:49:00',
          '2018-11-14 16:49:30',
          '2018-11-14 16:53:00',
          '2018-11-14 16:53:30',
          '2018-11-14 16:54:00',
          '2018-11-14 16:54:30',
          '2018-11-14 16:55:00',
          '2018-11-14 16:55:30',
          '2018-11-14 16:57:30',
          '2018-11-14 16:58:00',
          '2018-11-14 16:58:30',
          '2018-11-14 16:59:00',
          '2018-11-14 16:59:30',
          '2018-11-14 17:00:00',
          '2018-11-14 17:00:30',
          '2018-11-14 17:03:30',
          '2018-11-14 17:04:00',
          '2018-11-14 17:04:30',
          '2018-11-14 17:05:00',
          '2018-11-14 17:05:30',
          '2018-11-14 17:06:00',
          '2018-11-14 17:06:30',
          '2018-11-14 17:07:00',
          '2018-11-14 17:07:30',
          '2018-11-14 17:08:00',
          '2018-11-14 17:08:30',
          '2018-11-14 17:13:00',
          '2018-11-14 17:13:30',
          '2018-11-14 17:14:00',
          '2018-11-14 17:14:30',
          '2018-11-14 17:15:00',
          '2018-11-14 17:15:30',
          '2018-11-14 17:16:00',
          '2018-11-14 17:16:30',
          '2018-11-14 17:17:00',
          '2018-11-14 17:17:30',
          '2018-11-14 17:18:00',
          '2018-11-14 17:18:30',
          '2018-11-14 17:19:00',
          '2018-11-14 17:19:30',
          '2018-11-14 17:20:00',
          '2018-11-14 17:20:30',
          '2018-11-14 17:21:00',
          '2018-11-14 17:21:30',
          '2018-11-14 17:22:00',
          '2018-11-14 17:22:30',
          '2018-11-14 17:23:00',
          '2018-11-14 17:23:30',
          '2018-11-14 17:24:00'
        ]
      }],
      city: this.cityPlaceHolder,
      datetime: this.unix2datetime(this.timePlaceHolder),
      hasCity: false,
      hasTime: false,

    }
  },
  computed: {
    checked () {
      //console.log(!(this.hasCity&&this.hasTime))
      return !(this.hasCity && this.hasTime)
    },
    timestamp () {
      return this.datetime2unix(this.datetime)
    },
    datetimeForSelect(){
      let rs = []
      for(let item of this.options){
        if(item.value === this.city){
          rs = item.times
        }
      }
      return rs
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
  methods: {
    search () {
      this.$emit('search', {'city': this.city, 'timestamp': this.timestamp})
    },

    unix2datetime(timestamp){
      //timestamp 单位毫秒
      let unixtimestamp = new Date(timestamp);
      let year = 1900 + unixtimestamp.getYear();
      let month = "0" + (unixtimestamp.getMonth() + 1);
      let date = "0" + unixtimestamp.getDate();
      let hour = "0" + unixtimestamp.getHours();
      let minute = "0" + unixtimestamp.getMinutes();
      let second = "0" + unixtimestamp.getSeconds();
      return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
        + " " + hour.substring(hour.length-2, hour.length) + ":"
        + minute.substring(minute.length-2, minute.length) + ":"
        + second.substring(second.length-2, second.length);
    },
    datetime2unix(datetime){
      let tmp_datetime = datetime.replace(/:/g,'-');
      tmp_datetime = tmp_datetime.replace(/ /g,'-');
      let arr = tmp_datetime.split("-");
      let time = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
      return parseInt(time.getTime()/1000);
    }


  },
  watch: {
    datetime (cur, old) {
      //console.log(cur)
    },

  }
}
</script>

<style scoped>
  .label {
    padding-right: 10px;
    padding-left: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .search-panel {
    padding: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 18px;
    color: white;
  }

  .search-button {
    margin-left: 20px;
  }
</style>
