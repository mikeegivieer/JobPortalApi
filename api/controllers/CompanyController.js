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
      })
        
        .then(results => {
            return res.ok(results);
        })
        .catch(err => {
            return res.serverError(err);
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