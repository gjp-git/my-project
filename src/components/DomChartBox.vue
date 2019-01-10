<template>
  <div class="dom-chart-box" >
    <div id="domChartBox" :style="chartStyle" class="chartbox"></div>
    <img class="car-img" src='static/car.png'/>
    <div class="unit box-label small">单位：m</div>
    <div class="box-label">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/scatter')

  export default {
    name: 'DomChartBox',
    props: {
      objs: Array,
      chartStyle: Object,
    },
    data () {
      return {}
    },
    methods: {
      drawDomChart: function () {
        // 基于准备好的dom，初始化echarts实例
        if (this.objs) {
          let chartData = this.objs.map((x) => [-parseFloat(x.y), parseFloat(x.x)])
          let domChartBox = echarts.init(document.getElementById('domChartBox'))

          //销毁
          this.$once('hook:beforeDestroy', function () {
            domChartBox.dispose()
          })
          //console.log(chartData)
          // 绘制图表
          domChartBox.setOption({
            title: {
              show: false
            },
            legend: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            },
            grid: {
              left: '8%',
              right: '8%',
              top: '5%',
              bottom: '10%',
            },
            textStyle: {
              color: '#fff'
            },
            xAxis: {
              max: 30,
              min: -30,
              axisLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '10'
                }
              }
            },
            yAxis: {
              max: 250,
              min: 0,
              axisLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '10'
                }
              }
            },
            series: [{
              symbolSize: 15,
              data: chartData,
              type: 'scatter'
            }]
          })
        }
      },
    },
    mounted () {
      this.drawDomChart()
    },
    watch: {
      objs (cur, old) {
        this.drawDomChart()
      }
    }

  }
</script>

<style scoped>
  .dom-chart-box {
    position: relative;
  }

  .chartbox {
    border: 4px solid rgb(0, 58, 103);
    position: relative;
    margin-bottom: 10px;
  }

  .car-img {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 40px;
    transform: translate(-50%,0);
  }
  .unit {
    position: absolute;
    bottom: 36px;
    right: 10px;
  }
  .box-label {
    font-size: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: block;
    color: white;
  }

  .small {
    font-size: 8px;
  }

</style>
