<template>
  <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>

    <v-row justify="center" no-gutters>

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
          <v-text-field class="mr-2 " placeholder="请输入职位名称" outlined clearable ></v-text-field>

          <v-btn dark x-large > SEARCH </v-btn>
      </div>

        </v-alert>
      </v-col>

      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <v-card-title class="bg-primary pb-6">
          <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="搜索职位名称或公司名称"
              single-line
              hide-details
              variant="underlined"
          ></v-text-field>
        </v-card-title>
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
        </v-data-table>
      </v-col>

      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <template>
          <v-card>
            <v-row>

              <v-col :cols="2">
                <v-tabs v-model="tab" background-color="primary" dark vertical>
                  <v-tab v-for="item in items" :key="item.tab">
                    {{ item.tab }}
                  </v-tab>
                </v-tabs>
              </v-col>

              <v-col >
                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="item in items" :key="item.tab">
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
<!--                      <v-card-text>{{ item.content }}</v-card-text>-->
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
import prism from 'prismjs'

export default {
  name: 'Prism',
  mounted() {
    prism.highlightAll()
  },
  data() {
    return {
      search: '',
      selectedImage: null,
      headers: [
        {
          text: '职位',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: '薪资', value: 'salary', filterable: false},
        {text: '要求', value: 'require', filterable: false},
        {text: '公司名称', value: 'company', sortable: false},
        {text: '公司简介', value: 'profile', sortable: false, filterable: false},
        {text: '福利待遇', value: 'welfare', sortable: false, filterable: false},
        {text: '公司地址', value: 'location', sortable: false, filterable: false},
        {text: '详情链接', value: 'url', sortable: false, filterable: false},
        {text: '发布日期', value: 'date', filterable: false},
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          salary: 159,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '1%',
          url: 4.0,
          date: '1%',
        },
        {
          name: 'Frozen Yogurt2',
          salary: 15,
          require: "本科",
          company: "abc",
          profile: 13,
          welfare: 4.0,
          location: '3%',
          url: 4.0,
          date: '1%',
        },
        {
          name: 'Frozen Yogurt3',
          salary: 165,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '12%',
          url: 4.0,
          date: '1%',
        },
        {
          name: 'Frozen Yogurt4',
          salary: 167,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '14%',
          url: 4.0,
          date: '11%',
        },
        {
          name: 'Frozen Yogurt5',
          salary: 177,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '19%',
          url: 4.0,
          date: '1.2%',
        },
        {
          name: 'Frozen Yogurt6',
          salary: 159,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '1%',
          url: 4.0,
          date: '1%',
        },
        {
          name: 'Frozen Yogurt',
          salary: 159,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '1%',
          url: 4.0,
          date: '1%',
        },
        {
          name: 'Frozen Yogurt',
          salary: 159,
          require: "本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '1%',
          url: 4.0,
          date: '1%',
        },
      ],
      tab: null,
      items: [
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
        { tab: 'Five', content: 'Tab 5 Content' },
        { tab: 'Six', content: 'Tab 6 Content' },
        { tab: 'Seven', content: 'Tab 7 Content' },
        { tab: 'Eight', content: 'Tab 8 Content' },
        { tab: 'Nine', content: 'Tab 9 Content' },
        { tab: 'Ten', content: 'Tab 10 Content' },
      ],
    };
  },
  methods: {
    getScrapeInfo: function (jobName) {
      var url = "127.0.0.1/scrape/?" + jobName
      url
    },
    toggleFullscreen(elem) {
      this.selectedImage = elem;
    },
  }
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
</style>