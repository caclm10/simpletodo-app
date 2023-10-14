const LineClamp = ({ max = 1, children }) => {
    return (
        <span
            style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: max
            }}
        >
            {children}
        </span>
    )
}

export default LineClamp