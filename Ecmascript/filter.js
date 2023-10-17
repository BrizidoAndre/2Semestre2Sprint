const numero = [1, 2, 200, 10, 7, 12, 15, 8];
console.log(numero);

const nMenor10 = numero.filter((n) => {
    return n < 10;
});
console.log(nMenor10);


const somatorio = numero.reduce((total, n) => {
    return n + total
}, 45)

console.log(somatorio);



const comentarios = [
    {comentario: 'lorem ipsum', exibe: true},
    {comentario: 'Evento ruim', exibe: false},
    {comentario: 'ótimo Evento', exibe: true},
    {comentario: 'Meio merda', exibe: false},
    {comentario: 'Não fui fã', exibe: true}
];

const comentariosOk = comentarios.filter((c) => {
    return c.exibe === true;
});

console.log(comentariosOk);