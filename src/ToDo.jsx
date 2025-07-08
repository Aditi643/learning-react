function ToDo(){
    function callFun(){
    alert("function called")
}
    return(
        <div>
            <h1>Understanding React</h1>
            <img src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBsaW9ufGVufDB8fDB8fHww"
                 alt="lion"
                 class="photo" />
            <ul>
                <li>hellllllllllllllllllo</li>
                <li>hiiiiiiiiiiiiiiiiiiii</li>
                <li>heyyyyyyyyyyyyyyyyyyy</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default ToDo;