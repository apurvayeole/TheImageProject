function RightInfo({ album }){
    return(
        <div  className="bg-[#1e1e1e] text-white h-[70vh] w-[30vw] p-6 flex flex-col justify-center gap-4 overflow-y-auto">
            <div>
                <h2 style={{ margin: 0, fontSize: "1.4rem" }}>{album.title}</h2>
                <p style={{ margin: "6px 0 0", color: "#aaa", fontSize: "0.85rem" }}>
                    {album.location} · {album.year}
                </p>
            </div>

            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6", color: "#ccc" }}>
                {album.description}
            </p>

            <div style={{ borderTop: "1px solid #333", paddingTop: "16px" }}>
                <p style={{ margin: "0 0 10px", fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
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
                                <td style={{ color: "#888", paddingBottom: "6px", paddingRight: "16px", whiteSpace: "nowrap" }}>
                                    {label}
                                </td>
                                <td style={{ color: "#eee", paddingBottom: "6px" }}>
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
