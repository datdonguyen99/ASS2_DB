import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AirplayIcon from "@material-ui/icons/Airplay";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";
import axios from "axios";

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
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

export default function Users() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    UsersGet();
  }, []);

  const UsersGet = () => {
    axios
      .get("https://ass2-db.herokuapp.com/api/scientist")
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        setUsers(result.data);
      });
  };

  const UsersGetReviewer = () => {
    axios
      .get("https://ass2-db.herokuapp.com/api/scientist/reviewer")
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        setUsers(result.data);
      });
  };

  const UsersGetEditor = () => {
    axios
      .get("https://ass2-db.herokuapp.com/api/scientist/editor")
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        setUsers(result.data);
      });
  };

  const UsersGetAuthor = () => {
    axios
      .get("https://ass2-db.herokuapp.com/api/scientist/author")
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        setUsers(result.data);
      });
  };

  const UpdateUser = (id) => {
    console.log(id);
    window.location = "/update/" + id;
  };

  const UserDelete = (id) => {
    axios
      .delete("https://ass2-db.herokuapp.com/api/scientist/delete/" + id)
      .then((res) => res.data)
      .then((result) => {
        alert(
          "Delete " + result.status + "scientist_ID: " + result.scientist_id
        );
        if (result.status === "success") {
          UsersGet();
        }
      });
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setRole(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex" sx={{ justifyContent: "space-between" }}>
            <Box display="flex" sx={{ justifyContent: "flex-start" }}>
              <Box p={1}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  SCIENTISTS IS
                </Typography>
              </Box>
              <Box display="flex">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleOnChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"EDITOR"}>EDITOR</MenuItem>
                    <MenuItem value={"REVIEWER"}>REVIEWER</MenuItem>
                    <MenuItem value={"AUTHOR"}>AUTHOR</MenuItem>
                  </Select>
                </FormControl>
                <IconButton
                  aria-label="search"
                  onClick={() => {
                    if (role === "REVIEWER") {
                      UsersGetReviewer();
                    } else if (role === "EDITOR") {
                      UsersGetEditor();
                    } else if (role === "AUTHOR") {
                      UsersGetAuthor();
                    } else {
                      UsersGet();
                    }
                  }}
                >
                  <SearchOutlined />
                </IconButton>
              </Box>
            </Box>
            <Box p={1} display="flex">
              <Box p={1}>
                <Link to="/create">
                  <IconButton color="primary" aria-label="add">
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Link>
              </Box>
              <Box p={1}>
                <Link to="/viewApi">
                  <IconButton color="primary" aria-label="add">
                    <AirplayIcon />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Box>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <h4>Scientist ID</h4>
                  </TableCell>
                  <TableCell align="center">
                    <h4>Avatar</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>First name</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Last name</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Address</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Role</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Ocupation</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Working Agency</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Collab date</h4>
                  </TableCell>
                  <TableCell align="center">
                    <h4>Action</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <StyledTableRow key={user.scientist_id}>
                    <TableCell>{user.scientist_id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <Avatar src={user.avatar} />
                      </Box>
                    </TableCell>
                    <TableCell align="left">{user.first_name}</TableCell>
                    <TableCell align="left">{user.last_name}</TableCell>
                    <TableCell align="left">{user.address}</TableCell>
                    <TableCell align="left">{user.publication_role}</TableCell>
                    <TableCell align="left">{user.occupation}</TableCell>
                    <TableCell align="left">{user.working_agency}</TableCell>
                    <TableCell align="left">{user.collab_date}</TableCell>
                    <TableCell align="center">
                      <Box display="flex">
                        <IconButton
                          aria-label="edit"
                          style={{ color: "#ffa733" }}
                          onClick={() => {
                            UpdateUser(user.scientist_id);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          color="secondary"
                          onClick={() => UserDelete(user.scientist_id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}
