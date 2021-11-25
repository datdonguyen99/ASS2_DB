const db = require("../config/db.config");

exports.getListScientist = async (req, res) => {
  const response = await db.query(
    `SELECT scientist.scientist_id, scientist.first_name, scientist.last_name,
          scientist.address, scientist.publication_role, scientist.occupation,
          scientist.working_agency, scientist.collab_date
      FROM scientist`
  );
  res.status(200).send({
    status: "success",
    data: response.rows,
  });
};

exports.getListScientistByID = async (req, res) => {
  const scientist_id = parseInt(req.params.id);
  const response = await db.query(
    `SELECT scientist.first_name, scientist.last_name,
          scientist.address, scientist.publication_role, scientist.occupation,
          scientist.working_agency, scientist.collab_date
      FROM scientist
      WHERE scientist.scientist_id = $1`,
    [scientist_id]
  );
  res.status(200).send({
    status: "success",
    data: response.rows,
  });
};

exports.getInforReviewer = async (req, res) => {
  const response = await db.query(
    `SELECT scientist.scientist_id, scientist.first_name, scientist.last_name,
          scientist.address, scientist.publication_role, scientist.occupation,
          scientist.working_agency, scientist.collab_date
      FROM scientist
      WHERE scientist.publication_role = 'REVIEWER'`
  );
  res.status(200).send({
    status: "sucess",
    data: response.rows,
  });
};

exports.getInforEditor = async (req, res) => {
  const response = await db.query(
    `SELECT scientist.scientist_id, scientist.first_name, scientist.last_name,
            scientist.address, scientist.publication_role, scientist.occupation,
            scientist.working_agency, scientist.collab_date
        FROM scientist
        WHERE scientist.publication_role = 'EDITOR'`
  );
  res.status(200).send({
    status: "sucess",
    data: response.rows,
  });
};

exports.getInforAuthor = async (req, res) => {
  const response = await db.query(
    `SELECT scientist.scientist_id, scientist.first_name, scientist.last_name,
            scientist.address, scientist.publication_role, scientist.occupation,
            scientist.working_agency, scientist.collab_date
        FROM scientist
        WHERE scientist.publication_role = 'AUTHOR'`
  );
  res.status(200).send({
    status: "sucess",
    data: response.rows,
  });
};

//CREATE SCIENTIST
exports.createScientist = async (req, res) => {
  const {
    first_name,
    last_name,
    address,
    occupation,
    working_agency,
    collab_date,
    publication_role,
  } = req.body;

  const { rows } = await db.query(
    `INSERT INTO scientist(first_name, last_name, address, occupation, working_agency, collab_date, publication_role)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      first_name,
      last_name,
      address,
      occupation,
      working_agency,
      collab_date,
      publication_role,
    ]
  );

  res.status(201).send({
    status: "success",
    body: {
      scientist: {
        first_name,
        last_name,
        address,
        occupation,
        working_agency,
        collab_date,
        publication_role,
      },
    },
  });
};

//UPDATE SCIENTIST
exports.updateScientist = async (req, res) => {
  const scientist_id = parseInt(req.params.id);
  const {
    first_name,
    last_name,
    address,
    occupation,
    working_agency,
    collab_date,
    publication_role,
  } = req.body;

  const response = await db.query(
    `UPDATE scientist
    SET first_name = $1, last_name = $2, address = $3, occupation = $4, working_agency = $5,
        collab_date = $6, publication_role = $7
    WHERE scientist.scientist_id = $8`,
    [
      first_name,
      last_name,
      address,
      occupation,
      working_agency,
      collab_date,
      publication_role,
      scientist_id,
    ]
  );
  // console.log(status, paper_id);
  res.status(200).send({
    status: "success",
    body: response,
  });
};

//DELETE SCIENTIST
exports.deleteScientist = async (req, res) => {
  const scientist_id = parseInt(req.params.id);
  const response = await db.query(
    `DELETE FROM scientist
    WHERE scientist.scientist_id = $1`,
    [scientist_id]
  );
  res.status(200).send({
    status: "delete sucess scientist ID",
    data: scientist_id,
  });
};
