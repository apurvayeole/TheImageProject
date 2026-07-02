function NavLinks(){
    return(
        <>
        <a href="https://www.instagram.com/img11.jpg/" target="_blank" rel="noreferrer"
           style={{ color: "var(--text-mid)", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "1px" }}
           onMouseEnter={e => e.target.style.color = "var(--text-dark)"}
           onMouseLeave={e => e.target.style.color = "var(--text-mid)"}>INSTAGRAM</a>
        </>
    )
}

export default NavLinks;