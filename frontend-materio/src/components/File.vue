<template>
    <div>
        <String label="이름" v-model="value.name" :editMode="editMode"/>
        <String label="경로" v-model="value.path" :editMode="editMode"/>
        <Number label="크기" v-model="value.size" :editMode="editMode"/>
        <String label="업로드 한 사용자" v-model="value.uploadedBy" :editMode="editMode"/>
        <Number label="다운로드된 횟수" v-model="value.downloadedCount" :editMode="editMode"/>
        <Boolean label="공유 여부" v-model="value.shared" :editMode="editMode"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>

import BaseEntity from './base-ui/BaseEntity.vue'

export default {
    name: 'File',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "files"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
