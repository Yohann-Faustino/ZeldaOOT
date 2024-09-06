import { Sequelize } from "sequelize"; // ORM (Object-Relational Mapping) qui simplifie les interactions avec la bdd sans écrire de requêtes SQL
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false
});

export default sequelize;
