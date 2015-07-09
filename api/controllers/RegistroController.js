/**
 * RegistroController
 *
 * @description :: Server-side logic for managing registroes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getDatosAll: function(req,res){
       var name = "jaime";  
	  console.log("consulta amiguito");
      
      User.find().exec(function(err,user){
                console.log ("usuer recuperado"+user);
                
                 if(err) {
                   console.log(err);
                   return;
                 }
                
                return res.json(user);



        });

	}
	
};

