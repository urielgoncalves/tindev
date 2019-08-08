const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
    async store(request, response) {
        //console.log(request.body.username);
        const { username } = request.body;
        const userExists = await Dev.findOne({ user: username });
        if (userExists) {
            return response.json(userExists);
        }

        const axiosResponse = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = axiosResponse.data;

        const dev = await Dev.create({
            name: name || username,
            user: username,
            bio,
            avatar
        });
        //console.log(axiosResponse.data);
        return response.json(dev);
    }
}