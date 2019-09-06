<template>
<a class="bg-gray-900 text-white px-5 py-3 text-md" v-bind:href="url">{{text}}</a>
</template>

<script>
    export default {
        name: "ButtonLink",
        props:{
            url: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
    }
</script>
