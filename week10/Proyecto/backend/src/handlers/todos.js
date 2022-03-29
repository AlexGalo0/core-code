const { response } = require("express");
const { Router } = require("express");
const { getDBHandler, initializeDB } = require("../lib/db");

const RequestHandler = Router();

RequestHandler.post("/to-dos", async (request, response) => {
  try {
    const dbHandler = await getDBHandler();

    const { title, description, isDone: is_done } = request.body;

    const creationInfo = await dbHandler.run(`
        INSERT INTO todos (title,description,is_done)
         VALUES (
            "${title}",
            "${description}",
            "${is_done}"
        )
      `);
    dbHandler.close();
    response.send({
      todoAdded: {
        title,
        description,
        is_done,
      },
      creationInfo,
    });
  } catch (error) {
    response.status(500).send({
      errorMessage: "Error unexpected in POST",
      errordetails: error,
    });
  }
}); //Make a db change

RequestHandler.get("/to-dos", async (request, response,next) => {
  try {
    const dbHandler = await getDBHandler();
    const todos = await dbHandler.all(`
    SELECT * from TODOS
    `);
    if(!todos) {
      response.status(404).send({message:'Todos not Found'})
      next() ;  //Si pasa esto , no necesito ejecutes el resto
    }
    dbHandler.close();
    response.send(todos)
  } catch (error) {
    response.status(500).send({
      errorMessage: "Error unexpected in GET",
      errordetails: error,
    });
  }
});


RequestHandler.delete("/to-dos/:id",async (request,response)=>{
  try {
    const dbHandler = await getDBHandler();
    const todoID = request.params.id;
    const deleteTodo = await dbHandler.all(`
      DELETE FROM todos WHERE ID = ?` ,
      todoID)

    dbHandler.close() ; 
    response.send(deleteTodo) 
  } catch (error) {
    response.status(500).send({
      errorMessage: "Error unexpected in DELETE",
      errordetails: error,
    });
  }
})

RequestHandler.patch("/to-dos/:id",async (request,response) =>{
  try {
      const dbHandler= await getDBHandler() ; 
      const todoID = request.params.id;
      const {title,description,is_done} = request.body ;

      const updateInfo =await dbHandler.run(`
        UPDATE todos SET title = '${title}' , description = '${description}',is_done='${is_done}' where id  = '${todoID}'` 
      )
      dbHandler.close()
      response.send(updateInfo)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      errorMessage: "Error unexpected in PATCH",
      errordetails: error,
    });
  
  }
})



module.exports = { RequestHandler };
