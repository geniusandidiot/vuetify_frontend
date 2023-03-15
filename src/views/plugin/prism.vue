<template>
  <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>

    <v-row justify="center" no-gutters>

      <!--      搜索栏-->
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <v-alert
            color="secondary"
            class="pa-md-4 pa-sm-3 pa-2"
            border="left"
            colored-border
            prominent
            text
            tile
        >

          <div class="d-flex">
            <v-text-field class="mr-2" v-model="job" :error-messages="jobErrors" filled placeholder="请输入职位名称"
                          outlined clearable></v-text-field>
            <v-btn dark x-large @click="getScrapeInfo"> SEARCH</v-btn>
          </div>
          热搜岗位：
          <div class="d-flex">
            <v-btn dark x-large @click="job=''; job='C++'"> C++</v-btn>
            <v-btn dark x-large @click="job=''; job='C#'"> C#</v-btn>
            <v-btn dark x-large @click="job=''; job='Java'"> Java</v-btn>
            <v-btn dark x-large @click="job=''; job='Rust'"> Rust</v-btn>
            <v-btn dark x-large @click="job=''; job='Python'"> Python</v-btn>
            <v-btn dark x-large @click="job=''; job='Unity'"> Unity</v-btn>
            <v-btn dark x-large @click="job=''; job='前端'"> 前端</v-btn>
            <v-btn dark x-large @click="job=''; job='后端'"> 后端</v-btn>
            <v-btn dark x-large @click="job=''; job='测试'"> 测试</v-btn>
            <v-btn dark x-large @click="job=''; job='算法工程师'"> 算法工程师</v-btn>

          </div>
        </v-alert>
      </v-col>

      <!--      搜索结果-->
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <!--        <v-card-title class="bg-primary pb-6">-->
        <!--          <v-text-field-->
        <!--              v-model="search"-->
        <!--              prepend-icon="mdi-magnify"-->
        <!--              label="搜索职位名称或公司名称"-->
        <!--              single-line-->
        <!--              hide-details-->
        <!--              variant="underlined"-->
        <!--          ></v-text-field>-->
        <!--        </v-card-title>-->
        <v-data-table
            :items-per-page="5"
            :footer-props="{'items-per-page-options': [5,10,20]}"
            :headers="headers"
            :items="desserts"
            :search="search"
            item-value="name"
            class="elevation-1">
          <template #item.url="{ item }">
            <a target="_blank" :href="item.url">
              {{ "more" }}
            </a>
          </template>
          <template v-slot:body.prepend>
            <tr>
              <td>
                <v-text-field v-model="name" type="text" label="岗位名称"></v-text-field>
              </td>
              <td>
                <v-text-field v-model="salary" type="number" label="More than"></v-text-field>
              </td>
              <td>
                <v-text-field v-model="demand" type="text" label="岗位要求"></v-text-field>
              </td>
              <td>
                <v-text-field v-model="company" type="text" label="公司名称"></v-text-field>
              </td>
              <td>
                <v-text-field v-model="profile" type="text" label="公司简介"></v-text-field>
              </td>
              <td>

              </td>
              <td>
                <v-text-field v-model="location" type="text" label="地区"></v-text-field>
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          </template>
        </v-data-table>
      </v-col>

      <!--      数据分析可视化-->
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <template>
          <v-card>
            <v-row>
              <v-col :cols="2">
                <v-tabs v-model="tab" background-color="primary" dark vertical>
                  <v-tab v-for="item in items" :key="item.tab">
                    {{ item.tab }}
                  </v-tab>
                  <v-tab>
                    词云
                  </v-tab>
                </v-tabs>
              </v-col>

              <v-col>
                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="item in items" :key="item.tab">
                    <v-card flat>
                      <div style="height:450px;" class="mb-0">
                        <v-chart :option="item.content" autoresize/>
                      </div>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-img
                          class="fill-height"
                          max-height="450"
                          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          @click="toggleFullscreen('https://cdn.vuetifyjs.com/images/cards/docks.jpg')"
                          cover
                      >
                        <div v-if="selectedImage" class="overlay">
                          <v-img
                              class="mt-12"
                              :src="selectedImage"
                              alt=""
                              height="95vh"
                              contain
                              dark
                              @click.stop="selectedImage = null"
                          >
                          </v-img>
                        </div>
                      </v-img>

                    </v-card>
                    </v-tab-item>
                </v-tabs-items>
              </v-col>

            </v-row>
          </v-card>
        </template>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import prism from 'prismjs';
import {maxLength, required} from "vuelidate/lib/validators";
import {validationMixin} from 'vuelidate';

import * as echarts from "echarts";
import chinaJson from "@/echarts/echarts-4.2.1-rc1-map/json/china.json";

echarts.registerMap('china', chinaJson);
export default {
  name: 'Prism',
  mounted() {
    prism.highlightAll()
  },
  data() {
    return {
      search: '',
      name: '',
      salary: '',
      demand: '',
      company: '',
      profile: '',
      welfare: '',
      location: '',
      url: '',
      date: '',
      selectedImage: null,
      // desserts: [
      //   {
      //     name: 'Frozen Yogurt',
      //     salary: 159,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '1%',
      //     url: 4.0,
      //     date: '1%',
      //   },
      //   {
      //     name: 'Frozen Yogurt2',
      //     salary: 15,
      //     demand: "本科",
      //     company: "abc",
      //     profile: 13,
      //     welfare: 4.0,
      //     location: '3%',
      //     url: 4.0,
      //     date: '1%',
      //   },
      //   {
      //     name: 'Frozen Yogurt3',
      //     salary: 165,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '12%',
      //     url: 4.0,
      //     date: '1%',
      //   },
      //   {
      //     name: 'Frozen Yogurt4',
      //     salary: 167,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '14%',
      //     url: 4.0,
      //     date: '11%',
      //   },
      //   {
      //     name: 'Frozen Yogurt5',
      //     salary: 177,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '19%',
      //     url: 4.0,
      //     date: '1.2%',
      //   },
      //   {
      //     name: 'Frozen Yogurt6',
      //     salary: 159,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '1%',
      //     url: 4.0,
      //     date: '1%',
      //   },
      //   {
      //     name: 'Frozen Yogurt',
      //     salary: 159,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '1%',
      //     url: 4.0,
      //     date: '1%',
      //   },
      //   {
      //     name: 'Frozen Yogurt',
      //     salary: 159,
      //     demand: "本科",
      //     company: 6.0,
      //     profile: 24,
      //     welfare: 4.0,
      //     location: '1%',
      //     url: 4.0,
      //     date: '1%',
      //   },
      // ],
      desserts:[],
      tab: null,
      dataX: ['最低薪资', '最高薪资', '平均薪资', '薪资中位数'],
      dataY: [],
      citys: [],
      academic_qualifications: [], //学历
      aq_sal: [],
      city_salary: [],
      exp: [],
      exp_sal: [],
      ciyun:'',
      jobs_distribution: {
        title: {
          text: '岗位分布',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['iphone3', 'iphone4', 'iphone5']
        },
        layoutSize: 500,
        visualMap: {
          min: 0,
          max: 2500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],           // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            layoutCenter: ['50%', '50%'],//位置
            layoutSize: '200%',//大小
            aspectScale: 1.2, //宽高比
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#7B68EE'
                }, //省份标签字体颜色
              },
              emphasis: {//对应的鼠标悬浮效果
                show: true,
                textStyle: {
                  color: "#6495ED"
                }
              },
            },
            data: [
              {name: '北京', value: 13},
              {name: '天津', value: 13},
              {name: '上海', value: 13},
              {name: '重庆', value: 13},
              {name: '河北', value: 13},
              {name: '河南', value: 13},
              {name: '云南', value: 13},
              {name: '辽宁', value: 13},
              {name: '黑龙江', value: 13},
              {name: '湖南', value: 13},
              {name: '安徽', value: 13},
              {name: '山东', value: 13},
              {name: '新疆', value: 13},
              {name: '江苏', value: 13},
              {name: '浙江', value: 13},
              {name: '江西', value: 13},
              {name: '湖北', value: 13},
              {name: '广西', value: 13},
              {name: '甘肃', value: 13},
              {name: '山西', value: 13},
              {name: '内蒙古', value: 13},
              {name: '陕西', value: 13},
              {name: '吉林', value: 13},
              {name: '福建', value: 13},
              {name: '贵州', value: 13},
              {name: '广东', value: 13},
              {name: '青海', value: 13},
              {name: '西藏', value: 13},
              {name: '四川', value: 13},
              {name: '宁夏', value: 13},
              {name: '海南', value: 13},
              {name: '台湾', value: 13},
              {name: '香港', value: 13},
              {name: '澳门', value: 13}
            ]
          },

        ]
      },

      items: [
        {tab: '全国分布', content: null},
        {tab: '平均薪资', content: null},
        {tab: '城市工资水平', content: null},
        {tab: '经验要求', content: null},
        {tab: '学历要求', content: null},
        {tab: 'Six', content: null},
        {tab: 'Seven', content: null},
        {tab: 'Eight', content: null},
        {tab: 'Nine', content: null},
        {tab: 'Ten', content: null},
      ],

      cityDemand: [],//城市人才需求量
      salarydata: [],//职位工资水平
      citySalary: [],//城市工资水平
      expRequired: [],//经验要求
      eduRequired: [],//学历要求
      job: '',
    };
  },
  mixins: [validationMixin],
  validations: {
    job: {required, maxLength: maxLength(10)}
  },
  computed: {
    jobErrors() {
      const err = [];
      if (!this.$v.job.$dirty) return err;
      !this.$v.job.required && err.push('请填写工作名称')
      !this.$v.job.maxLength && err.push('工作名称长度不能大于10')
      return err
    },
    headers() {
      return [
        {
          text: "职位",
          align: "start",
          sortable: false,
          value: 'name',
          width: 150,
          filter: f => {
            return (f + '').includes(this['name'])
          }
        },
        {
          text: "薪资",
          value: "salary",
          filterable: false,
          width: 150,
          filter: value => {
            if (!this.salary) return true;
            return value < parseInt(this.salary);
          }
        },
        {
          text: "要求",
          value: "demand",
          filterable: false,
          width: 150,
          filter: f => {
            return (f + '').includes(this['demand'])
          }
        },
        {
          text: "公司名称",
          align: "start",
          value: "company",
          sortable: false,
          width: 150,
          filter: f => {
            return (f + '').includes(this['company'])
          }
        },
        {
          text: "公司简介",
          value: "profile",
          sortable: false,
          filterable: false,
          width: 150,
          filter: value => {
            if (!this.profile) return true;
            return value == parseInt(this.profile);
          }
        },
        {
          text: "福利待遇",
          value: "welfare",
          sortable: false,
          filterable: false,
          width: 100,
          filter: value => {
            if (!this.welfare) return true;
            return value == parseInt(this.welfare);
          }
        },
        {
          text: "公司地址",
          value: "location",
          sortable: false,
          width: 150,
          filter: f => {
            return (f + '').includes(this['location'])
          }
        },
        {
          text: "详情链接",
          value: "url",
          sortable: false,
          filterable: false,
          width: 100,
          filter: value => {
            if (!this.url) return true;
            return value == parseInt(this.url);
          }
        },
        {
          text: "发布日期",
          value: "date",
          filterable: false,
          width: 100,
          filter: value => {
            if (!this.date) return true;
            return value == parseInt(this.date);
          }
        },
      ];
    },
    general_salary() {
      return {
        backgroundColor: '#061326',
        grid: {
          top: '25%',
          left: '-5%',
          bottom: '5%',
          right: '5%',
          containLabel: true,
        },
        tooltip: {
          show: true,
        },
        animation: false,
        xAxis: [
          {
            type: 'category',
            data: this.dataX,
            axisTick: {
              alignWithLabel: true,
            },
            nameTextStyle: {
              color: '#82b0ec',
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#82b0ec',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
              margin: 30,
            },
          },
        ],
        yAxis: [
          {
            show: false,
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
            },
            splitLine: {
              lineStyle: {
                color: '#0c2c5a',
              },
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6], // 上部椭圆
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",
            label: {
              normal: {
                show: true,
                position: 'top',
                // "formatter": "{c}%"
                fontSize: 15,
                fontWeight: 'bold',
                color: '#34DCFF',
              },
            },
            color: '#2DB1EF',
            data: this.dataY,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7], // 下部椭圆
            // "barWidth": "20",
            z: 12,
            color: '#2DB1EF',
            data: this.dataY,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: function (d) {
              return d > 0 ? [50, 15] : [0, 0]
            },
            symbolOffset: [0, 12], // 下部内环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#2EA9E5',
                borderType: 'solid',
                borderWidth: 1,
              },
            },
            data: this.dataY,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18], // 下部外环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#19465D',
                borderType: 'solid',
                borderWidth: 2,
              },
            },
            data: this.dataY,
          },
          {
            type: 'bar',
            //silent: true,
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: '#38B2E6',
                  },
                  {
                    offset: 1,
                    color: '#0B3147',
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: this.dataY,
          },
        ],
      }
    }

  },
  methods: {
    getScrapeInfo() {
      // var url = "127.0.0.1/scrape/?" + jobName
      // url
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.setOption()
        this.$axios.get('http://127.0.0.1:5000/test', {params:{'name':this.job}}).then(res=>{
          this.desserts = JSON.parse(res.data)
          // alert(res.data)
        });
        //alert(this.job)
      }
      // if(this.job == null || this.job == ''){
      //     alert("null!")
      // }else{
      //
      // }
    },
    setOption() {
      this.items.forEach(item => {
            item.content = this.general_salary
          }
      );
    },
    toggleFullscreen(elem) {
      this.selectedImage = elem;
    }
  },

}
</script>
<style>
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

.v-tab {
  max-width: 100% !important;
  /*width: 90px;*/
}

* {
  text-transform: none !important;
}
</style>