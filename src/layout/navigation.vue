<template>
    <v-navigation-drawer
        width="240"
        :mini-variant="miniNav"
        mini-variant-width="64"
        src="../assets/background.png"
        :color="backgroundNav?'primary':null"
        :dark="backgroundNav"
        hide-overlay
        clipped
        app
    >
        <v-list flat>
            <template v-for="list in navList">
                <v-list-group
                    class="white--text"
                    v-if="list.items.length"
                    :key="list.path"
                    :prepend-icon="list.icon"
                    :active-class="backgroundNav||$vuetify.theme.dark?'white--text':'grey--text text--darken-3'"
                    :group="list.group"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="list.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="item in list.items"
                        :key="item.title"
                        active-class="secondary white--text"
                        :to="item.path"

                    >
                        <v-list-item-action><v-icon v-text="item.icon" right></v-icon></v-list-item-action>
                        <v-list-item-content class="text-right align-self-start">
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                    :key="list.title"
                    active-class="secondary white--text"
                    :to="list.path"
                    v-else
                >
                    <v-list-item-action><v-icon v-text="list.icon"></v-icon></v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="list.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        miniNav: Boolean,
        backgroundNav: Boolean
    },
    data() {
        return {
            navList: [{
                title: '??????',
                icon: 'mdi-magnify',
                group: '/plugin',
                path: '/plugin/prism',
                items: []
                // items: [{
                //     title: 'prism ??????',
                //     path: '/plugin/prism',
                //     icon: 'mdi-triangle-outline'
                // }, {
                //     title: '????????????',
                //     path: '/plugin/icons',
                //     icon: 'mdi-material-design'
                // }]
            }, {
                title: '????????????',
                icon: 'mdi-account-box',
                group: '/bulb',
              path: '/bulb/motion',
                items: [],
                // items: [{
                //     title: '????????????',
                //     path: '/bulb/motion',
                //     icon: 'mdi-transition-masked'
                // }]
            }]
        }
    }
}
</script>