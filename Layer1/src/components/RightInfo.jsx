function RightInfo({ album }){
    return(
        <div style={{ backgroundColor: "var(--parchment)", color: "var(--text-dark)" }}
             className="h-[70vh] w-[30vw] p-6 flex flex-col justify-center gap-4 overflow-y-auto">
            <div>
                <h2 style={{ margin: 0, fontSize: "1.4rem", color: "var(--text-dark)" }}>{album.title}</h2>
                <p style={{ margin: "6px 0 0", color: "var(--text-mid)", fontSize: "0.85rem" }}>
                    {album.location} · {album.year}
                </p>
            </div>

            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-mid)" }}>
                {album.description}
            </p>

            <div style={{ borderTop: "1px solid var(--dust-grey)", paddingTop: "16px" }}>
                <p style={{ margin: "0 0 10px", fontSize: "0.75rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Camera Info
                </p>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                    <tbody>
                        {[
                            ["Body",          album.camera.body],
                            ["Lens",          album.camera.lens],
                            ["Focal Length",  album.camera.focalLength],
                            ["Aperture",      album.camera.aperture],
                            ["Shutter Speed", album.camera.shutterSpeed],
                            ["ISO",           album.camera.iso],
                        ].map(([label, value]) => (
                            <tr key={label}>
                                <td style={{ color: "var(--text-light)", paddingBottom: "6px", paddingRight: "16px", whiteSpace: "nowrap" }}>
                                    {label}
                                </td>
                                <td style={{ color: "var(--text-dark)", paddingBottom: "6px" }}>
                                    {value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RightInfo;
