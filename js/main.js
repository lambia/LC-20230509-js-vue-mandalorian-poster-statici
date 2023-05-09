const { createApp } = Vue

createApp({
    data() {
        return {
            titolo: "Titolone sensazionalistico",
            nomeFileImg: "rebel-logo.png",
            passphrase: "impero",
            numero: 42
        }
    },
    methods: {
        metodo() {
            console.log("metodo che stampa un dato: ", this.chiave);
        },
        getNumber() {
            return parseInt(this.numero);
        },
        voltaGabbana() {
            if(this.passphrase == "impero") {
                this.passphrase = "ribellione";
            } else {
                this.passphrase = "impero";
            }
        }
    }
}).mount('#app')