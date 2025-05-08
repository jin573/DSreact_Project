import React, { useState } from 'react';
import { Box, Stack, TextField, Button } from "@mui/material";

const AddBook = (props) => {
    const [inputItem, setItem] = useState({title: "", author: "", publisher: "", userId: "" });
    const addItem = props.addItem; // props로 addItem 가져옴

    const onButtonClick = () => {
        addItem(inputItem);
        setItem({title: "", author: "", publisher: "", userId: ""});
    }

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setItem((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(inputItem);
    };


    return (
    <Stack direction="column" spacing={2} alignItems="center">
        <Box sx={{ width: 500 }}>
        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>title:</h5>
            </Box>
            <TextField size="small" name="title" onChange={onInputChange} value={inputItem.title}/>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>author:</h5>
            </Box>
            <TextField size="small" name="author" onChange={onInputChange} value={inputItem.author}/>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>publisher:</h5>
            </Box>
            <TextField size="small" name="publisher" onChange={onInputChange} value={inputItem.publisher}/>
        </Stack>

        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="flex-start"
        >
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>userId:</h5>
            </Box>
            <TextField size="small" name="userId" onChange={onInputChange} value={inputItem.userId}/>
            <Button size="small" variant="contained" onClick={onButtonClick}> 
            {" "}
            제품 추가{" "}
            </Button>
        </Stack>
    </Box>
    </Stack>
    );
};

export default AddBook;
