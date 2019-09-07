<template>
    <span>{{number}}</span>
</template>

<script>
    export default {
        name: "CountUp",
        props: {
            startNumber: {
                type: Number,
                required: false,
                default: 0,
            },
            endNumber: {
                type: Number,
                required: true,
            },
            animationTime: {
                type: Number,
                required: false,
                default: 10,
            },
        },
        data() {
            return {
                number: this.startNumber,
                intervalId: 0,
                iteratedTime: 0,
            };
        },
        mounted: function () {
            if (this.endNumber > this.startNumber) {
                this.processAnimation()
            }
        },
        methods: {
            processAnimation: function () {
                const self = this;

                this.intervalId = setInterval(function () {
                    self.number++;
                    if(self.number === self.endNumber){
                        clearInterval(self.intervalId);
                    }
                }, this.getIntervalTime());
            },
            getIntervalTime: function () {
                let time = this.endNumber - this.startNumber;

                return this.animationTime/time;
            }
        }
    }
</script>
