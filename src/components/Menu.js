import "./menu.css";

const MenuItem = ()=>{
    return(
        <div className="suggestion">
            <div className="suggestion-img"></div>
            <div className="suggestion-name">
                <p>Album name</p>
                <p>bla bla bla bla bla bla bla balaeffsdfsdfsdf</p>
            </div>
            <div className="suggestion-follows">
                100 follows
            </div>
        </div>
    )
}

const Menu = ({data}) => {
  return (
    <div className="search-suggestions">
        {
            data?.map((n)=>{
                return(
                    <MenuItem />
                )
            })
        }
    </div>
  )
}

export default Menu