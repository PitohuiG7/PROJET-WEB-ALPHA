const {Sequelize,DataTypes} = require("sequelize");

//definition des informations sur ma base de données
const sequelize = new Sequelize(
    'projetrainbowsixesl',
    'root',
    'root',
    {
    	host:'localhost',
    	dialect:'mysql',
			define: {
        timestamps: false
    }
    }
	);
//verification de la connexion avec la base de données
  sequelize.authenticate().then(()=>{
	console.log('Connection has been established successfully');

}).catch((error)=>{
	console.log('Unable to connect to the database: ',error);
});

//création de ma table dans ma base de données
 const users = sequelize.define('users',{
 	idUSer:{
 		type: DataTypes.INTEGER,
 		 autoIncrement:true,
 		 primaryKey:true,
 		 allowNull:false,
 	},
 	email:{
 		type : DataTypes.STRING(45),
 		allowNull:false,
 		primaryKey:true
 	},
 	pseudo:{
 		type : DataTypes.STRING(45),
 		allowNull:false,
 		primaryKey:true
 	},
 	name:{
 		type : DataTypes.STRING(45),
 		allowNull:false,
 		
 	},
 	lastName:{
 			type : DataTypes.STRING(45),
 		allowNull:false,
 	},
 	password:{
 			type : DataTypes.STRING(45),
 		allowNull:false,
 	},
 	isAdmin:{
 		type:DataTypes.TINYINT,
  
 	}
 })

 const operateur = sequelize.define('operateur',{
	ID:{
		type: DataTypes.INTEGER,
		 autoIncrement:true,
		 primaryKey:true,
		 allowNull:false,
	},
	Nom:{
		type : DataTypes.STRING(45),
		allowNull:false
	},
	Atk_Def:{
		type : DataTypes.BOOLEAN,
		allowNull:false
	},
	Competence:{
		type: DataTypes.INTEGER,
		allowNull:false,
		
	},
	Description:{
		type : DataTypes.STRING(2000),
		allowNull:false,
	},
	Pays:{
		type: DataTypes.INTEGER,
		allowNull:false,
	},
	Protection:{
		type: DataTypes.INTEGER,
		allowNull:false,
	},
	Vitesse:{
		type: DataTypes.INTEGER,
		allowNull:false,
	},
	Gadget:{
		type: DataTypes.INTEGER,
		allowNull:false,
	},
	OpPhoto:{
		type : DataTypes.STRING(200),
 
	},
	OpLogo:{
		type : DataTypes.STRING(200),
 
	},
	Armes:{
		type : DataTypes.STRING(200),
	}
})



 sequelize.sync().then(()=>{
 	console.log('Users table created successfully');
 }).catch((error)=>{
 	console.error('Unable to create table : ',error);
 })

module.exports = users;
module.exports = operateur;