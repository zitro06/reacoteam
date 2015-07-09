/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		username:{
        type:'string',
        required:true
      } ,
      password: {
        type:'string',
        required:true
      },
      passwordChangeDate:{
           type:'datetime' 
      },
      isActive:{
        type:'boolean',
        required:true
      },
      email:{
         type: 'email'
       },
      ldcFolio:{
          type:'integer'

      }
  		
  }
};

