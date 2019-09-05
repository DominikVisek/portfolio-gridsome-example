<template>
    <div>
        <div v-if="open && closeByClickEverywhere" @click="open = false" class="fixed inset-0"></div>
        <div @click="open = !open">
            <slot name="opener"></slot>
        </div>
        <div v-if="open">
            <slot name="data"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "dropdown",
        props:{
            closeByClickEverywhere: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                open: false
            }
        },
    }
</script>
