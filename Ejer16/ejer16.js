function crearAleatoreo() {
        var array1 = []
        var array2 = []
        for (let i = 0; i < 5; i++) {
            var array2
            array1[i] = Math.floor(Math.random()*100);
            array2[i] = parseInt(Math.random()*100);
        }
        document.getElementById("p_01").textContent = array1.join(" - ");
        document.getElementById("p_02").textContent = array2.join(" - ");
    }