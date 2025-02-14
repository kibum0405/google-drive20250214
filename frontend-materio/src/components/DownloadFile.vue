<template>

    <v-card outlined>
        <v-card-title>
            DownloadFile
        </v-card-title>

        <v-card-text>
            <String label="Filename" v-model="value.filename" :editMode="editMode"/>
            <String label="Path" v-model="value.path" :editMode="editMode"/>
            <String label="DownloadedBy" v-model="value.downloadedBy" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="downloadFile"
            >
                DownloadFile
            </v-btn>
            
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>

export default {
    name: 'DownloadFileCommand',
    components:{
    },
    props: {},
    data: () => ({
        editMode: true,
        value: {},
    }),
    created() {
        this.value.filename = '';
        this.value.path = '';
        this.value.downloadedBy = '';
    },
    watch: {
    },
    methods: {
        downloadFile() {
            this.$emit('downloadFile', this.value);
        },
        close() {
            this.$emit('closeDialog');
        },
        change() {
            this.$emit("update:modelValue", this.value);
        },
    }
}
</script>

