(function(){
    let $btnIniciarReloj = document.getElementById("btn-reloj-inicio"),
        $btnDetenerReloj = document.getElementById("btn-reloj-parada"),
        $reloj = document.getElementById("reloj"),
        tempoReloj;
    
    $btnDetenerReloj.disabled = true;

    $btnIniciarReloj.addEventListener("click",function(){
        tempoReloj = setInterval(() => {
            let fecha = new Date();
            $reloj.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        }, 1000);
        $btnIniciarReloj.disabled = true;
        $btnDetenerReloj.disabled = false;
    });

    $btnDetenerReloj.addEventListener("click",function(){
        clearInterval(tempoReloj);
        $reloj.innerHTML ="";
        $btnIniciarReloj.disabled = false;
        $btnDetenerReloj.disabled = true;
    });
}
)();

(function(){
    let $btnIniciarAlarma = document.getElementById("btn-alarma-inicio"),
        $btnDetenerAlarma = document.getElementById("btn-alarma-parada"),
        $alarma = document.createElement("audio"),
        tempoAlarma;
    
    $btnDetenerAlarma.disabled = true;

    $btnIniciarAlarma.addEventListener("click",function(){
        $alarma.setAttribute("src","assets/car-alarm.mp3");
        $alarma.play();
        tempoAlarma = setTimeout(() => {
            $alarma.pause();
        }, 28000);
        $btnIniciarAlarma.disabled = true;
        $btnDetenerAlarma.disabled = false;
    });

    $btnDetenerAlarma.addEventListener("click",function(){
        clearInterval(tempoAlarma);
        $alarma.pause();
        $btnIniciarAlarma.disabled = false;
        $btnDetenerAlarma.disabled = true;
    });
})();
