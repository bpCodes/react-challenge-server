import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Query: {
    allComments: requiresAuth.createResolver(
      async (parent, args, { models, user }) => models.Comment.findAll(
        { where: { owner: user.id } },
        { raw: true },
      ),
    ),
  },
  Mutation: {
    removeComment: async (parent, { id }, { models }) => {
      try {
        await models.Comment.destroy({ where: { id } });
        return {
          ok: true,
        };
      } catch (err) {
        // console.log(err);
      }
    },
    createComment: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        try {
          const comment = await models.Comment.create({ ...args, owner: user.id });
          return {
            ok: true,
            comment,
          };
        } catch (err) {
          // console.log(err);
          return {
            ok: false,
            errors: formatErrors(err),
          };
        }
      },
    ),
    updateComment: async (parent, { id, name }, { models }) => {
      try {
        const comment = await models.Comment.update({ name }, { where: { id } });
        return {
          ok: true,
          comment,
        };
      } catch (err) {
        // console.log(err);
        return {
          ok: false,
          errors: formatErrors(err),
        };
      }
    },
  },
};
