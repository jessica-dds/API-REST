const bancoDeDados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Jéssica',
            email: 'jessica.gleizer@hotmail.com',
            status: true
        },

        {
            id: 2,
            nome: 'Dani',
            email: 'dani@email.com',
            status: true
        }
    ],

    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro servidor',
            descricao: "Construindo o primeiro servidor"
        }
    ]
}

module.exports = bancoDeDados