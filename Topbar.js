import "./topbar.scss"


export default function topbar({ menuOpen , setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">SB</a>
                    
                    

                </div>
                <div className="itemContainer">
                        <span className="icon"> 
                            stu281130@gmail.com
                        </span>

                    </div>
                
                <div className="right">

                    <div className="hamburger" onClick = {() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                

                </div>

            </div>
            
        </div>
    )
}
