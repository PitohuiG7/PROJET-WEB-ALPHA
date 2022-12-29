const {Sequelize,DataTypes} = require("sequelize");

//definition des informations sur ma base de données
const sequelize = new Sequelize(
    'progwebserveur',
    'root',
    '',
    {
    	host:'localhost',
    	dialect:'mysql'
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
  
 	},

  photoProfil : {
    type : DataTypes.STRING(100),
    allowNull : true,
  }
 })

 sequelize.sync().then(()=>{
 	console.log('Users table created successfully');
 }).catch((error)=>{
 	console.error('Unable to create table : ',error);
 })

module.exports = users;