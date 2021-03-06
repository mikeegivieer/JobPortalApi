module.exports = {
 
    async create(req, res){
      try{
      //get the name from the req params
      let params = req.allParams();
      if(!params.name){
          return res.badRequest({err: 'Name is required field'});
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
           const companies = await Company.find()
           .populate('jobs');
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

    async update(req, res){
         try{
             let params = req.allParams();
             let attributes ={};

             if(params.name){
                 attributes.name = params.name;
             }

             if(params.city){
                 attributes.city = params.city;
             }

             if(params.address){
                 attributes.address = params.address;
             }

             const results = await Company.update({id: req.params.id}, attributes);
             return res.ok(results);
             
         }catch(err){
             return res.serveError(err);
         }
    },

   async delete(req, res){

     try{
        const results = await Company.destroy({
            id: req.params.id
        });

        return res.ok(results);

     }catch (err){
         res.serveError(err);
     }

    }

};