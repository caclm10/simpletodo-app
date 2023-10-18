import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    left: "0",
    whiteSpace: "nowrap",
    width: "1px"
})

export default VisuallyHiddenInput