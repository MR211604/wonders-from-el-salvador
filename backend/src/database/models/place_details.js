import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class place_details extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'place',
        key: 'id'
      }
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    best_time: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    where_to_stay: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    where_to_eat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    safety_tips: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'place_details',
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
        name: "place_id",
        using: "BTREE",
        fields: [
          { name: "place_id" },
        ]
      },
    ]
  });
  }
}
