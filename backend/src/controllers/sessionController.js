const connection = require('../database/conection');

module.exports = {

    async create(request, response) {

        //Rota de login
        const { id } = request.body;
        const ongs = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ongs) {
            return response.json(400).json({ error: 'No ong Found with this ID' });
        }
        return response.json(ongs);

    }
}