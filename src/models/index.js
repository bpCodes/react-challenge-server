import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.TEST_DB || 'reactchallenge', 'postgres', 'postgres', {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    underscored: true,
  },
});

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
