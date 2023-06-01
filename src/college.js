import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function College() {
  const [college, setCollege] = useState([
    {
      aspek_penilaian_1: {
        mahasiswa_1: 1,
        mahasiswa_2: 1,
        mahasiswa_3: 1,
        mahasiswa_4: 1,
        mahasiswa_5: 1,
        mahasiswa_6: 1,
        mahasiswa_7: 1,
        mahasiswa_8: 1,
        mahasiswa_9: 1,
        mahasiswa_10: 1,
      },
    },
    {
      aspek_penilaian_2: {
        mahasiswa_1: 2,
        mahasiswa_2: 2,
        mahasiswa_3: 2,
        mahasiswa_4: 2,
        mahasiswa_5: 2,
        mahasiswa_6: 2,
        mahasiswa_7: 2,
        mahasiswa_8: 2,
        mahasiswa_9: 2,
        mahasiswa_10: 2,
      },
    },
    {
      aspek_penilaian_3: {
        mahasiswa_1: 3,
        mahasiswa_2: 3,
        mahasiswa_3: 3,
        mahasiswa_4: 3,
        mahasiswa_5: 3,
        mahasiswa_6: 3,
        mahasiswa_7: 3,
        mahasiswa_8: 3,
        mahasiswa_9: 3,
        mahasiswa_10: 3,
      },
    },
    {
      aspek_penilaian_4: {
        mahasiswa_1: 4,
        mahasiswa_2: 4,
        mahasiswa_3: 4,
        mahasiswa_4: 4,
        mahasiswa_5: 4,
        mahasiswa_6: 4,
        mahasiswa_7: 4,
        mahasiswa_8: 4,
        mahasiswa_9: 4,
        mahasiswa_10: 4,
      },
    },
  ]);
  const handleChangeValue = (event, index) => {
    const values = [...college];
    const mhs = "mahasiswa_";
    if (event.target.name === "aspek_penilaian_1") {
      values[0].aspek_penilaian_1[mhs.concat(index + 1)] = event.target.value;
    } else if (event.target.name === "aspek_penilaian_2") {
      values[1].aspek_penilaian_2[mhs.concat(index + 1)] = event.target.value;
    } else if (event.target.name === "aspek_penilaian_3") {
      values[2].aspek_penilaian_3[mhs.concat(index + 1)] = event.target.value;
    } else if (event.target.name === "aspek_penilaian_4") {
      values[3].aspek_penilaian_4[mhs.concat(index + 1)] = event.target.value;
    }
    setCollege(values);
  };

  function createData(
    name,
    aspek_penilaian_1,
    aspek_penilaian_2,
    aspek_penilaian_3,
    aspek_penilaian_4
  ) {
    return {
      name,
      aspek_penilaian_1,
      aspek_penilaian_2,
      aspek_penilaian_3,
      aspek_penilaian_4,
    };
  }

  const rows = [
    createData(
      "Mahasiswa 1",
      college[0].aspek_penilaian_1.mahasiswa_1,
      college[1].aspek_penilaian_2.mahasiswa_1,
      college[2].aspek_penilaian_3.mahasiswa_1,
      college[3].aspek_penilaian_4.mahasiswa_1
    ),
    createData(
      "Mahasiswa 2",
      college[0].aspek_penilaian_1.mahasiswa_2,
      college[1].aspek_penilaian_2.mahasiswa_2,
      college[2].aspek_penilaian_3.mahasiswa_2,
      college[3].aspek_penilaian_4.mahasiswa_2
    ),
    createData(
      "Mahasiswa 3",
      college[0].aspek_penilaian_1.mahasiswa_3,
      college[1].aspek_penilaian_2.mahasiswa_3,
      college[2].aspek_penilaian_3.mahasiswa_3,
      college[3].aspek_penilaian_4.mahasiswa_3
    ),
    createData(
      "Mahasiswa 4",
      college[0].aspek_penilaian_1.mahasiswa_4,
      college[1].aspek_penilaian_2.mahasiswa_4,
      college[2].aspek_penilaian_3.mahasiswa_4,
      college[3].aspek_penilaian_4.mahasiswa_4
    ),
    createData(
      "Mahasiswa 5",
      college[0].aspek_penilaian_1.mahasiswa_5,
      college[1].aspek_penilaian_2.mahasiswa_5,
      college[2].aspek_penilaian_3.mahasiswa_5,
      college[3].aspek_penilaian_4.mahasiswa_5
    ),
    createData(
      "Mahasiswa 6",
      college[0].aspek_penilaian_1.mahasiswa_6,
      college[1].aspek_penilaian_2.mahasiswa_6,
      college[2].aspek_penilaian_3.mahasiswa_6,
      college[3].aspek_penilaian_4.mahasiswa_6
    ),
    createData(
      "Mahasiswa 7",
      college[0].aspek_penilaian_1.mahasiswa_7,
      college[1].aspek_penilaian_2.mahasiswa_7,
      college[2].aspek_penilaian_3.mahasiswa_7,
      college[3].aspek_penilaian_4.mahasiswa_7
    ),
    createData(
      "Mahasiswa 8",
      college[0].aspek_penilaian_1.mahasiswa_8,
      college[1].aspek_penilaian_2.mahasiswa_8,
      college[2].aspek_penilaian_3.mahasiswa_8,
      college[3].aspek_penilaian_4.mahasiswa_8
    ),
    createData(
      "Mahasiswa 9",
      college[0].aspek_penilaian_1.mahasiswa_9,
      college[1].aspek_penilaian_2.mahasiswa_9,
      college[2].aspek_penilaian_3.mahasiswa_9,
      college[3].aspek_penilaian_4.mahasiswa_9
    ),
    createData(
      "Mahasiswa 10",
      college[0].aspek_penilaian_1.mahasiswa_10,
      college[1].aspek_penilaian_2.mahasiswa_10,
      college[2].aspek_penilaian_3.mahasiswa_10,
      college[3].aspek_penilaian_4.mahasiswa_10
    ),
  ];

  return (
    <TableContainer
      sx={{ width: 650, marginTop: "20px", marginX: "auto" }}
      component={Paper}
    >
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" sx={{ width: "100px" }}>
              Aspek Penilaian 1
            </TableCell>
            <TableCell align="center" sx={{ width: "100px" }}>
              Aspek Penilaian 2
            </TableCell>
            <TableCell align="center" sx={{ width: "100px" }}>
              Aspek Penilaian 3
            </TableCell>
            <TableCell align="center" sx={{ width: "100px" }}>
              Aspek Penilaian 4
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Nilai</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Nilai"
                    value={item.aspek_penilaian_1}
                    name="aspek_penilaian_1"
                    onChange={(e) => handleChangeValue(e, index)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Nilai</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Nilai"
                    value={item.aspek_penilaian_2}
                    name="aspek_penilaian_2"
                    onChange={(e) => handleChangeValue(e, index)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Nilai</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Nilai"
                    value={item.aspek_penilaian_3}
                    name="aspek_penilaian_3"
                    onChange={(e) => handleChangeValue(e, index)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Nilai</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Nilai"
                    value={item.aspek_penilaian_4}
                    name="aspek_penilaian_4"
                    onChange={(e) => handleChangeValue(e, index)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        onClick={() => console.log(college)}
        sx={{ float: "right", margin: 2 }}
        variant="contained"
      >
        Simpan
      </Button>
    </TableContainer>
  );
}
