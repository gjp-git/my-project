<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <!-- 车辆基本数据 -->
  <div class="can-data-panel">
    <div class="can-data-block">
      <div>
        <img :style="getSteerStyle" class="can-data-imgPanel can-data-img" src='static/steer.png'/>
      </div>
      <div v-if="!isNaN(steerStyle)" class="can-data">{{steerStyle}}&deg;</div>
      <div v-else class="can-data">无数据</div>
      <!--{{result[index].can.siSteeringAngle}}-->
      <div class="can-data">方向盘</div>
    </div>
    <div class="can-data-block">
      <div class="can-data-imgPanel">
        <img class="can-data-img" src='static/brake.png'/>
        <div class="can-slider">
          <el-slider :value="brakePressure" vertical height="65px" :disabled="true"
                     :show-tooltip="false">
          </el-slider>
        </div>
      </div>
      <div v-if="!isNaN(brakePressure)" class="percentData can-data">{{brakePressure}}%</div>
      <div v-else class="percentData can-data">{{brakePressure}}%</div>
      <div class="percentData can-data">刹车</div>
    </div>
    <div class="can-data-block">
      <div class="can-data-imgPanel">
        <img class="can-data-img" src='static/acceleration.png'/>
        <div class="can-slider">
          <el-slider :value="accelerationPedal" vertical height="65px" :disabled="true"
                     :show-tooltip="false">
          </el-slider>
        </div>
      </div>
      <div v-if="!isNaN(accelerationPedal)" class="percentData can-data">{{accelerationPedal}}%</div>
      <div v-else class="percentData can-data">{{accelerationPedal}}%</div>
      <div class="percentData can-data">油门</div>
    </div>
    <div class="can-data-block">
      <div class="can-data-imgPanel">
        <img class="can-data-img" src='static/speed.png'/>
        <div class="can-slider">
          <el-slider :value="vehicleSpeed" vertical height="65px" :disabled="true" :show-tooltip="false">
          </el-slider>
        </div>
      </div>
      <div v-if="!isNaN(vehicleSpeed)" class="can-data">{{vehicleSpeed}}km/h</div>
      <div v-else class="can-data">无数据</div>
      <div class="can-data">车速</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import {Slider} from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'

  export default {
    name: 'CanDataPanel',
    props: {
      dataItem: Object
    },
    components: {
      'el-slider': Slider
    },
    data () {
      return {

      }
    },
    computed: {
      getSteerStyle() {
        if(this.dataItem && this.dataItem.can && this.dataItem.can.siSteeringAngle!=null){
          return {
            'transform': 'rotate(' + this.dataItem.can.siSteeringAngle + 'deg)'
          }
        }
        else{
          return {}
        }
      },
      steerStyle(){
        if(this.dataItem && this.dataItem.can && this.dataItem.can.siSteeringAngle!=null){
          return this.formatNum(parseFloat(this.dataItem.can.siSteeringAngle),2)
        }
        else{
          return NaN
        }
      },
      brakePressure(){
        if(this.dataItem && this.dataItem.can && this.dataItem.can.siBrakePressure!=null){
          return this.formatNum(parseFloat(this.dataItem.can.siBrakePressure / 180 * 100),2)
        }
        else{
          return NaN
        }
      },
      accelerationPedal(){
        if(this.dataItem && this.dataItem.can && this.dataItem.can.siAccelerationPedal!=null){
          return this.formatNum(parseFloat(this.dataItem.can.siAccelerationPedal),2)
        }
        else{
          return NaN
        }
      },
      vehicleSpeed(){
        if(this.dataItem && this.dataItem.can && this.dataItem.can.siVehicleSpeed!=null){
          return this.formatNum(parseFloat(this.dataItem.can.siVehicleSpeed / 240 * 100),1)
        }
        else{
          return NaN
        }
      }
    },
    methods: {
      formatNum: function (num, i) {
        let result = parseFloat(num)
        if (isNaN(result)) {
          alert('传递参数错误，请检查！')
          return false
        }
        if (i < 1) {
          i = 1
        }
        result = Math.round(num * Math.pow(10, i)) / Math.pow(10, i)
        let s_x = result.toString()
        let pos_decimal = s_x.indexOf('.')
        if (pos_decimal < 0) {
          pos_decimal = s_x.length
          s_x += '.'
        }
        while (s_x.length <= pos_decimal + i) {
          s_x += '0'
        }
        return parseFloat(s_x)
      },
    },
    filters: {
      getBrakePressure: function (item) {
        return parseFloat(item.can.siBrakePressure / 180 * 100)
      },
      getAccelerationPedal: function (item) {
        return parseFloat(item.can.siAccelerationPedal)
      },
      getSpeed: function (item) {
        return parseFloat(item.can.siVehicleSpeed / 240 * 100)
      },
    },
    watch:{
      dataItem (cur, old) {
        if(!cur){

        }
      }
    }
  }

</script>
<style scoped>
  .can-data-panel {
    position: relative;
    color: white;
    heigth: 100px;
  }

  .can-data-block {
    position: relative;
    display: inline-block;
    width: 100px;
    heigth: 100px;
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: top;
  }

  .can-data-imgPanel {
    position: relative;
    display: block;
  }

  .can-data-img {
    position: relative;
    width: 75px;
    height: 75px;
    margin: 0;
    display: inline-block;
    vertical-align: top;
  }

  .can-slider {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 75px;
    top: 5px;
    vertical-align: top;
  }

  .can-data {
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: block;
    color: white;
  }

  .percentData {
    position: relative;
    left: 10px;
  }
</style>

<style>
  .el-slider__runway {
    background-color: rgb(62, 140, 201);
    border-radius: 0;
  }

  .el-slider.is-vertical .el-slider__bar {
    border-radius: 0;
  }

  .el-slider__runway.disabled .el-slider__bar {
    background-color: rgb(0, 58, 103);
  }

  .el-slider__runway.disabled .el-slider__button {
    border-color: rgb(0, 36, 65);
    border-radius: 0;
    width: 10px;
    height: 6px;
    background-color: rgb(0, 36, 65);
  }

  .el-slider__runway.disabled .el-slider__button.dragging, .el-slider__runway.disabled .el-slider__button.hover, .el-slider__runway.disabled .el-slider__button:hover {
    cursor: default;
  }

  .el-slider__runway.disabled .el-slider__button-wrapper.dragging, .el-slider__runway.disabled .el-slider__button-wrapper.hover, .el-slider__runway.disabled .el-slider__button-wrapper:hover {
    cursor: default;
  }
</style>
