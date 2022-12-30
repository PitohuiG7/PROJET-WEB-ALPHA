const {Sequelize,DataTypes} = require("sequelize");

//definition des informations sur ma base de données
const sequelize = new Sequelize(
<<<<<<< HEAD
    'projetrainbowsixesl',
    'root',
    'root',
    {
    	host:'localhost',
    	dialect:'mysql',
			define: {
        timestamps: false
    }
=======
    'progwebserveur',
    'root',
    '',
    {
    	host:'localhost',
    	dialect:'mysql'
>>>>>>> 694fc29adb7e43c473e7bef14a09edb1279f830c
    }
	);
//verification de la connexion avec la base de données
  sequelize.authenticate().then(()=>{
	console.log('Connection has been established successfully');

}).catch((error)=>{
	console.log('Unable to connect to the database: ',error);
});

<<<<<<< HEAD
//création de ma table dans ma base de données
=======
//création de ma table users dans ma base de données
>>>>>>> 694fc29adb7e43c473e7bef14a09edb1279f830c
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
  
<<<<<<< HEAD
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


=======
 	},

  photoProfil : {
    type : DataTypes.STRING(100),
    allowNull : true,
  },

  isBan : {
    type : DataTypes.BOOLEAN,
	defaultValue : false,
    allowNull : false,
  }
 })
>>>>>>> 694fc29adb7e43c473e7bef14a09edb1279f830c

 sequelize.sync().then(()=>{
 	console.log('Users table created successfully');
 }).catch((error)=>{
 	console.error('Unable to create table : ',error);
 })

<<<<<<< HEAD
module.exports = users;
module.exports = operateur;
=======
module.exports = users;
>>>>>>> 694fc29adb7e43c473e7bef14a09edb1279f830c
