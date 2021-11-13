const db = require("../config/db.config");

//---------- CREATE NEW PAPER-------------
exports.createPaper = async (req, res) => {
  const {
    paper_id,
    title,
    category,
    summary,
    paper_file,
    total_page,
    keywords,
    // ISBN,
    status,
    journal_paper_code,
    // DOI,
    publish_type,
  } = req.body;

  const { rows } = await db.query(
    `INSERT INTO paper (paper_id, title, category, summary, paper_file, total_page, keywords, status, journal_paper_code, publish_type)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [
      paper_id,
      title,
      category,
      summary,
      paper_file,
      total_page,
      keywords,
      //   ISBN,
      status,
      journal_paper_code,
      //   DOI,
      publish_type,
    ]
  );

  res.status(201).send({
    message: "Paper added successfully!",
    body: {
      paper: {
        paper_id,
        title,
        category,
        summary,
        paper_file,
        total_page,
        keywords,
        // ISBN,
        status,
        journal_paper_code,
        // DOI,
        publish_type,
      },
    },
  });
};

//----------UPDATE PERSONAL INFORMATION OF REVIEWER----------
exports.updateInfoReviewer = async (req, res) => {
  const reviewer_id = parseInt(req.params.id);
  const {
    first_name,
    last_name,
    address,
    occupation,
    working_agency,
    collab_date,
  } = req.body;

  const response = await db.query(
    `UPDATE scientist
    SET first_name = $1, last_name = $2, address = $3, occupation = $4, working_agency = $5, collab_date = $6
    WHERE publication_role = 'REVIEWER'
    AND scientist_id = $7`,
    [
      first_name,
      last_name,
      address,
      occupation,
      working_agency,
      collab_date,
      reviewer_id,
    ]
  );

  res.status(200).send({
    message: "Reviewer infor updated successfully!",
    body: response,
  });
};

//--------UPDATE STATUS(REVIEWER) PAPER----------
exports.updatePaperByID = async (req, res) => {
  const paper_id = parseInt(req.params.id);
  const { status } = req.body;

  const response = await db.query(
    `UPDATE paper
    SET status = $1
    WHERE paper_id = $2`,
    [status, paper_id]
  );
  // console.log(status, paper_id);
  res.status(200).send({
    message: "Paper status updated Successfully!",
    body: response,
  });
};

//-----GET LIST OF PAPER(RESEARCH, GENERAL, REVIEW)----------

exports.listAllPaper = async (req, res) => {
  const response = await db.query(`SELECT * FROM paper`);
  res.status(200).send(response.rows);
  // res.status(200).json({message: response.rows });
};

exports.listResearchPaper = async (req, res) => {
  const response = await db.query(
    `SELECT *
    FROM paper
    WHERE category='RESEARCH'
    AND status='REVIEWING'`
  );
  res.status(200).send(response.rows);
};

exports.listGeneralPaper = async (req, res) => {
  const response = await db.query(
    `SELECT *
    FROM paper
    WHERE category='GENERAL'
    AND status='REVIEWING'`
  );
  res.status(200).send(response.rows);
};

exports.listReviewPaper = async (req, res) => {
  const response = await db.query(
    `SELECT *
    FROM paper
    WHERE category='REVIEW_BOOK'
    AND status='REVIEWING'`
  );
  res.status(200).send(response.rows);
};

//-------GET LIST GENERAL PAPER THAT REVIEWED IN LAST 3 YEARS--------
exports.getListReviewed3Year = async (req, res) => {
  // const today = new Date()
  const response = await db.query(
    `SELECT paper.paper_id, paper.title, paper.category, paper.summary, paper.paper_file,
    paper.total_page, paper.keywords, paper."ISBN", paper.status, paper.journal_paper_code,
    paper."DOI", paper.publish_type
   FROM (paper
    INNER JOIN book_attachment
    ON paper."ISBN" = book_attachment."ISBN"
    AND year_publish >= 2018)
    WHERE category='GENERAL'
    AND status='REVIEWED'`
  );
  res.status(200).send(response.rows);
};

//---------GET LIST PAPER OF AUTHOR THAT IS REVIEWING--------------
exports.getListAuthReviewing = async (req, res) => {
  const response = await db.query(
    `SELECT paper.paper_id, paper.title, paper.status, paper."ISBN", book_attachment.author_name
      FROM (paper
        INNER JOIN book_attachment
        ON paper."ISBN" = book_attachment."ISBN"
        AND paper.status = 'REVIEWING'
      )`
  );
  res.status(200).send(response.rows);
};
