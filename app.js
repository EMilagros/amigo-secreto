const amigo = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Elimina espacios en blanco

    if (!nombreAmigo) { 
        alert("Debes ingresar un nombre");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos() {
    const listaAmigo = document.getElementById("listaAmigos");
    listaAmigo.innerHTML = "";

    amigo.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        listaAmigo.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Tu amigo secreto es: ${amigoSorteado}`;

    // Limpiar la lista de amigos después del sorteo
    amigo.length = 0; // Vacía el array sin reasignarlo
    renderizarAmigos(); // Limpia la lista en la UI
}

