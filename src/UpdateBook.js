import React, { useState, useEffect } from 'react';
import { Box, Stack, TextField, Button } from "@mui/material";

const UpdateBook = (props) => {
const [inputItem, setInputItem] = useState({title: "", author: "", publisher: "", userId: "" }); //초기값
    const searchItem = props.updateToGetItem; //부모에 정의되어있는 searchItems 함수
    const result = props.searchResults;
    const updateItem = props.searchItem;

    useEffect(() => {
        if (result) {
            setInputItem((prev) => ({
                ...prev,
                id: result.id,
                title: result.title || "",
                author: result.author || "",
                publisher: result.publisher || "",
                userId: result.userId || ""
            }));
        }
    }, [result]);

    //조회 버튼 클릭 시
    const onButtonClick = (e) => {
        if(e.target.name === "search"){
            searchItem(inputItem);//App.js로 inputItem(title)을 넘겨줘야 한다.
        } else if(e.target.name === "update"){
            console.log("수정 요청:", inputItem);
            updateItem(inputItem);
        }
        
    };

    //title 검색 시
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInputItem((prev) => ({
        ...prev,
        [name]: value
    }));
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
                        <Button size="small" variant="contained" onClick={onButtonClick} name="search"> 
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
                        <Button size="small" variant="contained" onClick={onButtonClick} name="update"> 
                        {" "}
                        제품 수정{" "}
                        </Button>
                    </Stack>
                </Box>
            </Stack>
    );
}

export default UpdateBook;