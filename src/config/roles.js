const allRoles = {
  user: ['postComments', 'rateGame', 'getOwnRating'],
  admin: ['postComments', 'rateGame', 'getOwnRating', 'getUsers', 'manageUsers', 'addGame'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
