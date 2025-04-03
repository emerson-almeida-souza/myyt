import './Header.css';
import addIcon from '../../assets/add.png'

export const Header = (props) => {
    return (
        <header className="header">
            <a className="logo">{props.name}</a>
            <div className="search-container">
                <input
                    type="search"
                    placeholder={props.placeholder}
                    id="search"
                    className="search-input"
                />
            </div>
            <button className='add-new-video'>
                <img src={addIcon} alt='Add Video' width="20" height="20"></img>
            </button>
        </header>
    );
};
