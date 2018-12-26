<template>
  <div id="map" class='mapPanel'>
    <div class="loading" v-show='!isConverted'>
      <div>Loading...</div>
      <div><i class="el-icon-loading"></i></div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
  import {Icon} from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'

  export default {
    name: 'MapPanel',
    props: {
      points: Array,
      index: Number
    },
    data () {
      return {
        map: null,
        bd09List: [],
        isConverted: false,
        myIcon: null,
        mapStyle: [
          {
          "featureType": "land",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#091220ff"
          }
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#113549ff"
          }
        }, {
          "featureType": "green",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#0e1b30ff"
          }
        }, {
          "featureType": "building",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "building",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#ffffffb3"
          }
        }, {
          "featureType": "building",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#dadadab3"
          }
        }, {
          "featureType": "subwaystation",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#b15454B2"
          }
        }, {
          "featureType": "education",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#e4f1f1ff"
          }
        }, {
          "featureType": "medical",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#f0dedeff"
          }
        }, {
          "featureType": "scenicspots",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#e2efe5ff"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "weight": 4
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#f7c54dff"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#fed669ff"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#8f5a33ff"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "weight": 2
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#d8d8d8ff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#ffeebbff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "arterial",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#525355ff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "local",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "weight": 1
          }
        }, {
          "featureType": "local",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#d8d8d8ff"
          }
        }, {
          "featureType": "local",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "local",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "local",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#979c9aff"
          }
        }, {
          "featureType": "local",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "railway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "weight": 1
          }
        }, {
          "featureType": "railway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#123c52ff"
          }
        }, {
          "featureType": "railway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#12223dff"
          }
        }, {
          "featureType": "subway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "weight": 1
          }
        }, {
          "featureType": "subway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#d8d8d8ff"
          }
        }, {
          "featureType": "subway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "subway",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "subway",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#979c9aff"
          }
        }, {
          "featureType": "subway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "continent",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "continent",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "continent",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#333333ff"
          }
        }, {
          "featureType": "continent",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "city",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "city",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "city",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#454d50ff"
          }
        }, {
          "featureType": "city",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "town",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "town",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "town",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#454d50ff"
          }
        }, {
          "featureType": "town",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#12223dff"
          }
        }, {
          "featureType": "poilabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "districtlabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "district",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "poilabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "poilabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#2dc4bbff"
          }
        }, {
          "featureType": "poilabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "manmade",
          "elementType": "geometry",
          "stylers": {
            "color": "#12223dff"
          }
        }, {
          "featureType": "districtlabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "entertainment",
          "elementType": "geometry",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "shopping",
          "elementType": "geometry",
          "stylers": {
            "color": "#12223dff"
          }
        }]
      }
    },
    components: {
      'el-icon': Icon,
    },
    methods: {
      convertGPS: function () {

        let that = this
        let pointsList = this.points.map((x)=>new BMap.Point(x.longitude, x.latitude))
        //console.log(this.points)
        //console.log(pointsList)
        let pointIndex = 0
        this.bd09List = []
        let translateCallback = function (arr) {
          //console.log(arr)
          that.bd09List = that.bd09List.concat(arr.points)
          pointIndex += 10
          if (pointIndex >= pointsList.length) {
            that.isConverted = true
            return
          }

          addmarkbatch() //解析函数  循环在解析里面 策略是  批量解析一批，接受后在解析一批，
        }

        function addmarkbatch () {
          let from = pointIndex
          if (from >= pointsList.length) {
            return
          }
          let to = (from + 10 > pointsList.length) ? pointsList.length : from + 10
          var convertor = new BMap.Convertor()
          var pointss = new Array(to - from)
          for (let i = 0; i < to - from; i++) {
            pointss[i] = pointsList[i + pointIndex]
          }

          convertor.translate(pointss, 1, 5, translateCallback)
          /*setTimeout(function(){
            convertor.translate(pointss, 1, 5, translateCallback)
          }, 1000);*/
        }

        addmarkbatch()
      },
    },
    mounted () {
      if(!this.map)
        this.map = new BMap.Map('map')
      this.map.setCurrentCity('北京')
      this.map.enableScrollWheelZoom(true)
      this.map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }))
      this.map.setMapStyle({styleJson: this.mapStyle})
      /*//销毁
      this.$once('hook:beforeDestroy', function () {
        //this.map.dispose()
      })*/

      if(this.points.length>0)
        this.convertGPS()
    },
    watch: {
      points (cur, old) {
        if(cur && cur.length>0){
          //console.log("change"+cur.length)
          this.isConverted = false
          if(this.map)
            this.map.clearOverlays()
          this.convertGPS()
        }

      },
      index (cur, old) {
        if(this.map && this.bd09List.length>0 && cur< this.points.length && cur>=0){
          let marker = new BMap.Marker(this.bd09List[this.index], {icon: this.myIcon})
          let overlays = this.map.getOverlays()
          for (let item of overlays) {
            if (item.Bc && item.Bc.getAttributeNode('class').value === 'BMap_Marker') {
              this.map.removeOverlay(item)
            }
          }

          this.map.addOverlay(marker)
        }

      },
      isConverted (cur, old) {
        //debugger
        if (this.map && cur && this.bd09List.length>0) {
          //console.log(this.bd09List)
          //debugger
          //地图
          //this.map = new BMap.Map('map')
          this.map.centerAndZoom(this.bd09List[parseInt(this.bd09List.length / 2)], 16)  // 初始化地图,设置中心点坐标和地图级别
          /*this.map.setCurrentCity('北京')
          this.map.enableScrollWheelZoom(true)
          this.map.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }))
          this.map.setMapStyle({style: 'midnight'})*/

          this.myIcon = new BMap.Icon('/static/myIcon.png', new BMap.Size(20, 16))
          let marker = new BMap.Marker(this.bd09List[this.index], {icon: this.myIcon}) // 创建点

          let polyline = new BMap.Polyline(this.bd09List, {
            strokeColor: '#008DD5', //折线颜色 尽量与图标填充色保持一样
            strokeOpacity: 1, //折线的透明度，取值范围0 - 1
            strokeWeight: 10, //折线的宽度，以像素为单位
          })

          this.map.addOverlay(marker)
          this.map.addOverlay(polyline)


        }
      }
    }
  }
</script>

<style scoped>
  .mapPanel{
    overflow: hidden;
    /*border: 4px solid rgb(0, 58, 103);*/
  }
  .loading {
    position: relative;
    color: white;
    font-size: 32px;
    height: 65px;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>
