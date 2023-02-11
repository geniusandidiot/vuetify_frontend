<template>
  <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>
    <v-row justify="center" no-gutters>
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <v-alert
            color="secondary"
            class="my-4 pl-6"
            border="left"
            icon="mdi-crosshairs"
            colored-border
            prominent
            text
            tile
        >
          <div class="flex-container">
            <div class="keyword__15XUH">
              <input type="text" class="search-input" style="color: #90a4ae;width:500px;" id="keyword" maxlength="64" autocomplete="off" placeholder="搜索职位、公司或地点" value=""></div>
              <button type="submit" class="search-btn__1ilgU" style="color: #00bcd4;background-color: #e0e0e0;opacity: 0.7;width:45px;">搜索</button>
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
            {{ item.url }}
          </a>
        </template>
        </v-data-table>
      </v-col>
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <pre data-language="js"><code class="language-js">
                    &lt;sctipt&gt;
                    import Prism from 'prismjs';
                    export default {
                        data() {
                            return {}
                        },
                        mounted() { // 需要执行highlightAll()才会加载
                            prism.highlightAll()
                        }
                    }
                    &lt;/sctipt&gt;
                </code></pre>
      </v-col>
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <p>prism 支持的语言种类太多了，有很多是你不会使用到的，推荐你使用 Babel 插件 <code>babel-plugin-prismjs</code> 管理
          prismjs，你可以随意的选择加载需要使用的语言</p>
        <p class="title">babel-plugin-prismjs 安装</p>
        <pre data-language="npm"><code class="language-js">
                    npm install babel-plugin-prismjs -D
                </code></pre>
      </v-col>
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <p>theme 可选值：<br/>
        <ul>
          <li><code>default</code></li>
          <li><code>dark</code></li>
          <li><code>funky</code></li>
          <li><code>okaidia</code></li>
          <li><code>twilight</code></li>
          <li><code>coy</code></li>
          <li><code>solarized</code></li>
          <li><code>tomorrow</code></li>
        </ul>
        </p>
        <p>plugins 可选值：<br/>
        <ul>
          <li><code>line-numbers</code> 代码显示行数。</li>
          <li><code>show-language</code> 在代码块中显示语言标签（内联代码不显示标签）</li>
          <li><code>normalize-whitespace</code> 自动排版格式化，相当好用，解救强迫症</li>
        </ul>
        <p>在 babel.config.js 文件中配置</p>
        <pre data-language="js"><code class="language-js">
                    // babel.config.js
                    plugins: [
                        ["prismjs", {
                            "languages": ["javascript", "css", "html", "markup"],
                            "plugins": ["line-numbers", "show-language", "normalize-whitespace"],
                            "theme": "tomorrow",
                            "css": true
                        }]
                    ]
                </code></pre>
      </v-col>
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        <p>完成以上步骤，接下来你可以在HTML中愉快的使用代码块了，vuetify 自己处理过 <code>&lt;code&gt;</code>
          标签，代码块会有阴影和第一行会有一点点的缩进，如果你介意的话，可以加入以下样式</p>
        <pre class="line-numbers"><code class="language-css">
                    /* App.vue */
                    // 清除vuetify的默认pre下的code伪元素和阴影
                    .v-application pre>code {
                        box-shadow: none;
                        &::before,
                        &::after {
                            content: none;
                        }
                    }
                </code></pre>
      </v-col>
      <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
        如果你喜欢 vuetify-admin 或者这正是你需要的，可以给颗心吗！或者想给些建议
        <v-icon>mdi-git</v-icon>
        <a class="mr-4 secondary--text" href="https://github.com/Kirito001/vuetify-admin"
           target="_blank">vuetify-admin</a>你的鼓励就是我的动力！<br/><br/><br/>
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
      headers: [
        {
          text: '职位',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '薪资', value: 'salary', filterable:false},
        { text: '要求', value: 'require', filterable:false},
        { text: '公司名称', value: 'company', sortable: false},
        { text: '公司简介', value: 'profile', sortable: false, filterable:false},
        { text: '福利待遇', value: 'welfare', sortable: false, filterable:false},
        { text: '公司地址', value: 'location', sortable: false, filterable:false},
        { text: '详情链接', value: 'url', sortable: false, filterable:false},
        { text: '发布日期', value: 'date', filterable:false},
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          salary: 159,
          require:"本科",
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
          require:"本科",
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
          require:"本科",
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
          require:"本科",
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
          require:"本科",
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
          require:"本科",
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
          require:"本科",
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
          require:"本科",
          company: 6.0,
          profile: 24,
          welfare: 4.0,
          location: '1%',
          url: 4.0,
          date: '1%',
        },
      ],
    };
  },
  methods: {
    getScrapeInfo: function (jobName) {
      var url = "127.0.0.1/scrape/?"+jobName
      url
    }
  }
}
</script>
<style>
.flex-container {
    display: flex;
    flex-wrap: nowrap;
}
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>