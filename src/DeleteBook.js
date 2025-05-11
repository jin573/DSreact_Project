import React, { useState, useEffect } from 'react';
import { Box, Stack, TextField, Button } from "@mui/material";

const DeleteBook = (props) => {
    const [inputItem, setInputItem] = useState({id:"", title: "", author: "", publisher: "", userId: "" });
    const deleteItem = props.deleteItem;

//조회 버튼 클릭 시
    const onButtonClick = (e) => {
        console.log("삭제 버튼 클릭", inputItem);
        
        deleteItem(inputItem);
    };

    //title 검색 시
    const onInputChange = (e) => {
        setInputItem({title: e.target.value});
        console.log(inputItem);
    };
    return(
        <Stack direction="column" spacing={2} alignItems="center">
            <Box sx={{ width: 500 }}>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <Box sx={{ minWidth: "80px", textAlign: "left" }}>
                    <h5>title:</h5>
                    </Box>
                    <TextField size="small" name="title" onChange={onInputChange} value={inputItem.title}/>
                    <Button size="small" variant="contained" onClick={onButtonClick}> 
                    {" "}
                    제품 삭제{" "}
                    </Button>
                </Stack>
            </Box>
        </Stack>

    );
}

export default DeleteBook;