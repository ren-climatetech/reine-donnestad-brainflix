function Button({handleOnClick}) {

    const buttonClick = () => {
        handleOnClick("A comment was added!");
    };
    return (
    <button onClick={() => handleOnClick("A comment was added")}>COMMENT</button>
);
}

export default Button; 

//aside: you can also use export default function on line 1