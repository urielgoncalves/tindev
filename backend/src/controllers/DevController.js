const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        //Retornar apenas devs que o dev logado não iteragiu
        const { user } = request.headers;
        const loggedDev = await Dev.findById(user);
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        });
        return response.json(users);
    },
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
};