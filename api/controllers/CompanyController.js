module.exports = {
 
    async create(req, res){
      try{
      //get the name from the req params
      let params = req.allParams();
      if(!params.name){
          return res.badRequest({err: 'name is required field'});
      }

      //Create a new record in company 
      const results = await Company.create({
           name: params.name,
           city: params.city,
           address: params.address
      });

      return res.ok(results);
    }catch(err){
      return res.serveError(err);
    }
                
    },

    async find(req, res){
       try{
           const companies = await Company.find();
           return res.ok(companies);
       }catch (err){
          return res.serveError(err);
       }
    },

    async findOne(req, res){
      try{
         const company = await Company.findOne({
            id: req.params.id
         });

         return res.ok(company);

      }catch(err){
          return res.serveError(err)
      }


    },

    update(req, res){

    },

    delete(req, res){

    }

};