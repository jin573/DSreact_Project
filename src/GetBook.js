import React, { useState, useEffect } from 'react';
import { Box, Stack, TextField, Button } from "@mui/material";

const GetBook = (props) => {
    const [inputItem, getItems] = useState({title: "", author: "", publisher: "", userId: "" }); //초기값
    const searchItem = props.searchItem; //부모에 정의되어있는 searchItems 함수
    const result = props.searchResults;

    useEffect(() => {
        if (result) {
            getItems((prev) => ({
                ...prev,
                author: result.author || "",
                publisher: result.publisher || "",
                userId: result.userId || ""
            }));
        }
    }, [result]);

    //조회 버튼 클릭 시
    const onButtonClick = () => {
        console.log("검색할 title:", inputItem.title);
        searchItem(inputItem);//App.js로 inputItem(title)을 넘겨줘야 한다.
    };

    //title 검색 시
    const onInputChange = (e) => {
        getItems({title: e.target.value});//입력된 값을 저장
        console.log(inputItem);
    };

    return (
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
                        제품 검색{" "}
                        </Button>
                    </Stack>
            
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ minWidth: "80px", textAlign: "left" }}>
                        <h5>author:</h5>
                        </Box>
                        <TextField size="small" name="author" value={inputItem.author}/>
                    </Stack>
            
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ minWidth: "80px", textAlign: "left" }}>
                        <h5>publisher:</h5>
                        </Box>
                        <TextField size="small" name="publisher" value={inputItem.publisher}/>
                    </Stack>
            
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ minWidth: "80px", textAlign: "left" }}>
                        <h5>userId:</h5>
                        </Box>
                        <TextField size="small" name="userId" value={inputItem.userId}/>
                    </Stack>
                </Box>
            </Stack>
    );
}

export default GetBook;