import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment, Box } from "@mui/material";
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton,
} from "@mui/x-data-grid";
// import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch}) => {
    return (
        <>
            <GridToolbarContainer>
                <Box width="100%" sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box display="flex" justifyContent="space-between">
                        <GridToolbarColumnsButton />
                        <GridToolbarDensitySelector />
                        <GridToolbarExport />
                    </Box>
                    <TextField
                        label="Search..."
                        sx={{ mb: "0.5rem", width: "15rem" }}
                        onChange={(e) => {setSearchInput(e.target.value);setSearch(searchInput);}}
                        value={searchInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => {setSearch(searchInput);}}>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </GridToolbarContainer>
        </>
    )
}

export default DataGridCustomToolbar