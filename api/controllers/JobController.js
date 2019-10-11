/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `JobController.create()`
   */
  create: async function (req, res) {
    try{
       let {title, desciption, salary, position} = req.allParams();
       if(!title){
         return res.badRequest({err: 'Title is required field'});
       }
       if(!salary){
        return res.badRequest({err: 'Job salary is required field'});
       }

       const jobDetail = await JobDetail.create({
desciption, salary, position

}).fetch();
        
const job = await Job.create({title, jobDetail: jobDetail.id});

return res.ok(job);

    }catch(err){
return res.serverError(err);
    }



  },

  /**
   * `JobController.find()`
   */
  find: async function (req, res) {
    return res.json({
      todo: 'find() is not implemented yet!'
    });
  }

};

