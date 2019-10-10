module.exports = {
 
    create(req, res){

     //get the name from the req params
      let params = req.allParams();
      if(!params.name){
          return res.badRequest({err: 'name is required field'});
      }

      //Create a new record in company 
      Company.create({
           name: params.name,
           city: params.city,
           address: params.address
      }, (err, results)=>{

         if(err){
             return res.serverError(err);
         }
         return res.ok('OK!');

      });



        
    },

    find(req, res){

    },

    findOne(req, res){

    },

    update(req, res){

    },

    delete(req, res){

    }

};