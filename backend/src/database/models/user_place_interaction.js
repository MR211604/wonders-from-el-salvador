import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_place_interaction extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'place',
        key: 'id'
      }
    },
    added_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    interaction_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'place_interaction',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_place_interaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "place_id",
        using: "BTREE",
        fields: [
          { name: "place_id" },
        ]
      },
      {
        name: "interaction_type_id",
        using: "BTREE",
        fields: [
          { name: "interaction_type_id" },
        ]
      },
    ]
  });
  }
}
