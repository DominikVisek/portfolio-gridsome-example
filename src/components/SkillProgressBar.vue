<template>
    <div class="w-full">
        <h5 class="text-gray-700">{{title}}</h5>
        <div class="w-full h-1 bg-gray-350 mt-2">
            <div class="h-full bg-gray-700 flex items-center justify-end" v-bind:style="{width: percentage+'%'}">
                <span class="pb-8 text-sm">{{percentage}}%</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkillProgressBar",
        props:{
            percentage: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
        },
    }
</script>
