import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#e3f0d3",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ViewAPI() {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Paper className={classes.paper}>
        <Box display="flex" sx={{ justifyContent: "space-between" }}>
          <Typography component="h2" variant="h6" color="primary">
            List API
          </Typography>
        </Box>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <h2>Function</h2>
                </TableCell>
                <TableCell align="center">
                  <h2>Link Api</h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <TableCell align="center">GET all scientist</TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist">
                    https://ass2-db.herokuapp.com/api/scientist
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">GET all scientist by ID</TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/all/:id">
                    https://ass2-db.herokuapp.com/api/scientist/all/:id
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  GET scientist who is REVIEWER
                </TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/reviewer">
                    https://ass2-db.herokuapp.com/api/scientist/reviewer
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  GET scientist who is EDITOR
                </TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/editor">
                    https://ass2-db.herokuapp.com/api/scientist/editor
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  GET scientist who is AUTHOR
                </TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/author">
                    https://ass2-db.herokuapp.com/api/scientist/author
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">CREATE scientist</TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/create">
                    https://ass2-db.herokuapp.com/api/scientist/create
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">UPDATE scientist by ID</TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/update/:id">
                    https://ass2-db.herokuapp.com/api/scientist/update/:id
                  </a>
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">DELETE scientist by ID</TableCell>
                <TableCell align="center">
                  <a href="https://ass2-db.herokuapp.com/api/scientist/delete/:id">
                    https://ass2-db.herokuapp.com/api/scientist/delete/:id
                  </a>
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
