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
                typedText: ""
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
                const self = this;
                setInterval(function () {
                    self.process();
                }, this.typedSpeed);
            },
            process: function () {
                let isSuccess = this.isReverseProcess ? this.removeLastTypedLetter() : this.typeLetter();
                if (!isSuccess) {
                    if (this.eraseOnComplete && !this.isReverseProcess) {
                        this.isReverseProcess = true;
                    } else {
                        this.nextSentence();
                        if (this.eraseOnComplete) {
                            this.isReverseProcess = false;
                        }
                    }

                    this.process();
                }
            },
            nextSentence: function () {
                var text = this.typedTexts[this.indexOfData];
                if (!text) {
                    this.indexOfData = 0;
                }

                this.typedText = this.typedTexts[this.indexOfData];
                this.indexOfData++;
            },
            typeLetter: function () {
                var letter = this.typedText.charAt(this.indexOfSentence);

                if (letter) {
                    this.text += letter;
                    this.indexOfSentence++;

                    return true
                }

                return false;
            },
            removeLastTypedLetter: function () {
                var letter = this.typedText.charAt(this.indexOfSentence - 1);

                if (letter) {
                    this.text = this.text.slice(0, -1);
                    this.indexOfSentence--;

                    return true
                }

                return false;
            },
            reset: function () {
                this.indexOfSentence = 0;
                this.text = "";
            }
        }
    }
</script>
