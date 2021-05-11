const todo = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        'todo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            description: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: true,
            freezeTableName: true,
        }
    );
    Todo.sync();
    return Todo;
};

export default todo;