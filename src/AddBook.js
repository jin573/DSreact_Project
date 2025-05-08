import { Box, Stack, TextField, Button } from "@mui/material";

const AddBook = (props) => {
    return (
    <Stack direction="column" spacing={2} alignItems="center">
        <Box sx={{ width: 500 }}>
        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>title:</h5>
            </Box>
            <TextField size="small" />
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>author:</h5>
            </Box>
            <TextField size="small" />
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ minWidth: "80px", textAlign: "left" }}>
            <h5>publisher:</h5>
            </Box>
            <TextField size="small" />
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
            <TextField size="small" />
            <Button size="small" variant="contained">
            {" "}
            제품 추가{" "}
            </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddBook;
