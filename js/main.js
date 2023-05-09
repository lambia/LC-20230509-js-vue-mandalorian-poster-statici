const { createApp } = Vue

createApp({
    data() {
        return {
            // awesome: false,
            // passphrase: "milleniumfalco",
            // ribelli: ['Michele', 'Fabio', 'Roberto'],
            
            // numeroDiVolte: 40,

            movieName: "The Mandalorian",
            movieLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/The_Mandalorian.svg",
            posters: [
                'https://www.themoviedb.org/t/p/w500/qruRhG6jE5M8lWnW1AGOBxtdmCO.jpg',
                'https://www.themoviedb.org/t/p/w500/vGujlColp9TkLCOgkPr92azJlR8.jpg',
                'https://www.themoviedb.org/t/p/w500/ui9dxJfw9I8dJzil9x5ZeXLsrFF.jpg',
                'https://www.themoviedb.org/t/p/w500/rE1AOt56R4vrvVKpWrQ4wn7DYyg.jpg'
            ]
        }
    },
    methods: {
        // cambioAwesome() {
        //     this.awesome = !this.awesome;
        // }

    }
}).mount('#app')