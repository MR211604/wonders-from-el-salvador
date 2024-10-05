import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class place extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    min_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    max_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'place',
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
    ]
  });
  }
}
