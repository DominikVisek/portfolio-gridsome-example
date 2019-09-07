<template>
    <span>{{text}}|</span>
</template>

<script>
    export default {
        name: "Typer",
        data() {
            return {
                pauseTimer: false,
                indexOfSentence: 0,
                indexOfData: 0,
                isReverseProcess: false,
                text: "",
                typedText: "",
                intervalId: 0,
                timeoutId: 0
            }
        },
        props: {
            typedTexts: {
                type: Array,
                required: true
            },
            typedSpeed: {
                type: Number,
                required: false,
                default: 60
            },
            preEraseTimeout: {
                type: Number,
                required: false,
                default: 3000
            },
            eraseOnComplete: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        mounted: function () {
            this.nextSentence();
            this.startTimer();
        },
        methods: {
            startTimer: function () {
                clearTimeout(this.timeoutId);
                const self = this;
                this.intervalId = setInterval(function () {
                    self.process();
                }, this.typedSpeed);
            },
            process: function () {
                let isSuccess = this.isReverseProcess ? this.removeLastTypedLetter() : this.typeLetter();
                if (!isSuccess) {
                    if (this.eraseOnComplete && !this.isReverseProcess) {
                        this.isReverseProcess = true;
                        this.processPreEraseTimout()
                    } else {
                        this.nextSentence();
                        if (this.eraseOnComplete) {
                            this.isReverseProcess = false;
                        } else {
                            this.processPreEraseTimout();
                        }
                    }
                }
            },
            processPreEraseTimout: function () {
                clearInterval(this.intervalId);
                let selfInstance = this;
                this.timeoutId = setTimeout(function () {
                    if(!selfInstance.eraseOnComplete){
                        selfInstance.resetSentenceData();
                    }
                    selfInstance.startTimer();
                }, this.preEraseTimeout);
            },
            nextSentence: function () {
                let text = this.typedTexts[this.indexOfData];
                if (!text) {
                    this.indexOfData = 0;
                }

                this.typedText = this.typedTexts[this.indexOfData];
                this.indexOfData++;
            },
            typeLetter: function () {
                let letter = this.typedText.charAt(this.indexOfSentence);

                if (letter) {
                    this.text += letter;
                    this.indexOfSentence++;

                    return true
                }

                return false;
            },
            removeLastTypedLetter: function () {
                let letter = this.typedText.charAt(this.indexOfSentence - 1);

                if (letter) {
                    this.text = this.text.slice(0, -1);
                    this.indexOfSentence--;

                    return true
                }

                return false;
            },
            resetSentenceData: function () {
                this.indexOfSentence = 0;
                this.text="";
            }
        }
    }
</script>
