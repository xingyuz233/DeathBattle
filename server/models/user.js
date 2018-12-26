const db = require('../config/db')
const Sequelize = db.sequelize
const User = Sequelize.import('../schema/user.js')

User.sync({force: false});

class UserModel {
    /**
     * 创建用户
     * @param user
     * @returns {Promise<boolean>}
     */
    static async create(user) {
        let {username, password} = user;

        await User.create({
            email,
            username,
            password
        })
        return true
    }

    /**
     * 删除用户
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await User.destroy({
            where: {
                id,
            }
        })
        return true
    }

    /**
     * 查询用户列表
     * @returns {Promise<*>}
     */
    static async findAllUserList() {
        return await User.findAll({
            attributes: ['id', 'email']
        })
    }

    /**
     * 查询用户信息
     * @param email  
     * @returns {Promise.<*>}
     */
    static async findUserByEmail(email) {
        return await User.findOne({
            where: {
                email
            }
        })
    }
}

module.exports = UserModel