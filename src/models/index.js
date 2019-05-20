import Sequelize from 'sequelize';

require('dotenv').config();
 
const sequelize = new Sequelize(
  "reactTest",
  "reactchallenge99",
  "nSq[:Bs*(6Qc",
  {
    dialect: "postgres",
    protocol: "postgres",
    host: "reactchallenge.cir50xfieur0.us-east-2.rds.amazonaws.com",
    operatorsAliases: Sequelize.Op,
    define: {
      underscored: true
    }
  }
);

const models = {
  User: sequelize.import('./user'),
  Comment: sequelize.import('./comment'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
