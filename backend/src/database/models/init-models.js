import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _comment from "./comment.js";
import _place from "./place.js";
import _place_category from "./place_category.js";
import _place_category_assignment from "./place_category_assignment.js";
import _place_details from "./place_details.js";
import _place_interaction from "./place_interaction.js";
import _user from "./user.js";
import _user_place_interaction from "./user_place_interaction.js";
import _user_rating from './user_rating.js'

export default function initModels(sequelize) {
  const comment = _comment.init(sequelize, DataTypes);
  const place = _place.init(sequelize, DataTypes);
  const place_category = _place_category.init(sequelize, DataTypes);
  const place_category_assignment = _place_category_assignment.init(sequelize, DataTypes);
  const place_details = _place_details.init(sequelize, DataTypes);
  const place_interaction = _place_interaction.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);
  const user_place_interaction = _user_place_interaction.init(sequelize, DataTypes);
  const user_rating = _user_rating.init(sequelize, DataTypes);

  comment.belongsTo(place, { as: "place", foreignKey: "place_id" });
  place.hasMany(comment, { as: "comments", foreignKey: "place_id" });
  place_category_assignment.belongsTo(place, { as: "place", foreignKey: "place_id" });
  place.hasMany(place_category_assignment, { as: "place_category_assignments", foreignKey: "place_id" });
  place_details.belongsTo(place, { as: "place", foreignKey: "place_id" });
  place.hasMany(place_details, { as: "place_details", foreignKey: "place_id" });
  user_place_interaction.belongsTo(place, { as: "place", foreignKey: "place_id" });
  place.hasMany(user_place_interaction, { as: "user_place_interactions", foreignKey: "place_id" });
  place_category_assignment.belongsTo(place_category, { as: "category", foreignKey: "category_id" });
  place_category.hasMany(place_category_assignment, { as: "place_category_assignments", foreignKey: "category_id" });
  user_place_interaction.belongsTo(place_interaction, { as: "interaction_type", foreignKey: "interaction_type_id" });
  place_interaction.hasMany(user_place_interaction, { as: "user_place_interactions", foreignKey: "interaction_type_id" });
  comment.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(comment, { as: "comments", foreignKey: "user_id" });
  user_place_interaction.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(user_place_interaction, { as: "user_place_interactions", foreignKey: "user_id" });
  user_rating.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(user_rating, { as: "user_ratings", foreignKey: "user_id" });
  user_rating.belongsTo(place, { as: "place", foreignKey: "place_id" });
  place.hasMany(user_rating, { as: "user_ratings", foreignKey: "place_id" });


  return {
    comment,
    place,
    place_category,
    place_category_assignment,
    place_details,
    place_interaction,
    user,
    user_place_interaction,
    user_rating
  };
}
