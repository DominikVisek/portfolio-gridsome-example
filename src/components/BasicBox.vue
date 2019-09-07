<template>
    <div class="flex flex-col">
        <div class="flex flex-col items-center m-4 py-8">
            <slot name="iconSlot"></slot>
            <h3 class="flex-shrink text-xl font-bold mt-3">{{title}}</h3>
            <p class="flex-shrink text-gray-550 text-center text-sm mt-3">
                <slot name="text"></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasicBox",
        props:{
            title: {
                type: String,
                required: true
            },
        },
    }
</script>
