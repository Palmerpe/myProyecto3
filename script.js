window.onload = function() {
    let who = ['el perro', 'My abuela', 'su tortuga', 'My oso',''];
    let action = ['comio', 'orinar', 'aplastado', 'en banca rota','tomar'];
    let what = ['my tarea', 'las llaves', 'el carro'];
    let when = ['antes de la clase', 'justo a tiempo', 'cuando termine', 'durante mi almuerzo', 'mientras estaba ocupado'];

    function generateExcuse() {
        let randomWhoIndex = Math.floor(Math.random() * who.length);
        let randomActionIndex = Math.floor(Math.random() * action.length);
        let randomWhatIndex = Math.floor(Math.random() * what.length);
        let randomWhenIndex = Math.floor(Math.random() * when.length);

        let excuse = who[randomWhoIndex] + ' ' + action[randomActionIndex] + ' ' + what[randomWhatIndex] + ' ' + when[randomWhenIndex];
        return excuse;
    }

    document.getElementById('excusa').innerHTML = generateExcuse();
};
