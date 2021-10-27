import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import PokemonTypes from "../Models/PokemonTypes";

function TypeTable() {
  return (
    <div className="pokemon-table">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Strong Against</TableCell>
              <TableCell>Weak Against</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(PokemonTypes).map((type) => (
              <TableRow
                key={type}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{type}</TableCell>
                <TableCell>{PokemonTypes[type.toString()]["Strong"]}</TableCell>
                <TableCell>{PokemonTypes[type.toString()]["Weak"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TypeTable;
