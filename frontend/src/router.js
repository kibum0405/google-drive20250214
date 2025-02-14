
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import FilemanagementFileManager from "./components/listers/FilemanagementFileCards"
import FilemanagementFileDetail from "./components/listers/FilemanagementFileDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/filemanagements/files',
                name: 'FilemanagementFileManager',
                component: FilemanagementFileManager
            },
            {
                path: '/filemanagements/files/:id',
                name: 'FilemanagementFileDetail',
                component: FilemanagementFileDetail
            },



    ]
})
