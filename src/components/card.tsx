 const Card =({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        padding: '100px',
        margin: '10px',
        border: '2px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return <div style={cardStyle}>{children}</div>
};

export default Card;