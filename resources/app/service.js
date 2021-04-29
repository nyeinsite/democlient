const USER_API_ENDPOINT = 'http://localhost:8080/user'

const UserService = {
    saveUser: async (user) => await axios.post(`${USER_API_ENDPOINT}/POST`, user),

    getUsers: async () => await axios.get(`${USER_API_ENDPOINT}/GET/all`),

    getUsersByRole: async (useroleid) => await axios.get(`${USER_API_ENDPOINT}/GET/useroleid/${useroleid}`),

    getUser: async (type, value) => await axios.get(`${USER_API_ENDPOINT}/${type}/${value}`),

    updateUser: async (id, user) => await axios.put(`${USER_API_ENDPOINT}/PUT/id/${id}`, user),

    deleteUser: async (id) => await axios.delete(`${USER_API_ENDPOINT}/DELETE/id/${id}`),
}
export { UserService }