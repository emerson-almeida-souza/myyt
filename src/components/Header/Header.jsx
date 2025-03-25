export default Header = (props) => {
    return (
        <header className="header">
            <a className="logo">{props.name}</a>
            <nav className="header-search">
                <div>
                    <input type="search" placeholder={props.placeholder} id="search" className="search-input">
                    </input>
                </div>
            </nav>
        </header>
    )
}